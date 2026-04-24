// ANIMAIS — 30 entidades (domésticos, selvagens, aquáticos, aves, insetos, répteis)
KNOWLEDGE_BASE.entities.push(

// ── DOMÉSTICOS (difficulty 1) ─────────────────────────────────────────────────

{
    id: "gato",
    label: "Gato",
    type: "animal",
    emoji: "🐱",
    image: "/img/database/gato.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "terrestre"],
    attributes: {
        sound: "miau",
        habitat: "casa",
        color: "laranja ou cinza",
        food: "peixe e ração",
        move: "anda, pula e escala",
        body: "quatro patas, bigodes e cauda"
    },
    fun_fact: "O gato passa mais de metade do dia dormindo — são até 16 horas! Isso porque seus antepassados caçavam muito e precisavam poupar energia."
},

{
    id: "cachorro",
    label: "Cachorro",
    type: "animal",
    emoji: "🐶",
    image: "/img/database/cachoro.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "terrestre"],
    attributes: {
        sound: "au au",
        habitat: "casa",
        color: "marrom ou preto",
        food: "ração e ossos",
        move: "corre muito rápido",
        body: "quatro patas, focinho e cauda"
    },
    fun_fact: "O nariz do cachorro é único como uma impressão digital — não existe dois iguais! Ele consegue farejar até 100.000 vezes melhor que o ser humano."
},

{
    id: "vaca",
    label: "Vaca",
    type: "animal",
    emoji: "🐄",
    image: "/img/database/vaca.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "terrestre", "fazenda"],
    attributes: {
        sound: "muuu",
        habitat: "fazenda e pasto",
        color: "branco e preto ou marrom",
        food: "capim e feno",
        move: "caminha devagar",
        body: "grande, com quatro patas e chifres"
    },
    fun_fact: "Uma vaca produz em média 25 litros de leite por dia! O leite que tomamos no café da manhã vem dela."
},

{
    id: "galinha",
    label: "Galinha",
    type: "animal",
    emoji: "🐔",
    image: "/img/database/galinha.jpg",
    difficulty: 1,
    tags: ["animal", "ave", "domestico", "fazenda"],
    attributes: {
        sound: "cotcotcot",
        habitat: "galinheiro e fazenda",
        color: "vermelha, marrom ou branca",
        food: "milho e minhoca",
        move: "anda e bate asas (voa pouco)",
        body: "bico, crista vermelha e penas"
    },
    fun_fact: "A galinha bota um ovo por dia! São mais de 300 ovos por ano. Os ovos que comemos no café da manhã são dela."
},

{
    id: "cavalo",
    label: "Cavalo",
    type: "animal",
    emoji: "🐴",
    image: "/img/database/galinha.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "terrestre", "fazenda"],
    attributes: {
        sound: "relincho",
        habitat: "estábulo e campo",
        color: "marrom, preto ou branco",
        food: "capim, cenoura e maçã",
        move: "galopa muito rápido",
        body: "grande, crina e cascos duros"
    },
    fun_fact: "O cavalo dorme de pé! Tem um sistema especial nas pernas que trava os joelhos, permitindo descansar sem cair."
},

{
    id: "porco",
    label: "Porco",
    type: "animal",
    emoji: "🐷",
    image: "/img/database/porco.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "fazenda"],
    attributes: {
        sound: "oink oink",
        habitat: "chiqueiro e fazenda",
        color: "rosa",
        food: "frutas, legumes e ração",
        move: "caminha e foca no cheiro",
        body: "gordo, com focinho arredondado e orelhas grandes"
    },
    fun_fact: "O porco é um dos animais mais inteligentes do mundo — mais esperto que um cachorro! E não é ele que suja o ambiente; eles gostam de limpeza."
},

{
    id: "ovelha",
    label: "Ovelha",
    type: "animal",
    emoji: "🐑",
    image: "/img/database/ovelha.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "fazenda"],
    attributes: {
        sound: "méé",
        habitat: "pasto e fazenda",
        color: "branco com lã grossa",
        food: "capim e plantas",
        move: "caminha em rebanho",
        body: "corpo coberto de lã, patas curtas"
    },
    fun_fact: "A lã da ovelha cresce o ano todo e é tosada uma vez por ano. Um casaco de lã quente pode vir de uma única ovelha!"
},

{
    id: "pato",
    label: "Pato",
    type: "animal",
    emoji: "🦆",
    image: "/img/database/pato.jpg",
    difficulty: 1,
    tags: ["animal", "ave", "domestico", "aquatico", "fazenda"],
    attributes: {
        sound: "quack quack",
        habitat: "lagoa e fazenda",
        color: "verde e amarelo ou branco",
        food: "insetos, minhoca e grãos",
        move: "nada, anda e voa",
        body: "bico largo, penas impermeáveis e pés palmados"
    },
    fun_fact: "As penas do pato têm um óleo especial que repele a água! Por isso ele nada sem se molhar por dentro."
},

{
    id: "coelho",
    label: "Coelho",
    type: "animal",
    emoji: "🐰",
    image: "/img/database/coelho.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "domestico", "terrestre"],
    attributes: {
        sound: "quase silencioso",
        habitat: "toca e casa",
        color: "branco, cinza ou marrom",
        food: "cenoura, alface e capim",
        move: "pula muito rápido",
        body: "orelhas compridas, pelo macio e focinho pequeno"
    },
    fun_fact: "O coelho consegue ouvir sons a mais de 3 km de distância graças às suas orelhas enormes que giram como antenas!"
},

// ── SELVAGENS AFRICANOS / GRANDES (difficulty 1-2) ────────────────────────────

{
    id: "leao",
    label: "Leão",
    type: "animal",
    emoji: "🦁",
    image: "/img/database/leao.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "carnivoro", "africa"],
    attributes: {
        sound: "rugido",
        habitat: "savana",
        color: "amarelo dourado",
        food: "carne de animais que caça",
        move: "corre e espreia a presa",
        body: "grande, com juba (macho) e garras afiadas"
    },
    fun_fact: "Só o leão macho tem juba. A leoa é quem caça a maior parte da comida da família! O rugido pode ser ouvido a 8 km de distância."
},

{
    id: "elefante",
    label: "Elefante",
    type: "animal",
    emoji: "🐘",
    image: "/img/database/elefante.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "herbivoro", "africa"],
    attributes: {
        sound: "barrito",
        habitat: "savana e floresta",
        color: "cinza",
        food: "folhas, frutas e cascas de árvore",
        move: "caminha devagar mas por longas distâncias",
        body: "tromba longa, presas e orelhas enormes"
    },
    fun_fact: "O elefante usa a tromba para cheirar, pegar objetos, beber água e cumprimentar amigos! É como um braço e nariz ao mesmo tempo."
},

{
    id: "girafa",
    label: "Girafa",
    type: "animal",
    emoji: "🦒",
    image: "/img/database/girafa.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "herbivoro", "africa"],
    attributes: {
        sound: "quase silenciosa",
        habitat: "savana",
        color: "amarelo com manchas marrons",
        food: "folhas no topo das árvores",
        move: "caminha com passadas enormes",
        body: "pescoço muito longo, patas altas e manchas únicas"
    },
    fun_fact: "A girafa é o animal mais alto do mundo — mede até 6 metros! Mas ela tem o mesmo número de ossos no pescoço que nós: 7 vértebras."
},

{
    id: "macaco",
    label: "Macaco",
    type: "animal",
    emoji: "🐒",
    image: "/img/database/macaco.jpg",
    difficulty: 1,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "herbivoro", "floresta"],
    attributes: {
        sound: "ui ui e grito",
        habitat: "floresta tropical",
        color: "marrom",
        food: "banana, frutas e insetos",
        move: "pula de galho em galho",
        body: "mãos e pés para se segurar, cauda longa"
    },
    fun_fact: "Os macacos são parentes distantes dos humanos e conseguem usar ferramentas! Alguns usam pedras para quebrar nozes e gravetos para pegar insetos."
},

