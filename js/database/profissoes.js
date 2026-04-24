// PROFISSÕES — 15 entidades (formação de caráter e visão de mundo)
KNOWLEDGE_BASE.entities.push(

{
    id: "medico",
    label: "Médico",
    type: "profissao",
    emoji: "🩺",
    image: "/img/database/medico.jpg",
    difficulty: 1,
    tags: ["profissao", "saude", "cuidado", "importante"],
    attributes: {
        works_at: "hospital e clínica",
        helps_with: "tratar doenças e cuidar da saúde das pessoas",
        tool: "estetoscópio e remédios",
        value: "cuidado e responsabilidade",
        studies: "medicina"
    },
    fun_fact: "Um médico estuda por pelo menos 10 anos antes de atender sozinho! E se especializa em partes do corpo, como o coração ou os ossos."
},

{
    id: "professora",
    label: "Professora",
    type: "profissao",
    emoji: "👩‍🏫",
    image: "/img/database/professora.jpg",
    difficulty: 1,
    tags: ["profissao", "educacao", "escola", "importante"],
    attributes: {
        works_at: "escola e universidade",
        helps_with: "ensinar e ajudar crianças a aprender e crescer",
        tool: "quadro, livros e paciência",
        value: "dedicação e amor pelo ensino",
        studies: "pedagogia ou licenciatura"
    },
    fun_fact: "A profissão de professor existe há mais de 4.000 anos! Os primeiros professores ensinavam filosofia, matemática e astronomia na Grécia Antiga."
},

{
    id: "bombeiro",
    label: "Bombeiro",
    type: "profissao",
    emoji: "🧑‍🚒",
    image: "/img/database/bombeiro.jpg",
    difficulty: 1,
    tags: ["profissao", "seguranca", "coragem", "importante"],
    attributes: {
        works_at: "quartel do bombeiro e locais de emergência",
        helps_with: "apagar incêndios e salvar vidas",
        tool: "mangueira, escada e equipamento de proteção",
        value: "coragem e altruísmo",
        studies: "curso de bombeiro"
    },
    fun_fact: "Os bombeiros também salvam animais, ajudam em acidentes de carro e até retiram pessoas presas em elevadores — não são só 'apagadores de fogo'!"
},

{
    id: "policial",
    label: "Policial",
    type: "profissao",
    emoji: "👮",
    image: "/img/database/policial.jpg",
    difficulty: 1,
    tags: ["profissao", "seguranca", "lei", "importante"],
    attributes: {
        works_at: "ruas, delegacia e eventos",
        helps_with: "proteger as pessoas e manter a ordem",
        tool: "rádio, viatura e uniforme",
        value: "justiça e proteção",
        studies: "academia de polícia"
    },
    fun_fact: "O trabalho do policial inclui ajudar crianças perdidas, controlar o trânsito e atender emergências — muito mais do que aparece nos filmes!"
},

{
    id: "cozinheiro",
    label: "Cozinheiro",
    type: "profissao",
    emoji: "🧑‍🍳",
    image: "/img/database/cozinheiro.jpg",
    difficulty: 1,
    tags: ["profissao", "alimentacao", "criatividade", "arte"],
    attributes: {
        works_at: "restaurante, escola e hospital",
        helps_with: "preparar comida gostosa e nutritiva",
        tool: "faca, panela e fogão",
        value: "criatividade e cuidado com os outros",
        studies: "gastronomia ou escola de culinária"
    },
    fun_fact: "Cozinheiros profissionais podem preparar até 200 pratos por dia! Alguns chefs famosos são considerados artistas e ganham estrelas Michelin."
},

{
    id: "fazendeiro",
    label: "Fazendeiro",
    type: "profissao",
    emoji: "🧑‍🌾",
    image: "/img/database/fazendeiro.jpg",
    difficulty: 1,
    tags: ["profissao", "alimentacao", "natureza", "importante"],
    attributes: {
        works_at: "fazenda e campo",
        helps_with: "produzir os alimentos que comemos todos os dias",
        tool: "trator, enxada e sementes",
        value: "trabalho duro e amor pela terra",
        studies: "agronomia ou prática no campo"
    },
    fun_fact: "O fazendeiro acorda antes do sol nascer todo dia! Sem os fazendeiros, não teria arroz, feijão, frutas nem verduras nas prateleiras do mercado."
},

{
    id: "cientista",
    label: "Cientista",
    type: "profissao",
    emoji: "🧑‍🔬",
    image: "/img/database/cientista.jpg",
    difficulty: 2,
    tags: ["profissao", "ciencia", "descoberta", "importante"],
    attributes: {
        works_at: "laboratório, universidade e campo",
        helps_with: "descobrir coisas novas sobre o mundo e criar soluções",
        tool: "microscópio, tubos de ensaio e computador",
        value: "curiosidade e perseverança",
        studies: "biologia, química, física ou outras ciências"
    },
    fun_fact: "Os cientistas criaram a vacina, o antibiótico e a internet! Cada descoberta começa com uma pergunta simples: 'Por quê?' ou 'E se...?'"
},

{
    id: "engenheiro",
    label: "Engenheiro",
    type: "profissao",
    emoji: "🏗️",
    image: "/img/database/engenheiro.jpg",
    difficulty: 2,
    tags: ["profissao", "construcao", "tecnologia", "importante"],
    attributes: {
        works_at: "obras, escritório e fábricas",
        helps_with: "planejar e construir pontes, prédios e máquinas",
        tool: "prancheta, computador e capacete",
        value: "raciocínio lógico e criatividade",
        studies: "engenharia civil, mecânica, elétrica etc."
    },
    fun_fact: "Os engenheiros projetaram desde pirâmides do Egito até o celular no seu bolso! A engenharia existe há mais de 3.000 anos."
},

{
    id: "artista",
    label: "Artista",
    type: "profissao",
    emoji: "🎨",
    image: "/img/database/artista.jpg",
    difficulty: 1,
    tags: ["profissao", "arte", "criatividade", "cultura"],
    attributes: {
        works_at: "ateliê, galeria, teatro e estúdio",
        helps_with: "criar beleza e fazer as pessoas sentir emoções",
        tool: "pincel, tinta, argila ou câmera",
        value: "criatividade e expressão",
        studies: "artes plásticas, teatro, música, design"
    },
    fun_fact: "A arte mais antiga já encontrada tem 73.000 anos! Uma linha desenhada com ocre vermelho em uma pedra na África do Sul."
},

{
    id: "musico",
    label: "Músico",
    type: "profissao",
    emoji: "🎵",
    image: "/img/database/musico.jpg",
    difficulty: 1,
    tags: ["profissao", "arte", "musica", "cultura"],
    attributes: {
        works_at: "palco, estúdio e escola de música",
        helps_with: "criar e tocar música que emociona as pessoas",
        tool: "instrumento musical e voz",
        value: "dedicação e sensibilidade",
        studies: "música, conservatório ou prática"
    },
    fun_fact: "Tocar um instrumento muda o cérebro fisicamente! Músicos têm o corpo caloso — ponte entre os dois lados do cérebro — mais desenvolvido."
},

{
    id: "astronauta",
    label: "Astronauta",
    type: "profissao",
    emoji: "🧑‍🚀",
    image: "/img/database/astronauta.jpg",
    difficulty: 2,
    tags: ["profissao", "espaco", "ciencia", "coragem"],
    attributes: {
        works_at: "estação espacial e nave",
        helps_with: "explorar o espaço e fazer experimentos científicos",
        tool: "traje espacial e equipamentos de pesquisa",
        value: "coragem, disciplina e curiosidade",
        studies: "engenharia ou medicina mais treinamento da NASA"
    },
    fun_fact: "No espaço, os astronautas ficam 2-5 cm mais altos porque a coluna se alonga sem gravidade! Mas voltam ao tamanho normal na Terra."
},

{
    id: "enfermeiro",
    label: "Enfermeiro",
    type: "profissao",
    emoji: "🏥",
    image: "/img/database/enfermeiro.jpg",
    difficulty: 1,
    tags: ["profissao", "saude", "cuidado", "importante"],
    attributes: {
        works_at: "hospital, clínica e UBS",
        helps_with: "cuidar dos pacientes e ajudar os médicos",
        tool: "seringa, curativo e estetoscópio",
        value: "empatia e dedicação",
        studies: "enfermagem"
    },
    fun_fact: "Florence Nightingale, considerada a mãe da enfermagem moderna, salvou centenas de soldados apenas lavando as mãos e melhorando a higiene!"
},

{
    id: "veterinario",
    label: "Veterinário",
    type: "profissao",
    emoji: "🐾",
    image: "/img/database/veterinario.jpg",
    difficulty: 2,
    tags: ["profissao", "saude", "animais", "cuidado"],
    attributes: {
        works_at: "clínica veterinária e zoológico",
        helps_with: "cuidar da saúde dos animais",
        tool: "estetoscópio, seringas e remédios para animais",
        value: "amor pelos animais e responsabilidade",
        studies: "medicina veterinária"
    },
    fun_fact: "O veterinário precisa aprender sobre centenas de espécies! O médico humano estuda um tipo de corpo; o veterinário estuda cão, gato, pássaro, cobra e muito mais."
},

{
    id: "dentista",
    label: "Dentista",
    type: "profissao",
    emoji: "🦷",
    image: "/img/database/dentista.jpg",
    difficulty: 1,
    tags: ["profissao", "saude", "dentes", "cuidado"],
    attributes: {
        works_at: "consultório odontológico",
        helps_with: "cuidar da saúde dos dentes e da boca",
        tool: "broca, espelho dental e flúor",
        value: "cuidado e precisão",
        studies: "odontologia"
    },
    fun_fact: "Escovar os dentes 3 vezes por dia pode evitar 99% das cáries! Ir ao dentista 2 vezes por ano é como dar uma revisão completa à sua boca."
},

{
    id: "motorista",
    label: "Motorista",
    type: "profissao",
    emoji: "🧑‍✈️",
    image: "/img/database/motorista.jpg",
    difficulty: 1,
    tags: ["profissao", "transporte", "servico", "cotidiano"],
    attributes: {
        works_at: "ônibus, taxi, caminhão e vans",
        helps_with: "transportar pessoas e mercadorias com segurança",
        tool: "volante, habilitação e conhecimento do trânsito",
        value: "responsabilidade e atenção",
        studies: "autoescola e habilitação"
    },
    fun_fact: "Os motoristas de caminhão percorrem distâncias enormes levando alimentos, remédios e produtos para cidades inteiras — são herois invisíveis do cotidiano!"
}

);
