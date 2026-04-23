// ─────────────────────────────────────────────────────────────────────────────
// Generator — Motor de Exercícios
//
// Funcionalidades:
//   • Anti-repetição: histórico circular de 15 combinações recentes
//   • Weighted random: entidades recentes têm menor peso de sorteio
//   • Dificuldade adaptativa: tracker de acertos por skill, sobe/desce nível
//   • Variantes de frase: sorteia aleatoriamente de texts[] e questions[]
//   • Distrações inteligentes por tipo de resposta (attribute, label, type, number)
//   • Suporte a dois sujeitos (entity1 + entity2)
// ─────────────────────────────────────────────────────────────────────────────
const Generator = {

    // ── Estado interno ───────────────────────────────────────────────────────

    // Histórico circular: guarda as últimas N combinações "templateId+entityId"
    _recentPool: [],
    _RECENT_MAX: 15,

    // Pesos das entidades: id → peso (começa em 10, cai ao usar, sobe com o tempo)
    _weights: {},

    // Tracker de desempenho por skill: { skill: { streak: 0, level: 1, wrong: 0 } }
    _performance: {},

    // ── Acesso à base de dados ────────────────────────────────────────────────

    getEntitiesByType: function (type) {
        // Aceita tipo único ou array de tipos
        if (Array.isArray(type)) {
            return KNOWLEDGE_BASE.entities.filter(e => type.includes(e.type));
        }
        return KNOWLEDGE_BASE.entities.filter(e => e.type === type);
    },

    getEntityById: function (id) {
        return KNOWLEDGE_BASE.entities.find(e => e.id === id) || null;
    },

    // ── Weighted Random ───────────────────────────────────────────────────────

    _getWeight: function (entity) {
        if (this._weights[entity.id] === undefined) this._weights[entity.id] = 10;
        return Math.max(1, this._weights[entity.id]);
    },

    _penalizeEntity: function (entityId) {
        this._weights[entityId] = 1; // cai para peso mínimo após uso
    },

    _recoverWeights: function () {
        // Recupera +1 de peso para todas as entidades não usadas recentemente
        Object.keys(this._weights).forEach(id => {
            if (this._weights[id] < 10) this._weights[id]++;
        });
    },

    pickWeightedEntity: function (type, excludeIds = []) {
        const pool = this.getEntitiesByType(type).filter(e => !excludeIds.includes(e.id));
        if (pool.length === 0) return this.getEntitiesByType(type)[0] || null;

        const totalWeight = pool.reduce((sum, e) => sum + this._getWeight(e), 0);
        let rand = Math.random() * totalWeight;
        for (const entity of pool) {
            rand -= this._getWeight(entity);
            if (rand <= 0) return entity;
        }
        return pool[pool.length - 1];
    },

    // ── Anti-repetição ────────────────────────────────────────────────────────

    _makeKey: function (templateId, entityIds) {
        return templateId + '|' + entityIds.join('+');
    },

    _isRecent: function (key) {
        return this._recentPool.includes(key);
    },

    _markUsed: function (key, entityIds) {
        this._recentPool.push(key);
        if (this._recentPool.length > this._RECENT_MAX) this._recentPool.shift();
        entityIds.forEach(id => this._penalizeEntity(id));
        this._recoverWeights();
    },

    // ── Dificuldade Adaptativa ────────────────────────────────────────────────

    getLevel: function (skill) {
        if (!this._performance[skill]) this._performance[skill] = { streak: 0, level: 1, wrong: 0 };
        return this._performance[skill].level;
    },

    onCorrect: function (skill) {
        if (!this._performance[skill]) this._performance[skill] = { streak: 0, level: 1, wrong: 0 };
        const p = this._performance[skill];
        p.wrong = 0;
        p.streak++;
        // Sobe de nível a cada 4 acertos consecutivos (máx 3)
        if (p.streak >= 4 && p.level < 3) {
            p.level++;
            p.streak = 0;
        }
    },

    onWrong: function (skill) {
        if (!this._performance[skill]) this._performance[skill] = { streak: 0, level: 1, wrong: 0 };
        const p = this._performance[skill];
        p.streak = 0;
        p.wrong++;
        // Desce de nível após 2 erros seguidos (mín 1)
        if (p.wrong >= 2 && p.level > 1) {
            p.level--;
            p.wrong = 0;
        }
    },

    // ── Seleção de Template ───────────────────────────────────────────────────

    _pickTemplate: function (skill) {
        const all = TEMPLATES.skills[skill];
        if (!all || all.length === 0) return null;

        const level = this.getLevel(skill);

        // Filtra por dificuldade compatível com nível atual
        // Nível 1 → só diff 1; Nível 2 → diff 1 e 2; Nível 3 → todos
        const compatible = all.filter(t => !t.difficulty || t.difficulty <= level);
        const pool = compatible.length > 0 ? compatible : all;

        // Tenta até 5 vezes pegar um template não recente
        for (let attempt = 0; attempt < 5; attempt++) {
            const t = pool[Math.floor(Math.random() * pool.length)];
            // Verificação prévia: se já foi usado recentemente com alguma entidade, tenta de novo
            const recentCheck = this._recentPool.some(k => k.startsWith(t.id + '|'));
            if (!recentCheck || attempt === 4) return t;
        }
        return pool[Math.floor(Math.random() * pool.length)];
    },

    // ── Preenchimento de Template ─────────────────────────────────────────────

    _pickVariant: function (arr) {
        // Aceita string (legado) ou array de variantes
        if (!arr) return '';
        if (typeof arr === 'string') return arr;
        return arr[Math.floor(Math.random() * arr.length)];
    },

    fillTemplate: function (template, data) {
        let text     = this._pickVariant(template.texts || template.text);
        let question = this._pickVariant(template.questions || template.question);
        let answer   = template.answer || '';

        Object.keys(data).forEach(key => {
            const entity = data[key];
            if (!entity) return;
            const num = key.replace('entity', '');

            const replacements = [
                [new RegExp(`\\{entity${num}\\}`,  'g'), entity.label || ''],
                [new RegExp(`\\{label${num}\\}`,   'g'), entity.label || ''],
                [new RegExp(`\\{emoji${num}\\}`,   'g'), entity.emoji || ''],
                [new RegExp(`\\{type${num}\\}`,    'g'), entity.type  || ''],
                [new RegExp(`\\{image${num}\\}`,   'g'), entity.image || '']
            ];

            if (entity.attributes) {
                Object.keys(entity.attributes).forEach(attr => {
                    replacements.push([
                        new RegExp(`\\{attribute${num}\\.${attr}\\}`, 'g'),
                        String(entity.attributes[attr] || '')
                    ]);
                });
            }

            replacements.forEach(([pattern, value]) => {
                text     = text.replace(pattern, value);
                question = question.replace(pattern, value);
                answer   = answer.replace(pattern, value);
            });
        });

        // Limpa placeholders não resolvidos
        text     = text.replace(/\{attribute\d+\.\w+\}/g, '…');
        question = question.replace(/\{attribute\d+\.\w+\}/g, '…');

        return { text, question, answer };
    },

    // ── Geração de Distrações ─────────────────────────────────────────────────

    generateOptions: function (correctAnswer, template, data) {
        const correct = String(correctAnswer);
        let options   = [correct];
        const ansType = template ? template.answer_type : null;

        // Número → distrações próximas
        if (!isNaN(correct) && correct !== '') {
            const val = parseInt(correct);
            const candidates = [];
            for (let d = -3; d <= 3; d++) {
                if (d !== 0) {
                    const v = val + d;
                    if (v > 0) candidates.push(String(v));
                }
            }
            candidates.sort(() => Math.random() - 0.5);
            while (options.length < 4 && candidates.length > 0) {
                options.push(candidates.shift());
            }
            return [...new Set(options)].sort(() => Math.random() - 0.5).slice(0, 4);
        }

        // Classificação de tipo (animal/fruta/objeto/etc.)
        if (ansType === 'type') {
            const allTypes = [...new Set(KNOWLEDGE_BASE.entities.map(e => e.type))];
            const distractors = allTypes.filter(t => t !== correct);
            distractors.sort(() => Math.random() - 0.5);
            options = [correct, ...distractors.slice(0, 3)];
            return options.sort(() => Math.random() - 0.5);
        }

        // Label (nome de entidade) → outras entidades do mesmo tipo
        if (ansType === 'label') {
            const baseType = template.required_types[0];
            const pool = this.getEntitiesByType(baseType)
                .map(e => e.label)
                .filter(l => l !== correct);
            pool.sort(() => Math.random() - 0.5);
            options = [correct, ...pool.slice(0, 3)];
            return options.sort(() => Math.random() - 0.5);
        }

        // Atributo → distrações a partir de entidades do mesmo tipo
        if (ansType === 'attribute') {
            const baseType = template.required_types[0];
            const answerKey = template.answer.match(/\{attribute\d+\.(\w+)\}/)?.[1];
            if (answerKey) {
                const pool = this.getEntitiesByType(baseType)
                    .map(e => e.attributes?.[answerKey])
                    .filter(v => v !== undefined && String(v) !== correct);
                const unique = [...new Set(pool.map(String))];
                unique.sort(() => Math.random() - 0.5);
                options = [correct, ...unique.slice(0, 3)];
            }
            // Se não encontrou distrações suficientes, completa com labels do mesmo tipo
            if (options.length < 4) {
                const fallback = this.getEntitiesByType(baseType)
                    .map(e => e.label)
                    .filter(l => !options.includes(l));
                fallback.sort(() => Math.random() - 0.5);
                while (options.length < 4 && fallback.length > 0) options.push(fallback.shift());
            }
            return [...new Set(options)].sort(() => Math.random() - 0.5).slice(0, 4);
        }

        // Fallback genérico
        const fallback = KNOWLEDGE_BASE.entities
            .map(e => e.label)
            .filter(l => l !== correct);
        fallback.sort(() => Math.random() - 0.5);
        options = [correct, ...fallback.slice(0, 3)];
        return [...new Set(options)].sort(() => Math.random() - 0.5);
    },

    // ── Exercício de Matemática ───────────────────────────────────────────────

    _generateMath: function (skill) {
        const level = this.getLevel(skill);
        let n1, n2, op, answer;

        if (level === 1) {
            n1 = Math.floor(Math.random() * 9) + 1;
            n2 = Math.floor(Math.random() * 9) + 1;
            op = Math.random() > 0.4 ? '+' : '-';
            if (op === '-') { n1 = Math.max(n1, n2); n2 = Math.min(n1, n2); }
            answer = op === '+' ? n1 + n2 : n1 - n2;
        } else if (level === 2) {
            n1 = Math.floor(Math.random() * 15) + 5;
            n2 = Math.floor(Math.random() * 10) + 1;
            op = Math.random() > 0.3 ? '+' : '-';
            if (op === '-') n1 = Math.max(n1, n2);
            answer = op === '+' ? n1 + n2 : n1 - n2;
        } else {
            // Nível 3: multiplicação simples
            const ops = ['+', '-', '×'];
            op = ops[Math.floor(Math.random() * ops.length)];
            if (op === '×') {
                n1 = Math.floor(Math.random() * 5) + 2;
                n2 = Math.floor(Math.random() * 5) + 2;
                answer = n1 * n2;
            } else {
                n1 = Math.floor(Math.random() * 20) + 5;
                n2 = Math.floor(Math.random() * 10) + 1;
                if (op === '-') n1 = Math.max(n1, n2);
                answer = op === '+' ? n1 + n2 : n1 - n2;
            }
        }

        const question_variants = [
            "Quanto dá essa conta?",
            "Qual é o resultado?",
            "Você consegue resolver?",
            "Calcule o resultado:"
        ];

        return {
            text: `${n1} ${op} ${n2} = ?`,
            question: question_variants[Math.floor(Math.random() * question_variants.length)],
            answer: String(answer),
            options: this.generateOptions(answer, { answer_type: 'number' }, {}),
            image: null,
            emoji: op === '+' ? '➕' : op === '-' ? '➖' : '✖️',
            skill: 'math_basic'
        };
    },

    // ── Exercício de Contagem ─────────────────────────────────────────────────

    _generateCounting: function (template, selectedData) {
        const entity = selectedData['entity1'];
        const level  = this.getLevel('counting');
        const maxCount = level === 1 ? 5 : level === 2 ? 8 : 10;
        const count    = Math.floor(Math.random() * maxCount) + 1;
        const emojisList = Array(count).fill(entity.emoji).join(' ');

        const processed  = this.fillTemplate(template, selectedData);
        processed.text   = emojisList;
        processed.answer = String(count);

        // Opções: garante que a correta está inclusa, com distrações próximas
        const pool = [];
        for (let d = -2; d <= 2; d++) {
            const v = count + d;
            if (v > 0 && v <= maxCount + 2) pool.push(String(v));
        }
        pool.sort(() => Math.random() - 0.5);
        const opts = [...new Set([String(count), ...pool])].slice(0, 4);
        if (!opts.includes(String(count))) opts[0] = String(count);
        processed.options = opts.sort(() => Math.random() - 0.5);
        processed.image   = entity.image;
        processed.emoji   = entity.emoji;
        return processed;
    },

    // ── Função Principal ──────────────────────────────────────────────────────

    generateExercise: function (skill) {

        // Matemática: lógica separada
        if (skill === 'math_basic') return this._generateMath(skill);

        const skillTemplates = TEMPLATES.skills[skill];
        if (!skillTemplates) return null;

        // 1. Escolhe template compatível com nível atual (com anti-repetição)
        const template = this._pickTemplate(skill);
        if (!template) return null;

        // 2. Sorteia as entidades necessárias (weighted, sem repetição entre si)
        const selectedData = {};
        const usedIds      = [];

        for (let i = 0; i < template.required_types.length; i++) {
            const type   = template.required_types[i];
            const entity = this.pickWeightedEntity(type, usedIds);
            if (!entity) continue;
            selectedData[`entity${i + 1}`] = entity;
            usedIds.push(entity.id);
        }

        if (!selectedData['entity1']) return null;

        // 3. Verifica anti-repetição (chave template+entidades)
        const key = this._makeKey(template.id, usedIds);
        // Se a combinação é recente E ainda temos outras opções, tenta mais uma vez
        if (this._isRecent(key) && KNOWLEDGE_BASE.entities.length > 5) {
            const altEntity = this.pickWeightedEntity(
                template.required_types[0],
                [...usedIds, selectedData['entity1'].id]
            );
            if (altEntity) {
                selectedData['entity1'] = altEntity;
                usedIds[0] = altEntity.id;
            }
        }

        // 4. Contagem: lógica especial
        if (skill === 'counting') {
            const result = this._generateCounting(template, selectedData);
            this._markUsed(this._makeKey(template.id, usedIds), usedIds);
            return { ...result, skill };
        }

        // 5. Preenche o template com as entidades sorteadas
        const filled = this.fillTemplate(template, selectedData);

        // 6. Gera opções de resposta inteligentes
        filled.options = this.generateOptions(filled.answer, template, selectedData);
        filled.image   = selectedData['entity1'].image || null;
        filled.emoji   = selectedData['entity1'].emoji || '';
        filled.fun_fact = selectedData['entity1'].fun_fact || null;
        filled.skill   = skill;

        // 7. Registra uso no histórico
        this._markUsed(this._makeKey(template.id, usedIds), usedIds);

        return filled;
    }
};