{
    id: "zebra",
    label: "Zebra",
    type: "animal",
    emoji: "🦓",
    image: "/img/database/zebra.jpg",
    difficulty: 2,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "herbivoro", "africa"],
    attributes: {
        sound: "relincho estridente",
        habitat: "savana africana",
        color: "listras pretas e brancas",
        food: "capim e plantas",
        move: "corre em manada",
        body: "igual ao cavalo com listras únicas"
    },
    fun_fact: "As listras de cada zebra são únicas — como a nossa impressão digital! E as listras confundem os predadores quando correm em grupo."
},

{
    id: "hipopotamo",
    label: "Hipopótamo",
    type: "animal",
    emoji: "🦛",
    image: "/img/database/hipopotamo.jpg",
    difficulty: 2,
    tags: ["animal", "mamifero", "selvagem", "aquatico", "herbivoro", "africa"],
    attributes: {
        sound: "ronco profundo",
        habitat: "rios e lagos da África",
        color: "cinza rosado",
        food: "capim e plantas aquáticas",
        move: "nada e corre surpreendentemente rápido",
        body: "muito pesado, boca enorme e pele grossa"
    },
    fun_fact: "O hipopótamo é o terceiro maior animal terrestre do mundo! Sua pele solta um líquido avermelhado que serve como protetor solar natural."
},

