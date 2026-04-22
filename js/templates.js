// Templates de Exercícios
const TEMPLATES = {
    skills: {
        reading_basic: [
            {
                id: "reading_location",
                text: "O {entity1} está na {entity2}.",
                question: "Onde está o {entity1}?",
                answer: "Na {entity2}",
                required_types: ["animal", "objeto"]
            },
            {
                id: "reading_color",
                text: "Eu vejo um {entity1} {attribute1.color}.",
                question: "Qual é a cor do {entity1}?",
                answer: "{attribute1.color}",
                required_types: ["animal"]
            },
            {
                id: "reading_food",
                text: "O {entity1} gosta de comer {attribute1.food}.",
                question: "O que o {entity1} come?",
                answer: "{attribute1.food}",
                required_types: ["animal"]
            },
            {
                id: "reading_attribute",
                text: "A {entity1} tem um sabor {attribute1.taste}.",
                question: "Qual é o sabor da {entity1}?",
                answer: "{attribute1.taste}",
                required_types: ["fruta"]
            }
        ],
        classification: [
            {
                id: "classify_group",
                text: "Olhe para este emoji: {emoji1}",
                question: "O {label1} pertence a qual grupo?",
                answer: "{type1}",
                required_types: ["animal", "fruta", "objeto"]
            },
            {
                id: "classify_habitat",
                text: "O {entity1} vive na {attribute1.habitat}.",
                question: "Onde o {entity1} vive?",
                answer: "{attribute1.habitat}",
                required_types: ["animal"]
            },
            {
                id: "classify_material",
                text: "A {entity1} é feita de {attribute1.material}.",
                question: "De que material é a {entity1}?",
                answer: "{attribute1.material}",
                required_types: ["objeto"]
            },
            {
                id: "classify_wheels",
                text: "Este veículo tem {attribute1.wheels} rodas.",
                question: "Quantas rodas tem o {entity1}?",
                answer: "{attribute1.wheels}",
                required_types: ["objeto"]
            }
        ],
        vocabulary: [
            {
                id: "vocab_name",
                text: "{emoji1}",
                question: "Qual é o nome disto?",
                answer: "{label1}",
                required_types: ["animal", "fruta", "objeto"]
            },
            {
                id: "vocab_reverse",
                text: "Procure o desenho do(a) {label1}.",
                question: "Qual destes é o(a) {label1}?",
                answer: "{emoji1}",
                required_types: ["animal", "fruta", "objeto"]
            },
            {
                id: "vocab_sound",
                text: "Este animal faz: {attribute1.sound}!",
                question: "Quem faz esse som?",
                answer: "{label1}",
                required_types: ["animal"]
            },
            {
                id: "vocab_format",
                text: "A {entity1} tem o formato {attribute1.format}.",
                question: "Como é o formato da {entity1}?",
                answer: "{attribute1.format}",
                required_types: ["fruta"]
            }
        ],
        counting: [
            {
                id: "count_objects",
                text: "{emojis_list}",
                question: "Quantos {label1} você consegue contar?",
                answer: "{count}",
                required_types: ["animal", "fruta", "objeto"]
            },
            {
                id: "count_selection",
                text: "Conte os emojis abaixo.",
                question: "Você está vendo {count} ...",
                answer: "{label1}",
                required_types: ["animal", "fruta"]
            },
            {
                id: "count_wheels_total",
                text: "{emojis_list}",
                question: "Quantos {label1} estão na tela?",
                answer: "{count}",
                required_types: ["objeto"]
            },
            {
                id: "count_challenge",
                text: "Atenção: {emojis_list}",
                question: "Qual o número total de {label1}?",
                answer: "{count}",
                required_types: ["animal"]
            }
        ]
    }
};
