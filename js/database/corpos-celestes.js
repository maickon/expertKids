// CORPOS CELESTES — 7 entidades (espaço e astronomia básica)
KNOWLEDGE_BASE.entities.push(

{
    id: "lua",
    label: "Lua",
    type: "corpo_celeste",
    emoji: "🌙",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=300&q=80",
    difficulty: 1,
    tags: ["espaco", "corpo_celeste", "noite", "satelite"],
    attributes: {
        period: "noite",
        shape: "muda de fase (cheia, minguante, crescente, nova)",
        light: "refletida do Sol",
        color: "branca ou amarelada",
        distance: "384 mil km da Terra"
    },
    fun_fact: "A Lua não tem luz própria! Ela brilha porque reflete a luz do Sol, como um espelho gigante no céu."
},

{
    id: "estrelas",
    label: "Estrelas",
    type: "corpo_celeste",
    emoji: "⭐",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=300&q=80",
    difficulty: 2,
    tags: ["espaco", "corpo_celeste", "noite", "brilhante"],
    attributes: {
        period: "noite",
        appearance: "pequenas e brilhantes",
        quantity: "bilhões e bilhões",
        nature: "bolas de gás muito quente",
        color: "branca ou amarelada"
    },
    fun_fact: "O Sol também é uma estrela! Só parece maior porque é a mais próxima de nós. À noite vemos estrelas que estão a anos-luz de distância."
},

{
    id: "terra",
    label: "Planeta Terra",
    type: "corpo_celeste",
    emoji: "🌍",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=300&q=80",
    difficulty: 1,
    tags: ["espaco", "corpo_celeste", "planeta", "casa"],
    attributes: {
        color: "azul e verde",
        shape: "quase esférica",
        feature: "tem vida, água e ar",
        orbits: "o Sol",
        age: "4,5 bilhões de anos"
    },
    fun_fact: "A Terra é o único planeta do sistema solar onde sabemos que existe vida! Mais de 70% da sua superfície é coberta por água."
},

{
    id: "marte",
    label: "Marte",
    type: "corpo_celeste",
    emoji: "🪐",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=300&q=80",
    difficulty: 2,
    tags: ["espaco", "corpo_celeste", "planeta", "vermelho"],
    attributes: {
        color: "vermelho e alaranjado",
        shape: "esférica",
        feature: "tem dois pequenos satélites e um vulcão gigante",
        orbits: "o Sol",
        nickname: "Planeta Vermelho"
    },
    fun_fact: "Marte tem o maior vulcão do sistema solar, o Olympus Mons — ele é três vezes mais alto que o Everest! E um dia em Marte dura quase 25 horas."
},

{
    id: "cometa",
    label: "Cometa",
    type: "corpo_celeste",
    emoji: "☄️",
    image: "https://images.unsplash.com/photo-1614729939131-6e3e4b9ce9b4?auto=format&fit=crop&w=300&q=80",
    difficulty: 3,
    tags: ["espaco", "corpo_celeste", "brilhante", "raro"],
    attributes: {
        appearance: "bola brilhante com cauda longa",
        made_of: "gelo, poeira e rocha",
        movement: "viaja pelo espaço em órbitas longas",
        tail: "cauda de poeira e gás iluminada pelo Sol",
        rarity: "visível a olho nu raramente"
    },
    fun_fact: "O Cometa Halley passa perto da Terra a cada 75-76 anos! A última vez foi em 1986 e a próxima passagem será em 2061."
},

{
    id: "sistema_solar",
    label: "Sistema Solar",
    type: "corpo_celeste",
    emoji: "🌌",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=300&q=80",
    difficulty: 2,
    tags: ["espaco", "corpo_celeste", "planeta", "sol"],
    attributes: {
        center: "o Sol",
        planets: "oito planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno",
        size: "imenso — 4,5 bilhões de km do Sol a Netuno",
        age: "4,6 bilhões de anos",
        feature: "contém planetas, satélites, asteróides e cometas"
    },
    fun_fact: "Se o Sol fosse do tamanho de uma bola de basquete, a Terra seria menor que um grão de areia! As distâncias no espaço são difíceis de imaginar."
},

{
    id: "saturno",
    label: "Saturno",
    type: "corpo_celeste",
    emoji: "🪐",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=300&q=80",
    difficulty: 2,
    tags: ["espaco", "corpo_celeste", "planeta", "aneis"],
    attributes: {
        color: "amarelo e dourado",
        shape: "esférica com anéis",
        feature: "tem anéis de gelo e rocha visíveis",
        orbits: "o Sol",
        moons: "mais de 140 luas conhecidas"
    },
    fun_fact: "Os anéis de Saturno são feitos de gelo e pedras! Eles parecem sólidos de longe, mas na verdade são bilhões de fragmentos girando ao redor do planeta."
}

);