{
    id: "tigre",
    label: "Tigre",
    type: "animal",
    emoji: "🐯",
    image: "/img/database/tigre.jpg",
    difficulty: 2,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "carnivoro", "asia"],
    attributes: {
        sound: "rugido",
        habitat: "floresta e selva asiática",
        color: "laranja com listras pretas",
        food: "cervos e animais que caça",
        move: "espreia e ataca de surpresa",
        body: "grande, listrado e com garras retráteis"
    },
    fun_fact: "O tigre é o maior felino do mundo! Ao contrário dos outros gatos, ele adora água e nada muito bem."
},

{
    id: "urso",
    label: "Urso",
    type: "animal",
    emoji: "🐻",
    image: "/img/database/urso.jpg",
    difficulty: 2,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "floresta"],
    attributes: {
        sound: "grunhido e rosnado",
        habitat: "floresta e montanha",
        color: "marrom ou preto",
        food: "mel, frutas, peixe e insetos",
        move: "caminha e nada",
        body: "grande e peludo, garras curvas e forte"
    },
    fun_fact: "No inverno, o urso hiberna por meses! Ele dorme o inverno inteiro sem comer, vivendo da gordura acumulada no verão."
},

// ── AQUÁTICOS (difficulty 1-2) ────────────────────────────────────────────────

{
    id: "peixe",
    label: "Peixe",
    type: "animal",
    emoji: "🐟",
    image: "/img/database/peixe_animal.jpg",
    difficulty: 1,
    tags: ["animal", "aquatico", "selvagem", "agua_doce", "agua_salgada"],
    attributes: {
        sound: "silencioso",
        habitat: "rios, lagos e mar",
        color: "colorido — laranja, azul, prata",
        food: "algas, insetos e outros peixes menores",
        move: "nada com as barbatanas",
        body: "escamas, barbatanas e guelras para respirar na água"
    },
    fun_fact: "O peixe respira dentro d'água com as guelras! Elas filtram o oxigênio dissolvido na água, como os nossos pulmões filtram o ar."
},

{
    id: "golfinho",
    label: "Golfinho",
    type: "animal",
    emoji: "🐬",
    image: "/img/database/golfinho.jpg",
    difficulty: 2,
    tags: ["animal", "mamifero", "aquatico", "selvagem", "mar"],
    attributes: {
        sound: "cliques e assobios",
        habitat: "oceano e mar",
        color: "cinza e branco",
        food: "peixe e lula",
        move: "nada e pula na superfície",
        body: "pele lisa, nadadeiras e focinho apontado"
    },
    fun_fact: "O golfinho dorme com apenas metade do cérebro de cada vez! A outra metade fica acordada para ele respirar e ficar seguro."
},

{
    id: "tubarao",
    label: "Tubarão",
    type: "animal",
    emoji: "🦈",
    image: "/img/database/tubarao.jpg",
    difficulty: 2,
    tags: ["animal", "peixe", "aquatico", "selvagem", "mar", "carnivoro"],
    attributes: {
        sound: "silencioso",
        habitat: "oceano",
        color: "cinza azulado",
        food: "peixes, focas e lula",
        move: "nada sem parar",
        body: "dentes em fileiras, pele áspera e nadadeira dorsal"
    },
    fun_fact: "O tubarão não tem ossos — seu esqueleto é feito de cartilagem, como a ponta do nosso nariz! E seus dentes caem e crescem novos a vida toda."
},

