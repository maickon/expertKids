// Lógica Principal da Aplicação
const App = {
    currentExercise: null,
    score: 0,
    lives: 3,
    maxLives: 3,
    currentSkill: null,
    soundEnabled: true,
    bgMusic: null,

    sounds: {
        correct: new Audio('audios/correct.mp3'),
        wrong: new Audio('audios/wrong.mp3'),
        click: new Audio('audios/click.mp3')
    },

    skillMusic: {
        reading_basic: 'audios/reading_basic.mp3',
        classification: 'audios/classification.mp3',
        counting: 'audios/counting.mp3',
        vocabulary: 'audios/vocabulary.mp3',
        math_basic: 'audios/counting.mp3'
    },

    init: function() {
        this.bindEvents();
        this.setupAudio();
        this.updateUI();
        console.log("ExpertKids pronto para mobile!");
    },

    setupAudio: function() {
        Object.values(this.sounds).forEach(s => s.volume = 0.5);
    },

    playEffect: function(name) {
        if (this.soundEnabled && this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play().catch(e => console.log("Áudio aguardando interação..."));
        }
    },

    playBackgroundMusic: function(skill) {
        if (!this.soundEnabled) return;
        if (this.bgMusic) this.bgMusic.pause();

        const url = this.skillMusic[skill] || this.skillMusic.reading_basic;
        this.bgMusic = new Audio(url);
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.15;
        this.bgMusic.play().catch(e => console.log("Música aguardando interação..."));
    },

    bindEvents: function() {
        const self = this;

        $("#toggle-sound").on("click", function() {
            self.soundEnabled = !self.soundEnabled;
            $(this).text(self.soundEnabled ? "🔊" : "🔇");
            if (!self.soundEnabled && self.bgMusic) {
                self.bgMusic.pause();
            } else if (self.soundEnabled && self.currentSkill) {
                self.playBackgroundMusic(self.currentSkill);
            }
        });

        $(".skill-btn").on("click", function() {
            self.playEffect('click');
            self.currentSkill = $(this).data("skill");
            self.playBackgroundMusic(self.currentSkill);
            self.startExercise();
        });

        $(document).on("click", ".option-btn", function() {
            const selected = $(this).text();
            self.checkAnswer(selected);
        });

        $(document).on("click", "#back-to-menu", function() {
            self.showScreen("setup-screen");
        });

        $(document).on("click", "#next-exercise", function() {
            self.startExercise();
        });

        $(document).on("click", "#share-whatsapp", function() {
            self.shareResults();
        });

        $(document).on("click", "#reset-game", function() {
            self.resetGame();
        });
    },

    updateUI: function() {
        $("#stars-top").text(this.score);
        $("#lives-count").text(this.lives);
    },

    showScreen: function(screenId) {
        $("#setup-screen, #exercise-screen, #feedback-screen").addClass("hidden");
        $(`#${screenId}`).removeClass("hidden");
    },

    startExercise: function() {
        this.currentExercise = Generator.generateExercise(this.currentSkill);
        if (!this.currentExercise) return;
        this.renderExercise();
        this.showScreen("exercise-screen");
    },

    renderExercise: function() {
        const ex = this.currentExercise;
        const html = `
            <div class="flex flex-col flex-grow pop-in">
                <div class="flex items-center mb-4">
                    <button id="back-to-menu" class="text-blue-500 font-bold flex items-center gap-1">
                        <span class="text-xl">⬅</span> Menu
                    </button>
                </div>
                
                <div class="bg-white rounded-[2.5rem] shadow-xl p-6 flex-grow flex flex-col items-center justify-between border-4 border-white">
                    <div class="relative w-full aspect-square max-h-[250px] mb-4">
                        <img src="${ex.image}" class="w-full h-full object-cover rounded-[2rem] shadow-inner border-2 border-slate-50">
                        <div class="absolute -bottom-2 -right-2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-blue-50">
                            ${ex.emoji || '✨'}
                        </div>
                    </div>

                    <div class="w-full space-y-4 text-center">
                        <p class="text-xl text-slate-600 leading-tight bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-200">
                            ${ex.text}
                        </p>
                        <h3 class="font-kids text-2xl font-bold text-blue-700 leading-tight">
                            ${ex.question}
                        </h3>
                    </div>

                    <div class="grid grid-cols-2 gap-3 w-full mt-6">
                        ${ex.options.map(opt => `
                            <button class="option-btn btn-3d bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 font-kids py-4 px-2 rounded-2xl text-xl font-bold active:bg-blue-600 active:text-white transition-colors">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        $("#exercise-screen").html(html);
    },

    checkAnswer: function(selected) {
        const isCorrect = selected.trim() === this.currentExercise.answer.trim();
        if (isCorrect) {
            this.playEffect('correct');
            this.score += 1;
            this.updateUI();
            this.showFeedback(true);
        } else {
            this.playEffect('wrong');
            this.lives -= 1;
            this.updateUI();
            if (this.lives <= 0) {
                this.showGameOver();
            } else {
                this.showFeedback(false);
            }
        }
    },

    showFeedback: function(isCorrect) {
        const html = `
            <div class="pop-in flex flex-col items-center justify-center text-center space-y-4 py-2">
                <div class="text-7xl animate-bounce">${isCorrect ? '🎉' : '💡'}</div>
                
                <div class="space-y-3">
                    <h2 class="font-kids text-3xl font-bold ${isCorrect ? 'text-green-500' : 'text-orange-500'}">
                        ${isCorrect ? 'Muito bem!' : 'Quase lá!'}
                    </h2>
                    <div class="px-4">
                        ${isCorrect ? 
                            '<p class="text-lg text-slate-500 font-bold">Você ganhou uma estrela! ⭐</p>' : 
                            `<p class="text-slate-500 font-bold mb-2">A resposta certa era:</p>
                             <div class="bg-blue-100 text-blue-700 px-6 py-2 rounded-2xl text-2xl font-black shadow-sm inline-block">
                                ${this.currentExercise.answer}
                             </div>`
                        }
                    </div>
                </div>

                <button id="next-exercise" class="btn-3d w-full max-w-xs bg-blue-600 text-white font-kids py-4 rounded-2xl text-xl font-bold shadow-xl mt-4">
                    ${isCorrect ? 'Próximo desafio 🚀' : 'Tentar outro 🔄'}
                </button>
            </div>
        `;
        $("#feedback-screen").html(html);
        this.showScreen("feedback-screen");
    },

    showGameOver: function() {
        const html = `
            <div class="pop-in flex flex-col items-center justify-center text-center space-y-6 py-6 px-4">
                <div class="text-8xl">🏆</div>
                <h2 class="font-kids text-4xl font-bold text-blue-600 leading-tight">
                    Incrível! <br> Você é um gênio!
                </h2>
                <div class="bg-white p-6 rounded-[2rem] shadow-lg border-4 border-yellow-200 w-full max-w-xs">
                    <p class="text-xl text-slate-600 font-bold mb-2 text-center uppercase tracking-widest">Resultado Final</p>
                    <div class="flex items-center justify-center gap-2">
                        <span class="text-5xl">⭐</span>
                        <span class="text-6xl font-black text-yellow-500">${this.score}</span>
                    </div>
                </div>
                
                <p class="text-lg text-slate-500 font-medium px-4">
                    Mostre para o papai e para a mamãe quantas estrelas você conquistou hoje!
                </p>

                <div class="w-full space-y-4">
                    <button id="share-whatsapp" class="btn-3d w-full bg-green-500 text-white font-kids py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3">
                        <span class="text-2xl">📱</span> Compartilhar com Pais
                    </button>
                    
                    <button id="reset-game" class="w-full text-slate-400 font-bold py-2 hover:text-blue-500 transition-colors">
                        Recomeçar aventura 🔄
                    </button>
                </div>
            </div>
        `;
        $("#feedback-screen").html(html);
        this.showScreen("feedback-screen");
    },

    shareResults: function() {
        const message = `Oi papai e mamãe! Acabei de jogar ExpertKids e conquistei ${this.score} estrelas! 🌟🏆`;
        const phone = "5511999999999"; // Número placeholder
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        this.resetGame();
    },

    resetGame: function() {
        this.score = 0;
        this.lives = this.maxLives;
        this.currentSkill = null;
        if (this.bgMusic) this.bgMusic.pause();
        this.updateUI();
        this.showScreen("setup-screen");
    }
};

$(document).ready(() => App.init());
