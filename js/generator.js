// Motor de Geração de Exercícios (Rule Engine)
const Generator = {
    // Busca entidades por tipo
    getEntitiesByType: function(type) {
        return KNOWLEDGE_BASE.entities.filter(e => e.type === type);
    },

    // Sorteia uma entidade aleatória de um tipo específico
    pickRandomEntity: function(type) {
        const filtered = this.getEntitiesByType(type);
        if (filtered.length === 0) return null;
        return filtered[Math.floor(Math.random() * filtered.length)];
    },

    // Preenche o template com os dados sorteados
    fillTemplate: function(template, data) {
        let text = template.text;
        let question = template.question;
        let answer = template.answer;

        // Substitui placeholders como {entity1}, {label1}, {emoji1}, {type1}, {attribute1.prop}
        Object.keys(data).forEach(key => {
            const entity = data[key];
            const num = key.replace('entity', ''); // extrai o número (ex: 1 de entity1)

            const replacements = [
                { pattern: `{entity${num}}`, value: entity.label },
                { pattern: `{label${num}}`, value: entity.label },
                { pattern: `{emoji${num}}`, value: entity.emoji },
                { pattern: `{type${num}}`, value: entity.type },
                { pattern: `{image${num}}`, value: entity.image }
            ];

            // Atributos dinâmicos (ex: {attribute1.color})
            if (entity.attributes) {
                Object.keys(entity.attributes).forEach(attr => {
                    replacements.push({ 
                        pattern: `{attribute${num}.${attr}}`, 
                        value: entity.attributes[attr] 
                    });
                });
            }

            replacements.forEach(r => {
                text = text.replace(new RegExp(r.pattern, 'g'), r.value || "");
                question = question.replace(new RegExp(r.pattern, 'g'), r.value || "");
                answer = answer.replace(new RegExp(r.pattern, 'g'), r.value || "");
            });
        });

        // Limpeza final para placeholders não encontrados
        text = text.replace(/{attribute\d+\.\w+}/g, "...");
        question = question.replace(/{attribute\d+\.\w+}/g, "...");

        return { text, question, answer };
    },

    // Gera alternativas de resposta (incluindo a correta e distrações)
    generateOptions: function(correctAnswer, type) {
        let options = [correctAnswer.toString()];
        
        if (!isNaN(correctAnswer)) {
            // Se for número, gera distrações numéricas próximas
            const val = parseInt(correctAnswer);
            while(options.length < 4) {
                let dist = val + (Math.floor(Math.random() * 5) - 2);
                if (dist < 0) dist = val + 3;
                if (!options.includes(dist.toString())) options.push(dist.toString());
            }
        } else {
            const allOfType = this.getEntitiesByType(type);
            const distractions = allOfType
                .map(e => e.label)
                .filter(label => label !== correctAnswer);
                
            const types = ["animal", "fruta", "objeto"];
            if (types.includes(correctAnswer)) {
                types.filter(t => t !== correctAnswer).forEach(t => options.push(t));
            } else {
                distractions.sort(() => 0.5 - Math.random());
                options = options.concat(distractions.slice(0, 3));
            }
        }

        return [...new Set(options)].sort(() => 0.5 - Math.random());
    },

    // Função principal para gerar o exercício completo
    generateExercise: function(skill) {
        if (skill === 'math_basic') {
            const n1 = Math.floor(Math.random() * 10) + 1;
            const n2 = Math.floor(Math.random() * 10) + 1;
            const isAdd = Math.random() > 0.5;
            
            return {
                text: `${n1} ${isAdd ? '+' : '-'} ${isAdd ? n2 : Math.min(n1, n2)}`,
                question: "Quanto dá essa conta?",
                answer: isAdd ? (n1 + n2).toString() : (n1 - Math.min(n1, n2)).toString(),
                options: this.generateOptions(isAdd ? (n1 + n2) : (n1 - Math.min(n1, n2)), 'number'),
                image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d9d?auto=format&fit=crop&w=300&q=80",
                emoji: "➕"
            };
        }

        const skillTemplates = TEMPLATES.skills[skill];
        if (!skillTemplates) return null;

        // 1. Escolhe um template aleatório da skill
        const template = skillTemplates[Math.floor(Math.random() * skillTemplates.length)];
        
        // 2. Sorteia as entidades necessárias
        const selectedData = {};
        template.required_types.forEach((type, index) => {
            selectedData[`entity${index + 1}`] = this.pickRandomEntity(type);
        });

        // Caso especial para contagem (logica simples)
        if (skill === 'counting') {
            const entity = selectedData['entity1'];
            const count = Math.floor(Math.random() * 5) + 1;
            const emojisList = Array(count).fill(entity.emoji).join(' ');
            
            const processed = this.fillTemplate(template, selectedData);
            processed.text = emojisList;
            processed.answer = count.toString();
            processed.options = ["1", "2", "3", "4", "5", "6"].sort(() => 0.5 - Math.random()).slice(0, 4);
            if (!processed.options.includes(processed.answer)) processed.options[0] = processed.answer;
            processed.image = entity.image;
            return processed;
        }

        // 3. Processa o template
        const finalExercise = this.fillTemplate(template, selectedData);
        
        // 4. Gera opções (usando o tipo da primeira entidade como base para distrações)
        const baseType = template.required_types[0];
        finalExercise.options = this.generateOptions(finalExercise.answer, baseType);
        finalExercise.image = selectedData['entity1'].image;
        finalExercise.emoji = selectedData['entity1'].emoji;

        return finalExercise;
    }
};
