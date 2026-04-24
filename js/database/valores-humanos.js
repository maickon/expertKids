// VALORES HUMANOS — 12 entidades (formação de caráter e cidadania)
KNOWLEDGE_BASE.entities.push(

{
    id: "respeito",
    label: "Respeito",
    type: "valor",
    emoji: "🤝",
    image: "/img/database/respeito.jpg",
    difficulty: 1,
    tags: ["valor", "relacoes", "escola", "fundamental"],
    attributes: {
        meaning: "tratar as pessoas com cuidado e atenção",
        example: "ouvir quando alguém fala e não interromper",
        opposite: "desrespeito e grosseria",
        good_because: "faz todo mundo se sentir valorizado e importante"
    },
    fun_fact: "Pessoas respeitosas têm mais amigos e são mais felizes! O respeito começa quando você trata os outros como gostaria de ser tratado."
},

{
    id: "amizade",
    label: "Amizade",
    type: "valor",
    emoji: "🫂",
    image: "/img/database/amizade.jpg",
    difficulty: 1,
    tags: ["valor", "relacoes", "escola", "felicidade"],
    attributes: {
        meaning: "gostar de alguém e estar junto nos momentos bons e difíceis",
        example: "ajudar o amigo quando ele está triste",
        opposite: "indiferença e egoísmo",
        good_because: "ter amigos nos faz mais felizes e menos solitários"
    },
    fun_fact: "Estudos mostram que ter bons amigos é tão importante para a saúde quanto comer bem! Amizades verdadeiras nos protegem do estresse."
},

{
    id: "honestidade",
    label: "Honestidade",
    type: "valor",
    emoji: "✅",
    image: "/img/database/honestidade.jpg",
    difficulty: 1,
    tags: ["valor", "carater", "confianca", "fundamental"],
    attributes: {
        meaning: "falar a verdade e agir com sinceridade",
        example: "contar para a professora que derrubou o copo sem querer",
        opposite: "mentira e desonestidade",
        good_because: "as pessoas confiam em você e sua palavra tem valor"
    },
    fun_fact: "As pessoas honestas dormem melhor! Guardar segredos e mentiras causa estresse. A honestidade é o alicerce de qualquer relacionamento."
},

{
    id: "generosidade",
    label: "Generosidade",
    type: "valor",
    emoji: "🎁",
    image: "/img/database/generosidade.jpg",
    difficulty: 1,
    tags: ["valor", "doacao", "empatia", "carater"],
    attributes: {
        meaning: "compartilhar o que você tem com quem precisa",
        example: "dividir o lanche com um colega que esqueceu o seu",
        opposite: "egoísmo e avareza",
        good_because: "quem dá sente alegria e fortalece os laços com outras pessoas"
    },
    fun_fact: "Dar presentes ativa as mesmas áreas de prazer do cérebro que receber! Por isso quem é generoso se sente mais feliz."
},

{
    id: "responsabilidade",
    label: "Responsabilidade",
    type: "valor",
    emoji: "📋",
    image: "/img/database/responsabilidade.jpg",
    difficulty: 2,
    tags: ["valor", "carater", "confianca", "maturidade"],
    attributes: {
        meaning: "cumprir com seus deveres e assumir o que você faz",
        example: "fazer a lição de casa sem que os pais precisem pedir",
        opposite: "irresponsabilidade e descuido",
        good_because: "as pessoas confiam em você para tarefas importantes"
    },
    fun_fact: "Crianças que aprendem responsabilidade cedo têm mais sucesso na vida adulta! Pequenas tarefas em casa ensinam grandes lições."
},

{
    id: "coragem",
    label: "Coragem",
    type: "valor",
    emoji: "💪",
    image: "/img/database/coragem.jpg",
    difficulty: 1,
    tags: ["valor", "carater", "superacao", "autoconfianca"],
    attributes: {
        meaning: "agir mesmo quando você está com medo",
        example: "falar com um colega novo na escola mesmo sendo tímido",
        opposite: "covardia e omissão",
        good_because: "a coragem permite crescer e superar medos e desafios"
    },
    fun_fact: "Coragem não é não ter medo — é sentir medo e agir assim mesmo! Os maiores heróis da história sentiram medo, mas agiram mesmo assim."
},

{
    id: "paciencia",
    label: "Paciência",
    type: "valor",
    emoji: "⏳",
    image: "/img/database/paciencia.jpg",
    difficulty: 2,
    tags: ["valor", "autocontrole", "maturidade", "serenidade"],
    attributes: {
        meaning: "esperar com calma sem se irritar",
        example: "esperar a sua vez de falar sem interromper",
        opposite: "impaciência e impulsividade",
        good_because: "resolve problemas com mais sabedoria e menos conflito"
    },
    fun_fact: "Crianças que aprenderam a esperar antes de pegar um marshmallow (teste do marshmallow) foram mais bem-sucedidas na vida! Paciência é uma superpotência."
},

{
    id: "empatia",
    label: "Empatia",
    type: "valor",
    emoji: "❤️",
    image: "/img/database/empatia.jpg",
    difficulty: 2,
    tags: ["valor", "relacoes", "sensibilidade", "importante"],
    attributes: {
        meaning: "entender e sentir o que o outro está sentindo",
        example: "perceber que um colega está triste e perguntar se está bem",
        opposite: "indiferença e crueldade",
        good_because: "cria conexões mais profundas e resolve conflitos com bondade"
    },
    fun_fact: "Bebês já demonstram empatia! Quando um bebê ouve outro chorar, começa a chorar também. A empatia é instintiva em seres humanos."
},

{
    id: "gratidao",
    label: "Gratidão",
    type: "valor",
    emoji: "🙏",
    image: "/img/database/gratidao.jpg",
    difficulty: 1,
    tags: ["valor", "felicidade", "carater", "reconhecimento"],
    attributes: {
        meaning: "reconhecer e agradecer pelas coisas boas da vida",
        example: "dizer obrigado quando alguém te ajuda",
        opposite: "ingratidão e descaso",
        good_because: "pessoas gratas são mais felizes e resilientes"
    },
    fun_fact: "Escrever 3 coisas pelas quais você é grato antes de dormir por 21 dias muda o cérebro! Isso foi comprovado por pesquisas em psicologia positiva."
},

{
    id: "solidariedade",
    label: "Solidariedade",
    type: "valor",
    emoji: "🤲",
    image: "/img/database/solidariedade.jpg",
    difficulty: 2,
    tags: ["valor", "comunidade", "ajuda", "coletividade"],
    attributes: {
        meaning: "ajudar quem precisa mesmo sem ganhar nada em troca",
        example: "ajudar a recolher material escolar de um colega que derrubou",
        opposite: "indiferença e egocentrismo",
        good_because: "cria comunidades mais justas e unidas"
    },
    fun_fact: "A solidariedade foi o que permitiu humanos sobreviverem e construírem civilizações! Sozinhos somos fracos; juntos, somos incríveis."
},

{
    id: "perseveranca",
    label: "Perseverança",
    type: "valor",
    emoji: "🏃",
    image: "/img/database/perseveranca.jpg",
    difficulty: 2,
    tags: ["valor", "superacao", "carater", "determinacao"],
    attributes: {
        meaning: "continuar tentando mesmo depois de errar ou falhar",
        example: "continuar praticando a leitura mesmo quando parece difícil",
        opposite: "desistência e fraqueza",
        good_because: "quem persiste aprende mais e alcança seus objetivos"
    },
    fun_fact: "Thomas Edison falhou mais de 10.000 vezes antes de inventar a lâmpada! Quando perguntaram sobre os fracassos, ele disse: 'Aprendi 10.000 formas que não funcionam'."
},

{
    id: "bondade",
    label: "Bondade",
    type: "valor",
    emoji: "💛",
    image: "/img/database/bondade.jpg",
    difficulty: 1,
    tags: ["valor", "carater", "amor", "fundamental"],
    attributes: {
        meaning: "agir com carinho e gentileza com todos",
        example: "ajudar um colega mais novo que está com dificuldade",
        opposite: "maldade e crueldade",
        good_because: "espalha felicidade e cria um mundo melhor para todos"
    },
    fun_fact: "Praticar um ato de bondade por dia aumenta a felicidade de quem doa E de quem recebe! A bondade é contagiante — uma ação boa inspira outras."
}

);
