// ESTAÇÕES DO ANO
KNOWLEDGE_BASE.entities.push(

{
    id: "primavera",
    label: "Primavera",
    type: "estacao",
    emoji: "🌸",
    image: "/img/database/primavera.jpg",
    difficulty: 1,
    tags: ["estacao", "natureza", "flores", "colorido"],
    attributes: {
        weather: "temperaturas agradáveis",
        nature: "flores desabrocham",
        color: "colorida e rosada",
        animal_active: "borboletas e abelhas",
        follows: "inverno",
        months: "setembro, outubro e novembro (Brasil)"
    },
    fun_fact: "Na primavera, as flores soltam perfume para atrair abelhas! Sem as abelhas, muitas frutas e legumes que comemos não existiriam."
},

{
    id: "verao",
    label: "Verão",
    type: "estacao",
    emoji: "🏖️",
    image: "/img/database/verao.jpg",
    difficulty: 1,
    tags: ["estacao", "calor", "ferias", "praia"],
    attributes: {
        weather: "muito quente",
        activity: "praia, piscina e sorvete",
        day_length: "dias mais longos do ano",
        nature: "plantas crescem bastante",
        follows: "primavera",
        months: "dezembro, janeiro e fevereiro (Brasil)"
    },
    fun_fact: "No verão, o dia tem mais horas de luz do que de escuridão! Nos países muito ao norte, o sol pode ficar no céu a noite toda."
},

{
    id: "outono",
    label: "Outono",
    type: "estacao",
    emoji: "🍂",
    image: "/img/database/outono.jpg",
    difficulty: 1,
    tags: ["estacao", "folhas", "laranja", "frescor"],
    attributes: {
        weather: "ameno e com vento",
        nature: "folhas ficam alaranjadas e caem",
        color: "laranja, vermelho e marrom",
        activity: "colher frutas e vegetais",
        follows: "verão",
        months: "março, abril e maio (Brasil)"
    },
    fun_fact: "As folhas ficam laranjas e vermelhas no outono porque a árvore para de produzir o pigmento verde para poupar energia no inverno!"
},

{
    id: "inverno",
    label: "Inverno",
    type: "estacao",
    emoji: "🧣",
    image: "/img/database/inverno.jpg",
    difficulty: 1,
    tags: ["estacao", "frio", "agasalho", "noites_longas"],
    attributes: {
        weather: "frio e com noites longas",
        activity: "ficar quentinho com agasalho",
        item: "casaco, cachecol e chocolate quente",
        nature: "muitas árvores perdem as folhas",
        follows: "outono",
        months: "junho, julho e agosto (Brasil)"
    },
    fun_fact: "No inverno, alguns animais entram em hibernação — ficam dormindo meses inteiros para poupar energia quando o frio está forte!"
}

);
