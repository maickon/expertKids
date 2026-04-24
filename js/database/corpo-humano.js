// CORPO HUMANO — 15 entidades (partes do corpo, sentidos e saúde)
KNOWLEDGE_BASE.entities.push(

{
    id: "olho",
    label: "Olho",
    type: "corpo_humano",
    emoji: "👁️",
    image: "/img/database/olho.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "sentido", "visao", "rosto"],
    attributes: {
        function: "ver o mundo",
        sense: "visão",
        location: "rosto",
        care: "não esfregar e dormir bem",
        number: "dois"
    },
    fun_fact: "Os olhos conseguem distinguir até 10 milhões de cores diferentes! E piscamos cerca de 15 vezes por minuto sem perceber."
},

{
    id: "ouvido",
    label: "Orelha",
    type: "corpo_humano",
    emoji: "👂",
    image: "/img/database/ouvido.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "sentido", "audicao", "rosto"],
    attributes: {
        function: "ouvir sons e música",
        sense: "audição",
        location: "cabeça, dos lados",
        care: "não colocar objetos e evitar barulho muito alto",
        number: "duas"
    },
    fun_fact: "A orelha também ajuda a manter o equilíbrio! Dentro dela existe um sistema de líquido que detecta quando estamos inclinados."
},

{
    id: "nariz",
    label: "Nariz",
    type: "corpo_humano",
    emoji: "👃",
    image: "/img/database/nariz.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "sentido", "olfato", "rosto"],
    attributes: {
        function: "cheirar e respirar",
        sense: "olfato",
        location: "centro do rosto",
        care: "assoar com lenço e respirar pelo nariz",
        number: "um"
    },
    fun_fact: "O nariz humano consegue detectar mais de 1 trilhão de cheiros diferentes! E cheiros ativam memórias muito mais que sons ou imagens."
},

{
    id: "boca",
    label: "Boca",
    type: "corpo_humano",
    emoji: "👄",
    image: "/img/database/boca.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "sentido", "paladar", "rosto"],
    attributes: {
        function: "comer, falar e respirar",
        sense: "paladar",
        location: "baixo do rosto",
        care: "escovar os dentes e não morder objetos",
        number: "uma"
    },
    fun_fact: "A língua dentro da boca tem cerca de 10.000 papilas gustativas que detectam doce, salgado, azedo, amargo e umami!"
},

{
    id: "mao",
    label: "Mão",
    type: "corpo_humano",
    emoji: "✋",
    image: "/img/database/mao.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "sentido", "tato", "membro"],
    attributes: {
        function: "pegar, tocar e escrever",
        sense: "tato",
        location: "braços",
        care: "lavar com sabão e não morder as unhas",
        number: "duas"
    },
    fun_fact: "As mãos têm 27 ossos cada — mais de um quarto de todos os ossos do corpo! Por isso conseguem fazer movimentos tão precisos."
},

{
    id: "pe",
    label: "Pé",
    type: "corpo_humano",
    emoji: "🦶",
    image: "/img/database/pe.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "membro", "locomocao"],
    attributes: {
        function: "andar, correr e pular",
        sense: "tato",
        location: "parte de baixo das pernas",
        care: "usar sapato adequado e lavar bem",
        number: "dois"
    },
    fun_fact: "Os pés têm mais de 200.000 terminações nervosas cada! Por isso fazer cosquinha nos pés é tão difícil de aguentar."
},

{
    id: "coracao",
    label: "Coração",
    type: "corpo_humano",
    emoji: "❤️",
    image: "/img/database/coracao.jpg",
    difficulty: 2,
    tags: ["corpo_humano", "orgao", "circulacao"],
    attributes: {
        function: "bombear sangue pelo corpo",
        sense: "nenhum sentido direto",
        location: "peito, um pouco para o lado esquerdo",
        care: "comer bem, exercitar e não fumar",
        number: "um"
    },
    fun_fact: "O coração bate cerca de 100.000 vezes por dia sem parar! Em uma vida, ele bate mais de 2,5 bilhões de vezes."
},

{
    id: "cerebro",
    label: "Cérebro",
    type: "corpo_humano",
    emoji: "🧠",
    image: "/img/database/cerebro.jpg",
    difficulty: 2,
    tags: ["corpo_humano", "orgao", "pensamento"],
    attributes: {
        function: "pensar, aprender e controlar o corpo",
        sense: "controla todos os sentidos",
        location: "dentro da cabeça",
        care: "dormir bem, aprender e não bater a cabeça",
        number: "um"
    },
    fun_fact: "O cérebro usa cerca de 20% de toda a energia do corpo, mesmo pesando só 2% do peso total! E aprender coisas novas literalmente muda o cérebro."
},

{
    id: "dente",
    label: "Dente",
    type: "corpo_humano",
    emoji: "🦷",
    image: "/img/database/dente.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "saude", "boca"],
    attributes: {
        function: "mastigar a comida",
        sense: "tato e pressão",
        location: "dentro da boca",
        care: "escovar 3 vezes por dia e usar fio dental",
        number: "32 (adulto)"
    },
    fun_fact: "O esmalte dos dentes é a substância mais dura do corpo humano — mais dura que o osso! Mesmo assim precisa de cuidado."
},

{
    id: "cabelo",
    label: "Cabelo",
    type: "corpo_humano",
    emoji: "💇",
    image: "/img/database/cabelo.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "externo", "protecao"],
    attributes: {
        function: "proteger a cabeça e regular temperatura",
        sense: "tato leve",
        location: "topo da cabeça",
        care: "lavar, pentear e não puxar",
        number: "em média 100 mil fios"
    },
    fun_fact: "O cabelo cresce cerca de 1,2 cm por mês! E cada fio de cabelo consegue suportar o peso de 100 gramas — imagine todos juntos!"
},

{
    id: "braco",
    label: "Braço",
    type: "corpo_humano",
    emoji: "💪",
    image: "/img/database/braco.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "membro", "forca"],
    attributes: {
        function: "alcançar, carregar e abraçar",
        sense: "tato",
        location: "ombros até as mãos",
        care: "exercitar e não fazer esforço demais",
        number: "dois"
    },
    fun_fact: "O osso mais comprido do braço chama-se úmero. Com treino, os músculos dos braços podem levantar mais de cem vezes o peso do próprio braço!"
},

{
    id: "perna",
    label: "Perna",
    type: "corpo_humano",
    emoji: "🦵",
    image: "/img/database/perna.jpg",
    difficulty: 1,
    tags: ["corpo_humano", "membro", "locomocao"],
    attributes: {
        function: "caminhar, correr, saltar e apoiar o corpo",
        sense: "tato",
        location: "quadril até os pés",
        care: "exercitar e alongar",
        number: "duas"
    },
    fun_fact: "O fêmur, osso da coxa, é o mais longo e forte do corpo! Ele aguenta um peso de até 8 vezes o peso corporal quando corremos."
},

{
    id: "pulmao",
    label: "Pulmão",
    type: "corpo_humano",
    emoji: "🧍‍",
    image: "/img/database/pulmao.jpg",
    difficulty: 2,
    tags: ["corpo_humano", "orgao", "respiracao"],
    attributes: {
        function: "respirar e levar oxigênio ao sangue",
        sense: "nenhum sentido direto",
        location: "peito, dos dois lados do coração",
        care: "não fumar e respirar ar puro",
        number: "dois"
    },
    fun_fact: "Se você abrisse os pulmões completamente, a superfície deles seria maior que uma quadra de tênis! São cheios de saquinhos minúsculos chamados alvéolos."
},

{
    id: "estomago",
    label: "Estômago",
    type: "corpo_humano",
    emoji: "🤰",
    image: "/img/database/estomago.jpg",
    difficulty: 3,
    tags: ["corpo_humano", "orgao", "digestao"],
    attributes: {
        function: "digerir e processar a comida",
        sense: "nenhum sentido direto",
        location: "barriga, parte esquerda",
        care: "comer devagar e não exagerar",
        number: "um"
    },
    fun_fact: "O estômago tem ácido tão forte que poderia dissolver metal! Mas a parede do estômago se renova completamente a cada 5 dias para se proteger."
},

{
    id: "lingua",
    label: "Língua",
    type: "corpo_humano",
    emoji: "👅",
    image: "/img/database/lingua.jpg",
    difficulty: 2,
    tags: ["corpo_humano", "sentido", "paladar", "boca"],
    attributes: {
        function: "saborear, falar e ajudar a engolir",
        sense: "paladar",
        location: "dentro da boca",
        care: "escovar junto com os dentes",
        number: "uma"
    },
    fun_fact: "A língua é o único músculo do corpo preso por apenas uma das pontas! E a impressão digital da língua é única — como as digitais dos dedos."
}

);