{
    id: "polvo",
    label: "Polvo",
    type: "animal",
    emoji: "🐙",
    image: "/img/database/polvo.jpg",
    difficulty: 3,
    tags: ["animal", "molusco", "aquatico", "selvagem", "mar"],
    attributes: {
        sound: "silencioso",
        habitat: "fundo do oceano",
        color: "muda de cor para se camuflar",
        food: "caranguejos e mariscos",
        move: "nada soltando jato de água",
        body: "oito tentáculos com ventosas e três corações"
    },
    fun_fact: "O polvo tem três corações e sangue azul! Além disso, consegue mudar de cor e textura em menos de um segundo para se camuflar."
},

// ── AVES (difficulty 1-2) ─────────────────────────────────────────────────────

{
    id: "passaro",
    label: "Pássaro",
    type: "animal",
    emoji: "🐦",
    image: "/img/database/passaro.jpg",
    difficulty: 1,
    tags: ["animal", "ave", "voador", "selvagem"],
    attributes: {
        sound: "canto melodioso",
        habitat: "árvores e céu",
        color: "colorido — azul, amarelo, vermelho",
        food: "sementes, frutas e insetos",
        move: "voa com as asas",
        body: "penas, bico e asas"
    },
    fun_fact: "Os pássaros cantam para marcar território e atrair parceiros. Cada espécie tem um canto único — como um idioma próprio!"
},

{
    id: "pinguim",
    label: "Pinguim",
    type: "animal",
    emoji: "🐧",
    image: "/img/database/pinguim.jpg",
    difficulty: 2,
    tags: ["animal", "ave", "aquatico", "selvagem", "frio"],
    attributes: {
        sound: "grasnado",
        habitat: "Antártica e costas frias",
        color: "preto e branco",
        food: "peixe e lula",
        move: "nada muito bem, caminha engraçado",
        body: "asas viradas em nadadeiras, penas impermeáveis"
    },
    fun_fact: "O pinguim é uma ave que não voa! Mas nada melhor que a maioria dos peixes — chega a 36 km/h dentro d'água."
},

{
    id: "coruja",
    label: "Coruja",
    type: "animal",
    emoji: "🦉",
    image: "/img/database/coruja.jpg",
    difficulty: 2,
    tags: ["animal", "ave", "voador", "selvagem", "noturno"],
    attributes: {
        sound: "coruja faz uuu uuu",
        habitat: "floresta e campos",
        color: "marrom com manchas",
        food: "ratos e insetos",
        move: "voa silenciosamente à noite",
        body: "olhos grandes e redondos, pescoço que gira quase 270°"
    },
    fun_fact: "A coruja consegue girar a cabeça quase para trás sem mover o corpo! E voa tão silenciosamente que a presa não ouve ela chegar."
},

// ── INSETOS / PEQUENOS (difficulty 1-2) ───────────────────────────────────────

{
    id: "borboleta",
    label: "Borboleta",
    type: "animal",
    emoji: "🦋",
    image: "/img/database/borboleta.jpg",
    difficulty: 1,
    tags: ["animal", "inseto", "voador", "selvagem", "colorido"],
    attributes: {
        sound: "silenciosa",
        habitat: "jardins e flores",
        color: "colorida — laranja, amarela, azul",
        food: "néctar das flores",
        move: "voa levemente de flor em flor",
        body: "quatro asas coloridas e antenas"
    },
    fun_fact: "A borboleta começa a vida como uma lagarta! Fica dentro de um casulo e quando sai já virou borboleta — isso se chama metamorfose."
},

