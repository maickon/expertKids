// ─────────────────────────────────────────────────────────────────────────────
// ExpertKids — Lógica Principal
// ─────────────────────────────────────────────────────────────────────────────
const App = {

    // ── Estado da Sessão ──────────────────────────────────────────────────────
    currentExercise: null,
    score:           0,
    lives:           3,
    maxLives:        3,
    currentSkill:    null,
    soundEnabled:    true,
    bgMusic:         null,

    // ── Engajamento ───────────────────────────────────────────────────────────
    streak:                  0,   // acertos consecutivos
    totalAnswered:           0,
    sessionCorrect:          0,
    sessionCharacter:        null, // personagem do dia
    spacedQueue:             [],   // fila de repetição espaçada
    correctSinceLastSpaced:  0,
    isFirstExercise:         true,

    // Nomes afetivos para o personagem do dia
    _charNames: ['Léo','Nina','Bento','Cora','Tito','Lola','Max','Mel','Duda','Guto','Fifi','Rafa'],

    // ── Áudio ─────────────────────────────────────────────────────────────────
    sounds: {
        correct: new Audio('audios/correct.mp3'),
        wrong:   new Audio('audios/wrong.mp3'),
        click:   new Audio('audios/click.mp3')
    },

    skillMusic: {
        reading_basic:  'audios/reading_basic.mp3',
        classification: 'audios/classification.mp3',
        counting:       'audios/counting.mp3',
        vocabulary:     'audios/vocabulary.mp3',
        math_basic:     'audios/counting.mp3',
        mundo:          'audios/reading_basic.mp3'
    },

    // ── Inicialização ─────────────────────────────────────────────────────────
    init: function () {
        this.setupAudio();
        this.bindEvents();
        this.updateUI();
        this._injectSetupCharacter(); // injeta personagem do dia no menu
    },

    setupAudio: function () {
        Object.values(this.sounds).forEach(s => s.volume = 0.5);
    },

    playEffect: function (name) {
        if (this.soundEnabled && this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play().catch(() => {});
        }
    },

    playBackgroundMusic: function (skill) {
        if (!this.soundEnabled) return;
        if (this.bgMusic) this.bgMusic.pause();
        const url = this.skillMusic[skill] || this.skillMusic.reading_basic;
        this.bgMusic = new Audio(url);
        this.bgMusic.loop   = true;
        this.bgMusic.volume = 0.15;
        this.bgMusic.play().catch(() => {});
    },

    // ── Personagem do Dia ─────────────────────────────────────────────────────
    _initSessionCharacter: function () {
        const animals = Generator.getEntitiesByType('animal');
        if (!animals.length) return;
        const animal = animals[Math.floor(Math.random() * animals.length)];
        const name   = this._charNames[Math.floor(Math.random() * this._charNames.length)];
        this.sessionCharacter = { ...animal, characterName: name };
    },

    _injectSetupCharacter: function () {
        this._initSessionCharacter();
        if (!this.sessionCharacter) return;
        const c = this.sessionCharacter;
        const html = `
            <div id="char-banner" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-4 flex items-center gap-3 mb-2 pop-in">
                <div class="text-5xl">${c.emoji}</div>
                <div>
                    <p class="font-kids font-bold text-blue-700 text-base leading-tight">
                        ${c.characterName} está te ajudando hoje! 🌟
                    </p>
                    <p class="text-xs text-blue-500 mt-0.5">Escolha um desafio para começar</p>
                </div>
            </div>`;
        $('#setup-screen h2').before(html);
    },

    // ── Eventos ───────────────────────────────────────────────────────────────
    bindEvents: function () {
        const self = this;

        $('#toggle-sound').on('click', function () {
            self.soundEnabled = !self.soundEnabled;
            $(this).text(self.soundEnabled ? '🔊' : '🔇');
            if (!self.soundEnabled && self.bgMusic) {
                self.bgMusic.pause();
            } else if (self.soundEnabled && self.currentSkill) {
                self.playBackgroundMusic(self.currentSkill);
            }
        });

        $('.skill-btn').on('click', function () {
            self.playEffect('click');
            self.currentSkill    = $(this).data('skill');
            self.isFirstExercise = true;
            self.playBackgroundMusic(self.currentSkill);
            self.startExercise();
        });

        $(document).on('click', '.option-btn', function () {
            self.checkAnswer($(this).text().trim());
        });

        $(document).on('click', '#back-to-menu', function () {
            self.showScreen('setup-screen');
            self.streak = 0;
            self._updateStreakUI();
        });

        $(document).on('click', '#next-exercise', function () {
            self.startExercise();
        });

        $(document).on('click', '#share-whatsapp', function () {
            self.shareResults();
        });

        $(document).on('click', '#reset-game', function () {
            self.resetGame();
        });
    },

    // ── UI ────────────────────────────────────────────────────────────────────
    updateUI: function () {
        $('#stars-top').text(this.score);
        $('#lives-count').text(this.lives);
        this._updateStreakUI();
    },

    _updateStreakUI: function () {
        // Remove indicador anterior
        $('#streak-indicator').remove();
        if (this.streak < 2) return;

        const flames = this.streak >= 10 ? '🔥🔥🔥'
                     : this.streak >= 5  ? '🔥🔥'
                     :                     '🔥';
        const badge = `<div id="streak-indicator"
            class="bg-orange-100 border-2 border-orange-400 rounded-full px-3 py-1 flex items-center gap-1 shadow-sm font-bold text-orange-600 text-sm pop-in">
            ${flames} <span>${this.streak}</span>
        </div>`;
        // Injeta ao lado das vidas no header
        $('#lives-count').closest('div').after(badge);
    },

    showScreen: function (screenId) {
        $('#setup-screen, #exercise-screen, #feedback-screen').addClass('hidden');
        $(`#${screenId}`).removeClass('hidden');
    },

    // ── Exercícios ────────────────────────────────────────────────────────────
    startExercise: function () {
        // Repetição espaçada: após 3 acertos, relembra pergunta errada
        if (this.spacedQueue.length > 0 && this.correctSinceLastSpaced >= 3) {
            const item           = this.spacedQueue.shift();
            this.currentExercise = item.exercise;
            this.correctSinceLastSpaced = 0;
            this.renderExercise(true);
            this.showScreen('exercise-screen');
            return;
        }

        // Força nível 1 na primeira pergunta da sessão (vitória garantida)
        if (this.isFirstExercise) {
            const saved = Generator._performance[this.currentSkill];
            if (saved) saved.level = 1;
            this.isFirstExercise = false;
        }

        this.currentExercise = Generator.generateExercise(this.currentSkill);
        if (!this.currentExercise) return;
        this.renderExercise(false);
        this.showScreen('exercise-screen');
    },

    renderExercise: function (isReplay) {
        const ex      = this.currentExercise;
        const level   = Generator.getLevel(this.currentSkill || 'reading_basic');
        const levelBadge = level === 3 ? '🌟🌟🌟' : level === 2 ? '🌟🌟' : '🌟';

        const replayBanner = isReplay ? `
            <div class="bg-yellow-50 border-2 border-yellow-300 rounded-2xl px-4 py-2 text-sm font-bold text-yellow-700 text-center mb-3 pop-in">
                🔁 Tente esta de novo — você errou antes!
            </div>` : '';

        const charLine = this.sessionCharacter ? `
            <p class="text-xs text-slate-400 text-center mb-3">
                ${this.sessionCharacter.emoji} <em>${this.sessionCharacter.characterName} pergunta:</em>
            </p>` : '';

        // Imagem ou emoji grande quando não há imagem (ex: matemática)
        const mediaBlock = ex.image
            ? `<div class="relative w-full aspect-square max-h-[220px] mb-4">
                   <img src="${ex.image}" class="w-full h-full object-cover rounded-[2rem] shadow-inner border-2 border-slate-50" loading="lazy">
                   <div class="absolute -bottom-2 -right-2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-blue-50">
                       ${ex.emoji || '✨'}
                   </div>
               </div>`
            : `<div class="w-full flex items-center justify-center mb-4">
                   <div class="text-9xl pop-in">${ex.emoji || '🧮'}</div>
               </div>`;

        const html = `
            <div class="flex flex-col flex-grow pop-in">
                <div class="flex items-center justify-between mb-3">
                    <button id="back-to-menu" class="text-blue-500 font-bold flex items-center gap-1">
                        <span class="text-xl">⬅</span> Menu
                    </button>
                    <span class="text-xs text-slate-400 font-bold">${levelBadge} Nível ${level}</span>
                </div>

                ${replayBanner}

                <div class="bg-white rounded-[2.5rem] shadow-xl p-5 flex-grow flex flex-col items-center justify-between border-4 border-white">
                    ${mediaBlock}
                    <div class="w-full space-y-3 text-center">
                        ${charLine}
                        <p class="text-lg text-slate-600 leading-snug bg-slate-50 px-4 py-3 rounded-2xl border-2 border-dashed border-slate-200">
                            ${ex.text}
                        </p>
                        <h3 class="font-kids text-2xl font-bold text-blue-700 leading-tight">
                            ${ex.question}
                        </h3>
                    </div>
                    <div class="grid grid-cols-2 gap-3 w-full mt-5">
                        ${(ex.options || []).map(opt => `
                            <button class="option-btn btn-3d bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 font-kids py-4 px-2 rounded-2xl text-lg font-bold active:bg-blue-600 active:text-white transition-colors">
                                ${opt}
                            </button>`).join('')}
                    </div>
                </div>
            </div>`;

        $('#exercise-screen').html(html);
    },

    // ── Verificação de Resposta ───────────────────────────────────────────────
    checkAnswer: function (selected) {
        const isCorrect = selected === this.currentExercise.answer.trim();
        this.totalAnswered++;

        if (isCorrect) {
            this.streak++;
            this.sessionCorrect++;
            this.correctSinceLastSpaced++;
            Generator.onCorrect(this.currentSkill);
            this.playEffect('correct');

            // ── Jackpot: chance crescente de multiplicar estrelas ──────────
            let starsEarned = 1;
            if (this.streak >= 5) {
                const jackpotChance = Math.min(0.1 + (this.streak - 5) * 0.05, 0.35);
                if (Math.random() < jackpotChance) {
                    starsEarned = 3;
                }
            }

            this.score += starsEarned;
            this.updateUI();
            this.showFeedback(true, starsEarned);

        } else {
            this.streak = 0;
            this.lives--;
            Generator.onWrong(this.currentSkill);
            this.playEffect('wrong');

            // Adiciona à fila de repetição espaçada (máx 5 itens)
            if (this.spacedQueue.length < 5) {
                this.spacedQueue.push({ exercise: { ...this.currentExercise } });
            }

            this.updateUI();
            if (this.lives <= 0) {
                this.showGameOver();
            } else {
                this.showFeedback(false, 0);
            }
        }
    },

    // ── Tela de Feedback ──────────────────────────────────────────────────────
    showFeedback: function (isCorrect, starsEarned) {
        const isJackpot = starsEarned >= 3;
        const funFact   = this.currentExercise.fun_fact;

        // Mensagens de acerto variadas
        const correctMsgs = [
            'Incrível! 🎉', 'Muito bem! 🌟', 'Arrasou! 🚀',
            'Você é demais! 💪', 'Perfeito! ✨', 'Que resposta boa! 👏'
        ];
        const wrongMsgs = [
            'Quase lá! 💡', 'Continue tentando! 🔄',
            'Não desista! 💪', 'Você vai conseguir! 🌈'
        ];
        const msg = isCorrect
            ? correctMsgs[Math.floor(Math.random() * correctMsgs.length)]
            : wrongMsgs[Math.floor(Math.random() * wrongMsgs.length)];

        // Bloco de estrelas ganhas
        const starsBlock = isCorrect ? (isJackpot
            ? `<div class="bg-yellow-50 border-2 border-yellow-400 rounded-2xl px-5 py-3 pop-in">
                   <p class="font-kids text-yellow-600 font-black text-lg">⭐⭐⭐ JACKPOT! +3 estrelas!</p>
                   <p class="text-xs text-yellow-500 mt-1">Sequência incrível de ${this.streak} acertos!</p>
               </div>`
            : `<p class="text-lg text-slate-500 font-bold">Você ganhou uma estrela! ⭐</p>`)
            : `<p class="text-slate-500 font-bold mb-2 text-sm">A resposta certa era:</p>
               <div class="bg-blue-100 text-blue-700 px-6 py-2 rounded-2xl text-xl font-black shadow-sm inline-block">
                   ${this.currentExercise.answer}
               </div>`;

        // Streak badge
        const streakBlock = (isCorrect && this.streak >= 3)
            ? `<div class="bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 text-sm font-bold text-orange-600">
                   🔥 ${this.streak} acertos seguidos!
               </div>`
            : '';

        // Fun fact após acerto
        const funFactBlock = (isCorrect && funFact)
            ? `<div class="bg-indigo-50 border-2 border-indigo-200 rounded-2xl px-4 py-3 text-left mt-1">
                   <p class="text-xs font-black text-indigo-500 uppercase tracking-widest mb-1">💡 Você sabia?</p>
                   <p class="text-sm text-indigo-700 leading-relaxed">${funFact}</p>
               </div>`
            : '';

        const html = `
            <div class="pop-in flex flex-col items-center justify-center text-center space-y-4 py-2 px-1">
                <div class="text-7xl ${isJackpot ? 'animate-spin' : 'animate-bounce'}">
                    ${isJackpot ? '🏆' : isCorrect ? '🎉' : '💡'}
                </div>

                <h2 class="font-kids text-3xl font-bold ${isCorrect ? 'text-green-500' : 'text-orange-500'}">
                    ${msg}
                </h2>

                ${starsBlock}
                ${streakBlock}
                ${funFactBlock}

                <button id="next-exercise" class="btn-3d w-full max-w-xs bg-blue-600 text-white font-kids py-4 rounded-2xl text-xl font-bold shadow-xl mt-2">
                    ${isCorrect ? 'Próximo desafio 🚀' : 'Continuar 🔄'}
                </button>
            </div>`;

        $('#feedback-screen').html(html);
        this.showScreen('feedback-screen');
    },

    // ── Game Over ─────────────────────────────────────────────────────────────
    showGameOver: function () {
        const accuracy = this.totalAnswered > 0
            ? Math.round((this.sessionCorrect / this.totalAnswered) * 100)
            : 0;

        const medal = this.score >= 20 ? '🏆' : this.score >= 10 ? '🥇' : this.score >= 5 ? '🥈' : '🌟';
        const title = this.score >= 20 ? 'Você é um Gênio!'
                    : this.score >= 10 ? 'Incrível!'
                    : this.score >= 5  ? 'Muito bom!'
                    : 'Continue praticando!';

        const charMsg = this.sessionCharacter
            ? `<p class="text-sm text-slate-500 mt-2">${this.sessionCharacter.emoji} ${this.sessionCharacter.characterName} ficou muito orgulhoso de você!</p>`
            : '';

        // Determina número do WhatsApp do config ou fallback
        const waNumber = (typeof CONFIG !== 'undefined' && CONFIG.WHATSAPP_NUMBER)
            ? CONFIG.WHATSAPP_NUMBER
            : '5511999999999';

        const html = `
            <div class="pop-in flex flex-col items-center justify-center text-center space-y-5 py-4 px-2">
                <div class="text-8xl">${medal}</div>
                <h2 class="font-kids text-4xl font-bold text-blue-600 leading-tight">${title}</h2>

                <div class="bg-white p-5 rounded-[2rem] shadow-lg border-4 border-yellow-200 w-full max-w-xs space-y-3">
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">Resultado Final</p>
                    <div class="flex items-center justify-center gap-2">
                        <span class="text-5xl">⭐</span>
                        <span class="font-black text-yellow-500" style="font-size:3.5rem;line-height:1">${this.score}</span>
                    </div>
                    <div class="flex justify-around text-sm text-slate-500 font-bold pt-2 border-t border-slate-100">
                        <span>📝 ${this.totalAnswered} questões</span>
                        <span>🎯 ${accuracy}% de acerto</span>
                    </div>
                    ${charMsg}
                </div>

                <p class="text-base text-slate-500 font-medium px-4">
                    Mostre para o papai e a mamãe quantas estrelas você conquistou! 💛
                </p>

                <div class="w-full space-y-3 max-w-xs">
                    <button id="share-whatsapp"
                        data-wa="${waNumber}"
                        class="btn-3d w-full bg-green-500 text-white font-kids py-4 rounded-2xl text-xl font-bold flex items-center justify-center gap-3">
                        <span class="text-2xl">📱</span> Compartilhar com os Pais
                    </button>
                    <button id="reset-game" class="w-full text-slate-400 font-bold py-2 hover:text-blue-500 transition-colors">
                        Recomeçar aventura 🔄
                    </button>
                </div>
            </div>`;

        $('#feedback-screen').html(html);
        this.showScreen('feedback-screen');
    },

    shareResults: function () {
        // Prioridade: WhatsApp salvo pelos pais → CONFIG → fallback
        let waNumber = '';
        try {
            const parentsData = JSON.parse(localStorage.getItem('expertkids_parents') || '{}');
            waNumber = parentsData.whatsapp || '';
        } catch (e) {}
        if (!waNumber && typeof CONFIG !== 'undefined') waNumber = CONFIG.WHATSAPP_NUMBER || '';
        if (!waNumber) waNumber = $('#share-whatsapp').data('wa') || '5511999999999';

        const char    = this.sessionCharacter ? ` junto com o ${this.sessionCharacter.characterName}` : '';
        const acc     = Math.round((this.sessionCorrect / Math.max(this.totalAnswered, 1)) * 100);
        const message = `Oi! Acabei de jogar ExpertKids${char} e conquistei ${this.score} estrelas com ${acc}% de acerto! 🌟🏆 Vem ver!`;
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
        this.resetGame();
    },

    resetGame: function () {
        this.score                  = 0;
        this.lives                  = this.maxLives;
        this.streak                 = 0;
        this.totalAnswered          = 0;
        this.sessionCorrect         = 0;
        this.spacedQueue            = [];
        this.correctSinceLastSpaced = 0;
        this.isFirstExercise        = true;
        this.currentSkill           = null;
        if (this.bgMusic) this.bgMusic.pause();
        this.updateUI();
        // Novo personagem do dia ao reiniciar
        $('#char-banner').remove();
        this._initSessionCharacter();
        if (this.sessionCharacter) {
            const c    = this.sessionCharacter;
            const html = `
                <div id="char-banner" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-4 flex items-center gap-3 mb-2 pop-in">
                    <div class="text-5xl">${c.emoji}</div>
                    <div>
                        <p class="font-kids font-bold text-blue-700 text-base leading-tight">
                            ${c.characterName} está te ajudando hoje! 🌟
                        </p>
                        <p class="text-xs text-blue-500 mt-0.5">Escolha um desafio para começar</p>
                    </div>
                </div>`;
            $('#setup-screen h2').before(html);
        }
        this.showScreen('setup-screen');
    }
};

$(document).ready(() => App.init());