{
    id: "abelha",
    label: "Abelha",
    type: "animal",
    emoji: "🐝",
    image: "/img/database/abelha.jpg",
    difficulty: 2,
    tags: ["animal", "inseto", "voador", "selvagem", "util"],
    attributes: {
        sound: "zumbido",
        habitat: "colmeia em árvores e jardins",
        color: "amarela com listras pretas",
        food: "néctar e pólen das flores",
        move: "voa de flor em flor",
        body: "corpo listrado, ferrao e asas transparentes"
    },
    fun_fact: "As abelhas produzem o mel que comemos! Uma colmeia tem até 80.000 abelhas trabalhando juntas. Sem elas, muitas frutas não existiriam."
},

// ── RÉPTEIS / ANFÍBIOS (difficulty 2-3) ──────────────────────────────────────

{
    id: "cobra",
    label: "Cobra",
    type: "animal",
    emoji: "🐍",
    image: "/img/database/cobra.jpg",
    difficulty: 2,
    tags: ["animal", "reptil", "selvagem", "terrestre"],
    attributes: {
        sound: "assovia",
        habitat: "florestas, campos e rios",
        color: "verde, marrom ou colorida",
        food: "ratos, sapos e pássaros",
        move: "rasteja pelo chão",
        body: "sem patas, coberta de escamas e língua bifurcada"
    },
    fun_fact: "A cobra sente o cheiro com a língua! Ela coleta partículas do ar com a língua e leva até um órgão especial no céu da boca."
},

{
    id: "tartaruga",
    label: "Tartaruga",
    type: "animal",
    emoji: "🐢",
    image: "/img/database/tartaruga.jpg",
    difficulty: 2,
    tags: ["animal", "reptil", "selvagem", "terrestre", "aquatico"],
    attributes: {
        sound: "quase silenciosa",
        habitat: "mar, rios e terra",
        color: "verde e marrom",
        food: "folhas, algas e medusas",
        move: "muito devagar na terra, ágil na água",
        body: "casco duro nas costas que é parte do esqueleto"
    },
    fun_fact: "As tartarugas são os animais mais longevos do mundo — algumas vivem mais de 150 anos! O casco delas faz parte do seu esqueleto, como nossas costelas."
},

{
    id: "sapo",
    label: "Sapo",
    type: "animal",
    emoji: "🐸",
    image: "/img/database/sapo.jpg",
    difficulty: 2,
    tags: ["animal", "anfibio", "selvagem", "aquatico", "terrestre"],
    attributes: {
        sound: "coaxo",
        habitat: "perto de rios, lagos e jardins",
        color: "verde ou marrom",
        food: "insetos e mosca",
        move: "pula com as patas traseiras",
        body: "pele lisa, olhos grandes e patas traseiras longas"
    },
    fun_fact: "O sapo bebe água pela pele — ele não bebe pela boca! Por isso precisa de lugares úmidos para sobreviver."
},

{
    id: "crocodilo",
    label: "Crocodilo",
    type: "animal",
    emoji: "🐊",
    image: "/img/database/crocodilo.jpg",
    difficulty: 3,
    tags: ["animal", "reptil", "selvagem", "aquatico", "carnivoro", "perigoso"],
    attributes: {
        sound: "rugido baixo",
        habitat: "rios e lagos tropicais",
        color: "verde escuro ou cinza",
        food: "peixes, aves e mamíferos",
        move: "nada e caminha arrastando o corpo",
        body: "escamas duras, mandíbula poderosa e cauda forte"
    },
    fun_fact: "O crocodilo existe há mais de 200 milhões de anos! Viveu junto com os dinossauros e quase não mudou desde então — é um sobrevivente incrível."
},

{
    id: "camelo",
    label: "Camelo",
    type: "animal",
    emoji: "🐪",
    image: "/img/database/camelo.jpg",
    difficulty: 3,
    tags: ["animal", "mamifero", "selvagem", "terrestre", "deserto", "herbivoro"],
    attributes: {
        sound: "grunhido",
        habitat: "deserto",
        color: "bege ou marrom claro",
        food: "plantas espinhosas e capim seco",
        move: "caminha longas distâncias no calor",
        body: "corcova nas costas, pálpebras duplas, pés largos"
    },
    fun_fact: "A corcova do camelo não guarda água — guarda gordura! Essa gordura vira energia quando não tem comida. Por isso ele aguenta semanas sem comer."
}

);
