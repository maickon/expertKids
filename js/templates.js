// ─────────────────────────────────────────────────────────────────────────────
// Templates de Exercícios
//
// Estrutura de cada template:
//   id            — identificador único
//   texts[]       — variantes de frase de contexto (gerador sorteia uma)
//   questions[]   — variantes de pergunta (gerador sorteia uma)
//   answer        — string com placeholder da resposta correta
//   required_types — tipos de entidade necessários (entity1, entity2…)
//   difficulty    — 1=fácil · 2=médio · 3=difícil
//   answer_type   — "label"|"attribute"|"type"|"emoji" (ajuda o gerador a criar distrações)
// ─────────────────────────────────────────────────────────────────────────────
const TEMPLATES = {
    skills: {

        // ══════════════════════════════════════════════════════════════════════
        // LEITURA BÁSICA
        // ══════════════════════════════════════════════════════════════════════
        reading_basic: [

            {
                id: "reading_color",
                texts: [
                    "Eu vejo um {entity1} {attribute1.color}.",
                    "Olha que {entity1} {attribute1.color} bonito!",
                    "Que cor incrível! Este {entity1} é {attribute1.color}.",
                    "O {emoji1} tem a cor {attribute1.color}."
                ],
                questions: [
                    "Qual é a cor do {entity1}?",
                    "De que cor é o {entity1}?",
                    "Como é a cor do {emoji1}?"
                ],
                answer: "{attribute1.color}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_food",
                texts: [
                    "O {entity1} gosta muito de comer {attribute1.food}.",
                    "Na hora da refeição, o {entity1} come {attribute1.food}.",
                    "O {emoji1} está com fome! Ele quer {attribute1.food}.",
                    "Sabe o que o {entity1} prefere comer? {attribute1.food}!"
                ],
                questions: [
                    "O que o {entity1} come?",
                    "Qual é a comida favorita do {entity1}?",
                    "Com o que o {emoji1} se alimenta?"
                ],
                answer: "{attribute1.food}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_sound",
                texts: [
                    "O {entity1} abre a boca e faz: {attribute1.sound}!",
                    "Você ouviu? O {emoji1} fez '{attribute1.sound}'!",
                    "Quando está feliz, o {entity1} faz {attribute1.sound}.",
                    "O som do {entity1} é: {attribute1.sound}!"
                ],
                questions: [
                    "Que som o {entity1} faz?",
                    "Como o {entity1} se comunica?",
                    "O {emoji1} faz qual barulho?"
                ],
                answer: "{attribute1.sound}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_habitat",
                texts: [
                    "O {entity1} mora e vive na {attribute1.habitat}.",
                    "A casa do {entity1} fica na {attribute1.habitat}.",
                    "Se você quiser encontrar um {entity1}, procure na {attribute1.habitat}.",
                    "O {emoji1} se sente feliz na {attribute1.habitat}."
                ],
                questions: [
                    "Onde o {entity1} vive?",
                    "Qual é a casa do {entity1}?",
                    "Onde mora o {emoji1}?"
                ],
                answer: "{attribute1.habitat}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_fruta_taste",
                texts: [
                    "A {entity1} tem um sabor {attribute1.taste}.",
                    "Quando você come uma {entity1}, sente um gosto {attribute1.taste}.",
                    "Mmmm! A {emoji1} é {attribute1.taste}.",
                    "O sabor da {entity1} é {attribute1.taste} — muito gostosa!"
                ],
                questions: [
                    "Qual é o sabor da {entity1}?",
                    "Como é o gosto da {entity1}?",
                    "A {emoji1} tem sabor…?"
                ],
                answer: "{attribute1.taste}",
                required_types: ["fruta"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_fruta_color",
                texts: [
                    "A {entity1} tem a cor {attribute1.color}.",
                    "Olhe para a {emoji1} — ela é {attribute1.color}!",
                    "Que fruta bonita e {attribute1.color}! É a {entity1}.",
                    "A {entity1} tem cor {attribute1.color} e é muito saudável."
                ],
                questions: [
                    "Qual é a cor da {entity1}?",
                    "De que cor é a {emoji1}?",
                    "Como é a cor da {entity1}?"
                ],
                answer: "{attribute1.color}",
                required_types: ["fruta"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_fruta_format",
                texts: [
                    "A {entity1} tem o formato {attribute1.format}.",
                    "Olhe o formato da {emoji1}: ela é {attribute1.format}.",
                    "A {entity1} tem uma forma {attribute1.format} bem especial.",
                    "Se você fechar os olhos e tocar uma {entity1}, vai sentir que ela é {attribute1.format}."
                ],
                questions: [
                    "Como é o formato da {entity1}?",
                    "A {entity1} tem qual forma?",
                    "Qual é o formato da {emoji1}?"
                ],
                answer: "{attribute1.format}",
                required_types: ["fruta"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "reading_objeto_uso",
                texts: [
                    "A {entity1} serve para {attribute1.used_for}.",
                    "Usamos a {entity1} para {attribute1.used_for}.",
                    "Quando precisamos de {attribute1.used_for}, usamos a {entity1}.",
                    "A {emoji1} é muito útil! Com ela podemos {attribute1.used_for}."
                ],
                questions: [
                    "Para que serve a {entity1}?",
                    "O que fazemos com a {entity1}?",
                    "Para que usamos a {emoji1}?"
                ],
                answer: "{attribute1.used_for}",
                required_types: ["objeto"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_clima_feeling",
                texts: [
                    "Quando tem {entity1}, a sensação é de {attribute1.feeling}.",
                    "O {entity1} faz a gente sentir {attribute1.feeling}.",
                    "Com {entity1} lá fora, fica {attribute1.feeling}.",
                    "O {emoji1} traz uma sensação {attribute1.feeling}."
                ],
                questions: [
                    "Que sensação o {entity1} causa?",
                    "Quando tem {entity1}, como fica o tempo?",
                    "O {emoji1} faz sentir…?"
                ],
                answer: "{attribute1.feeling}",
                required_types: ["clima"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_estacao",
                texts: [
                    "No {entity1}, o tempo fica {attribute1.weather}.",
                    "Durante o {entity1}, as pessoas costumam {attribute1.activity}.",
                    "O {emoji1} é uma estação onde {attribute1.weather}.",
                    "Na estação chamada {entity1}, a natureza mostra {attribute1.nature}."
                ],
                questions: [
                    "O que acontece no {entity1}?",
                    "Como é o tempo no {entity1}?",
                    "O que é típico do {entity1}?"
                ],
                answer: "{attribute1.weather}",
                required_types: ["estacao"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "reading_corpo_function",
                texts: [
                    "O {entity1} {emoji1} serve para {attribute1.function}.",
                    "A função do {entity1} é {attribute1.function}.",
                    "Usamos o {entity1} para {attribute1.function}.",
                    "Sem o {entity1}, não conseguiríamos {attribute1.function}."
                ],
                questions: [
                    "Para que serve o {entity1}?",
                    "Qual é a função do {emoji1}?",
                    "O que o {entity1} faz no nosso corpo?"
                ],
                answer: "{attribute1.function}",
                required_types: ["corpo_humano"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_corpo_sense",
                texts: [
                    "O {entity1} {emoji1} está ligado a um sentido muito especial.",
                    "Graças ao {entity1}, conseguimos usar o sentido da {attribute1.sense}.",
                    "O {entity1} é o órgão responsável pela {attribute1.sense}.",
                    "Quando usamos o {entity1}, exercitamos nossa {attribute1.sense}."
                ],
                questions: [
                    "Qual sentido o {entity1} representa?",
                    "O {emoji1} é o órgão de qual sentido?",
                    "Que sentido usamos com o {entity1}?"
                ],
                answer: "{attribute1.sense}",
                required_types: ["corpo_humano"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_alimento_goodfor",
                texts: [
                    "O {entity1} {emoji1} faz bem ao nosso corpo.",
                    "Comer {entity1} é ótimo porque {attribute1.good_for}.",
                    "O {entity1} é nutritivo e serve para {attribute1.good_for}.",
                    "Os médicos recomendam o {entity1} porque ele ajuda a {attribute1.good_for}."
                ],
                questions: [
                    "Por que o {entity1} é saudável?",
                    "Para que o {entity1} faz bem?",
                    "O {emoji1} é bom para o corpo por quê?"
                ],
                answer: "{attribute1.good_for}",
                required_types: ["alimento"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_profissao_local",
                texts: [
                    "O {entity1} {emoji1} trabalha em um lugar especial.",
                    "Você vai encontrar o {entity1} trabalhando no {attribute1.works_at}.",
                    "O {entity1} passa o dia no {attribute1.works_at}.",
                    "Se você precisar de um {entity1}, vá ao {attribute1.works_at}."
                ],
                questions: [
                    "Onde trabalha o {entity1}?",
                    "Em que lugar fica o {emoji1}?",
                    "Onde o {entity1} exerce a sua profissão?"
                ],
                answer: "{attribute1.works_at}",
                required_types: ["profissao"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_profissao_tool",
                texts: [
                    "O {entity1} {emoji1} usa uma ferramenta especial no seu trabalho.",
                    "Para trabalhar, o {entity1} precisa de {attribute1.tool}.",
                    "A principal ferramenta do {entity1} é {attribute1.tool}.",
                    "O {entity1} não consegue trabalhar sem {attribute1.tool}."
                ],
                questions: [
                    "Qual ferramenta o {entity1} usa?",
                    "O que o {emoji1} precisa para trabalhar?",
                    "Que objeto é essencial para o {entity1}?"
                ],
                answer: "{attribute1.tool}",
                required_types: ["profissao"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_valor_meaning",
                texts: [
                    "O valor da {entity1} {emoji1} significa {attribute1.meaning}.",
                    "Quando falamos em {entity1}, queremos dizer {attribute1.meaning}.",
                    "A {entity1} é quando a gente {attribute1.meaning}.",
                    "Ter {entity1} significa {attribute1.meaning}."
                ],
                questions: [
                    "O que significa {entity1}?",
                    "O que quer dizer ter {entity1}?",
                    "A {entity1} {emoji1} significa…?"
                ],
                answer: "{attribute1.meaning}",
                required_types: ["valor"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_cor_exemplos",
                texts: [
                    "A cor {entity1} {emoji1} aparece em muitos lugares.",
                    "Existem objetos {attribute1.feels_like}s ao redor de nós.",
                    "Pense na cor {entity1}: ela faz você se sentir {attribute1.feels_like}.",
                    "A cor {entity1} é {attribute1.feels_like} e aparece em {attribute1.examples}."
                ],
                questions: [
                    "O que é {attribute1.feels_like} como o {entity1}?",
                    "Que sensação a cor {entity1} transmite?",
                    "A cor {emoji1} faz você sentir…?"
                ],
                answer: "{attribute1.feels_like}",
                required_types: ["cor"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "reading_forma_lados",
                texts: [
                    "A forma {entity1} {emoji1} tem um número especial de lados.",
                    "Veja o {entity1}: quantos lados ele tem?",
                    "O {entity1} é uma forma geométrica com {attribute1.sides}.",
                    "Toda vez que você vê um {entity1}, conta {attribute1.sides}."
                ],
                questions: [
                    "Quantos lados tem o {entity1}?",
                    "O {emoji1} tem quantos lados?",
                    "Como é o {entity1} em relação aos lados?"
                ],
                answer: "{attribute1.sides}",
                required_types: ["forma"],
                difficulty: 1,
                answer_type: "attribute"
            }
        ],

        // ══════════════════════════════════════════════════════════════════════
        // CLASSIFICAÇÃO
        // ══════════════════════════════════════════════════════════════════════
        classification: [

            {
                id: "classify_group",
                texts: [
                    "Olhe para este ser: {emoji1}",
                    "Veja este {emoji1} com atenção.",
                    "Observe bem: {emoji1}",
                    "Este é o {entity1}: {emoji1}"
                ],
                questions: [
                    "O {label1} pertence a qual grupo?",
                    "O que é o {label1}?",
                    "Como classificamos o {label1}?"
                ],
                answer: "{type1}",
                required_types: ["animal", "fruta", "objeto"],
                difficulty: 1,
                answer_type: "type"
            },

            {
                id: "classify_habitat",
                texts: [
                    "O {entity1} tem um lugar favorito para viver.",
                    "Cada animal tem sua casa na natureza. O {entity1} não é diferente.",
                    "Você sabe onde o {emoji1} passa a maior parte do tempo?",
                    "O {entity1} precisa do seu habitat para sobreviver."
                ],
                questions: [
                    "Onde o {entity1} vive?",
                    "Qual é o habitat do {entity1}?",
                    "Onde podemos encontrar o {emoji1} na natureza?"
                ],
                answer: "{attribute1.habitat}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "classify_material",
                texts: [
                    "A {entity1} é um objeto muito usado no dia a dia.",
                    "Olhe com atenção para a {emoji1}.",
                    "Quem sabe do que a {entity1} é feita?",
                    "A {entity1} {emoji1} tem um material especial."
                ],
                questions: [
                    "De que material é feita a {entity1}?",
                    "Com que material construíram a {entity1}?",
                    "Qual é o material da {emoji1}?"
                ],
                answer: "{attribute1.material}",
                required_types: ["objeto"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_wheels",
                texts: [
                    "O {entity1} é um veículo que as pessoas usam para se locomover.",
                    "Veja este veículo: {emoji1}",
                    "O {entity1} anda sobre rodas.",
                    "Para se deslocar, as pessoas usam o {entity1}."
                ],
                questions: [
                    "Quantas rodas tem o {entity1}?",
                    "O {entity1} tem quantas rodas?",
                    "Conte as rodas do {emoji1}:"
                ],
                answer: "{attribute1.wheels}",
                required_types: ["objeto"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "classify_clima_needs",
                texts: [
                    "O {entity1} é um fenômeno que acontece na natureza.",
                    "Quando vemos {emoji1}, sabemos que {attribute1.effect}.",
                    "O {entity1} é especial porque {attribute1.effect}.",
                    "Você reconhece esse fenômeno? É o {entity1}!"
                ],
                questions: [
                    "O que o {entity1} causa ou faz?",
                    "O {emoji1} é responsável por quê?",
                    "O que acontece quando tem {entity1}?"
                ],
                answer: "{attribute1.effect}",
                required_types: ["clima"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_estacao_meses",
                texts: [
                    "As estações do ano marcam o ritmo da natureza.",
                    "Cada estação tem seus meses no Brasil.",
                    "Você sabe quando acontece o {entity1}?",
                    "O {emoji1} é uma estação do ano. Quais são seus meses no Brasil?"
                ],
                questions: [
                    "Quando acontece o {entity1} no Brasil?",
                    "Em que meses cai o {entity1}?",
                    "Quais meses pertencem ao {entity1}?"
                ],
                answer: "{attribute1.months}",
                required_types: ["estacao"],
                difficulty: 3,
                answer_type: "attribute"
            },

            {
                id: "classify_natureza_agua",
                texts: [
                    "O {entity1} é um elemento importante da natureza.",
                    "Olhe este elemento natural: {emoji1}",
                    "Na natureza existe o {entity1} — você sabe o que tem nele?",
                    "O {entity1} é cheio de vida. Que tipo de água ele tem?"
                ],
                questions: [
                    "Que tipo de água tem no {entity1}?",
                    "A água do {entity1} é doce ou salgada?",
                    "Como é a água do {emoji1}?"
                ],
                answer: "{attribute1.water_type}",
                required_types: ["natureza"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_espaco",
                texts: [
                    "Lá no espaço existe o {entity1}.",
                    "No céu, à {attribute1.period}, podemos ver o {entity1}.",
                    "Olhe para o céu: {emoji1}. Este é o {entity1}.",
                    "Você conhece o {entity1}? Ele aparece {attribute1.period}."
                ],
                questions: [
                    "Quando podemos ver o {entity1}?",
                    "O {entity1} aparece de {attribute1.period} ou de dia?",
                    "Em que período o {emoji1} fica visível?"
                ],
                answer: "{attribute1.period}",
                required_types: ["corpo_celeste"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_corpo_location",
                texts: [
                    "O {entity1} {emoji1} fica em um lugar específico do corpo.",
                    "Cada parte do corpo tem seu lugar certo.",
                    "Você sabe onde fica o {entity1} no nosso corpo?",
                    "O {entity1} está localizado no {attribute1.location}."
                ],
                questions: [
                    "Onde fica o {entity1} no corpo?",
                    "Em que parte do corpo está o {emoji1}?",
                    "O {entity1} está localizado onde?"
                ],
                answer: "{attribute1.location}",
                required_types: ["corpo_humano"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_corpo_care",
                texts: [
                    "Para manter o {entity1} {emoji1} saudável, precisamos ter cuidados.",
                    "Cuidar do {entity1} é muito importante para a saúde.",
                    "Sabe como manter o {entity1} em bom estado?",
                    "O {entity1} precisa de atenção especial: {attribute1.care}."
                ],
                questions: [
                    "Como cuidamos do {entity1}?",
                    "O que devemos fazer para manter o {emoji1} saudável?",
                    "Qual é o cuidado necessário com o {entity1}?"
                ],
                answer: "{attribute1.care}",
                required_types: ["corpo_humano"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_profissao_ajuda",
                texts: [
                    "O {entity1} {emoji1} tem uma missão importante na sociedade.",
                    "O trabalho do {entity1} é essencial porque ele {attribute1.helps_with}.",
                    "Quando precisamos de ajuda com {attribute1.helps_with}, chamamos o {entity1}.",
                    "O {entity1} passa o dia {attribute1.helps_with}."
                ],
                questions: [
                    "Com o que o {entity1} nos ajuda?",
                    "O {emoji1} é responsável por quê?",
                    "Qual é a missão do {entity1}?"
                ],
                answer: "{attribute1.helps_with}",
                required_types: ["profissao"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "classify_valor_exemplo",
                texts: [
                    "A {entity1} {emoji1} aparece em situações do dia a dia.",
                    "Um bom exemplo de {entity1} é quando alguém {attribute1.example}.",
                    "Você demonstra {entity1} quando {attribute1.example}.",
                    "Pense numa cena assim: {attribute1.example}. Esse é um exemplo de {entity1}."
                ],
                questions: [
                    "Qual é um exemplo de {entity1}?",
                    "Como demonstramos {entity1} no dia a dia?",
                    "Uma atitude de {entity1} seria…?"
                ],
                answer: "{attribute1.example}",
                required_types: ["valor"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_alimento_refeicao",
                texts: [
                    "O {entity1} {emoji1} faz parte de uma refeição especial.",
                    "Na hora do {attribute1.meal}, muita gente come {entity1}.",
                    "O {entity1} é comum nas refeições de {attribute1.meal}.",
                    "Se você pedir {entity1} num restaurante, provavelmente é para o {attribute1.meal}."
                ],
                questions: [
                    "Em que refeição comemos {entity1}?",
                    "O {emoji1} é servido quando?",
                    "O {entity1} é típico de qual refeição?"
                ],
                answer: "{attribute1.meal}",
                required_types: ["alimento"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "classify_cor_tipo",
                texts: [
                    "Existem cores primárias e secundárias. E o {entity1}?",
                    "A cor {entity1} {emoji1} tem uma classificação especial.",
                    "Você sabe se o {entity1} é uma cor primária ou secundária?",
                    "O {entity1} é classificado como {attribute1.type_of}."
                ],
                questions: [
                    "O {entity1} é que tipo de cor?",
                    "Como classificamos a cor {emoji1}?",
                    "O {entity1} é primário, secundário ou neutro?"
                ],
                answer: "{attribute1.type_of}",
                required_types: ["cor"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "classify_forma_cantos",
                texts: [
                    "Vamos descobrir quantos cantos tem o {entity1} {emoji1}.",
                    "Cada forma geométrica tem cantos e lados.",
                    "O {entity1} é uma forma com {attribute1.corners}.",
                    "Conte os cantos do {entity1}: são {attribute1.corners}."
                ],
                questions: [
                    "Quantos cantos tem o {entity1}?",
                    "O {emoji1} tem quantos cantos?",
                    "Qual é o número de cantos do {entity1}?"
                ],
                answer: "{attribute1.corners}",
                required_types: ["forma"],
                difficulty: 2,
                answer_type: "attribute"
            }
        ],

        // ══════════════════════════════════════════════════════════════════════
        // VOCABULÁRIO
        // ══════════════════════════════════════════════════════════════════════
        vocabulary: [

            {
                id: "vocab_name",
                texts: [
                    "{emoji1}",
                    "Veja este símbolo: {emoji1}",
                    "Observe bem: {emoji1}",
                    "O que é este {emoji1}?"
                ],
                questions: [
                    "Qual é o nome disto?",
                    "Como se chama esse {emoji1}?",
                    "Você sabe o nome deste ser?"
                ],
                answer: "{label1}",
                required_types: ["animal", "fruta", "objeto"],
                difficulty: 1,
                answer_type: "label"
            },

            {
                id: "vocab_sound_to_animal",
                texts: [
                    "Escute: um animal está fazendo o som '{attribute1.sound}'!",
                    "Qual animal faz '{attribute1.sound}'?",
                    "Você ouviu? '{attribute1.sound}'! Que animal é esse?",
                    "Um animal lá longe está fazendo: {attribute1.sound}!"
                ],
                questions: [
                    "Quem faz o som '{attribute1.sound}'?",
                    "Qual animal faz esse barulho?",
                    "De que animal é esse som?"
                ],
                answer: "{label1}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "label"
            },

            {
                id: "vocab_color_to_fruta",
                texts: [
                    "Tem uma fruta que é toda {attribute1.color}.",
                    "Pense em uma fruta de cor {attribute1.color}...",
                    "Qual fruta tem a cor {attribute1.color} e sabor {attribute1.taste}?",
                    "Cor {attribute1.color}, formato {attribute1.format}... que fruta é essa?"
                ],
                questions: [
                    "Que fruta é {attribute1.color}?",
                    "Qual fruta tem essa cor?",
                    "Que fruta tem a cor {attribute1.color} e é {attribute1.taste}?"
                ],
                answer: "{label1}",
                required_types: ["fruta"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_habitat_to_animal",
                texts: [
                    "Um animal mora na {attribute1.habitat}.",
                    "Existe um animal que vive na {attribute1.habitat}.",
                    "Na {attribute1.habitat} vive um animal especial.",
                    "Pense em um animal que passa a vida na {attribute1.habitat}."
                ],
                questions: [
                    "Que animal vive na {attribute1.habitat}?",
                    "Qual animal mora na {attribute1.habitat}?",
                    "Quem habita a {attribute1.habitat}?"
                ],
                answer: "{label1}",
                required_types: ["animal"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_funfact_to_entity",
                texts: [
                    "Este animal tem algo especial: {attribute1.body}.",
                    "Pense em um animal com {attribute1.body}.",
                    "Existe um animal que {attribute1.move}.",
                    "Um animal que {attribute1.move} e come {attribute1.food}."
                ],
                questions: [
                    "De que animal estamos falando?",
                    "Qual animal tem essas características?",
                    "Que animal é esse?"
                ],
                answer: "{label1}",
                required_types: ["animal"],
                difficulty: 3,
                answer_type: "label"
            },

            {
                id: "vocab_corpo_name",
                texts: [
                    "Esta parte do corpo serve para {attribute1.function}.",
                    "É o órgão da {attribute1.sense}. Fica no {attribute1.location}.",
                    "Usamos para {attribute1.function}. Que parte do corpo é essa?",
                    "Esta parte fica no {attribute1.location} e serve para {attribute1.function}."
                ],
                questions: [
                    "De que parte do corpo estamos falando?",
                    "Qual parte do corpo é essa?",
                    "Que órgão tem essa função?"
                ],
                answer: "{label1}",
                required_types: ["corpo_humano"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_profissao_name",
                texts: [
                    "Esta pessoa trabalha no {attribute1.works_at}.",
                    "Usa {attribute1.tool} e ajuda com {attribute1.helps_with}.",
                    "O trabalho dela é {attribute1.helps_with}.",
                    "Trabalha no {attribute1.works_at} e usa {attribute1.tool}."
                ],
                questions: [
                    "Qual é essa profissão?",
                    "Como chamamos esse profissional?",
                    "Que profissional é esse?"
                ],
                answer: "{label1}",
                required_types: ["profissao"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_alimento_name",
                texts: [
                    "É um {attribute1.group} que faz bem para {attribute1.good_for}.",
                    "Comemos no {attribute1.meal}. A cor é {attribute1.color}.",
                    "Tem origem {attribute1.origin} e serve para {attribute1.good_for}.",
                    "É da cor {attribute1.color} e ótimo para {attribute1.good_for}."
                ],
                questions: [
                    "Que alimento é esse?",
                    "Como se chama esse alimento?",
                    "Qual alimento tem essas características?"
                ],
                answer: "{label1}",
                required_types: ["alimento"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_valor_name",
                texts: [
                    "Significa {attribute1.meaning}.",
                    "O oposto disso é {attribute1.opposite}.",
                    "Um exemplo: {attribute1.example}. Que valor é esse?",
                    "Significa {attribute1.meaning} e o contrário é {attribute1.opposite}."
                ],
                questions: [
                    "Que valor humano é esse?",
                    "Como chamamos esse valor?",
                    "Qual é o nome desse valor?"
                ],
                answer: "{label1}",
                required_types: ["valor"],
                difficulty: 2,
                answer_type: "label"
            },

            {
                id: "vocab_cor_name",
                texts: [
                    "É uma cor que parece {attribute1.feels_like}.",
                    "Aparece em: {attribute1.examples}.",
                    "É uma cor {attribute1.type_of} que transmite {attribute1.feels_like}.",
                    "Aparece em {attribute1.examples} e faz sentir {attribute1.feels_like}."
                ],
                questions: [
                    "Que cor é essa?",
                    "Como se chama essa cor?",
                    "Qual cor tem essa sensação?"
                ],
                answer: "{label1}",
                required_types: ["cor"],
                difficulty: 1,
                answer_type: "label"
            },

            {
                id: "vocab_forma_name",
                texts: [
                    "É uma forma com {attribute1.sides}.",
                    "Tem {attribute1.corners}. Exemplos: {attribute1.examples}.",
                    "Tem {attribute1.sides} e aparece em {attribute1.examples}.",
                    "É uma forma geométrica com {attribute1.sides} e {attribute1.corners}."
                ],
                questions: [
                    "Que forma geométrica é essa?",
                    "Como se chama essa forma?",
                    "Qual é o nome dessa figura?"
                ],
                answer: "{label1}",
                required_types: ["forma"],
                difficulty: 1,
                answer_type: "label"
            }
        ],

        // ══════════════════════════════════════════════════════════════════════
        // CONTAGEM
        // ══════════════════════════════════════════════════════════════════════
        counting: [

            {
                id: "count_objects",
                texts: [
                    "{emojis_list}",
                    "Olhe bem para os emojis abaixo: {emojis_list}",
                    "Conte com atenção: {emojis_list}",
                    "Preste atenção! {emojis_list}"
                ],
                questions: [
                    "Quantos {label1} você vê?",
                    "Quantos {emoji1} aparecem?",
                    "Qual o número de {label1} na tela?"
                ],
                answer: "{count}",
                required_types: ["animal"],
                difficulty: 1,
                answer_type: "number"
            },

            {
                id: "count_fruits",
                texts: [
                    "{emojis_list}",
                    "Veja estas frutas: {emojis_list}",
                    "Quantas frutas tem aqui? {emojis_list}",
                    "Conte as frutas: {emojis_list}"
                ],
                questions: [
                    "Quantas {label1} você vê?",
                    "Quantos {emoji1} aparecem?",
                    "Há quantas {entity1} na tela?"
                ],
                answer: "{count}",
                required_types: ["fruta"],
                difficulty: 1,
                answer_type: "number"
            },

            {
                id: "count_objects_things",
                texts: [
                    "{emojis_list}",
                    "Quantos objetos? {emojis_list}",
                    "Conte os objetos abaixo: {emojis_list}",
                    "Veja: {emojis_list}"
                ],
                questions: [
                    "Quantos {label1} aparecem?",
                    "Quantos {emoji1} você conta?",
                    "Qual o total de {entity1}?"
                ],
                answer: "{count}",
                required_types: ["objeto"],
                difficulty: 1,
                answer_type: "number"
            },

            {
                id: "count_challenge_mixed",
                texts: [
                    "Atenção: {emojis_list}",
                    "Desafio de contagem! {emojis_list}",
                    "Conte rápido: {emojis_list}",
                    "Você consegue? {emojis_list}"
                ],
                questions: [
                    "Qual o número total de {label1}?",
                    "Quantos {emoji1} tem no desafio?",
                    "Conte todos os {label1}:"
                ],
                answer: "{count}",
                required_types: ["animal", "fruta", "objeto"],
                difficulty: 2,
                answer_type: "number"
            }
        ],

        // ══════════════════════════════════════════════════════════════════════
        // MUNDO — clima, natureza, espaço, estações
        // ══════════════════════════════════════════════════════════════════════
        mundo: [

            {
                id: "mundo_clima_item",
                texts: [
                    "Quando tem {entity1} lá fora, precisamos de um item especial.",
                    "O {entity1} {emoji1} pede que a gente use algo.",
                    "Com {entity1}, as pessoas se preparam de um jeito especial.",
                    "O {emoji1} chegou! O que você vai precisar usar?"
                ],
                questions: [
                    "O que precisamos quando tem {entity1}?",
                    "Com {entity1}, usamos o quê?",
                    "Que item é necessário quando há {entity1}?"
                ],
                answer: "{attribute1.item_needed}",
                required_types: ["clima"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "mundo_clima_sound",
                texts: [
                    "O {entity1} tem um som muito característico.",
                    "Você já ouviu o barulho do {entity1}?",
                    "Olhe o {emoji1}! Ele faz um som especial.",
                    "Quando o {entity1} acontece, dá pra ouvir: {attribute1.sound}."
                ],
                questions: [
                    "Que som o {entity1} faz?",
                    "Como soa o {emoji1}?",
                    "O barulho do {entity1} é…?"
                ],
                answer: "{attribute1.sound}",
                required_types: ["clima"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "mundo_natureza_importancia",
                texts: [
                    "O {entity1} é muito importante para o planeta.",
                    "A natureza tem o {entity1} — e ele é essencial porque {attribute1.importance}.",
                    "Você sabia que o {entity1} {emoji1} {attribute1.importance}?",
                    "O {entity1} cuida de nós porque {attribute1.importance}."
                ],
                questions: [
                    "Por que o {entity1} é importante?",
                    "O {entity1} nos ajuda como?",
                    "Qual é a importância do {emoji1}?"
                ],
                answer: "{attribute1.importance}",
                required_types: ["natureza"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "mundo_natureza_agua",
                texts: [
                    "No {entity1}, existe um tipo especial de água.",
                    "Olhe o {emoji1}: que tipo de água ele tem?",
                    "O {entity1} é cheio de vida graças à sua água.",
                    "Nem toda água é igual! O {entity1} tem água {attribute1.water_type}."
                ],
                questions: [
                    "Que tipo de água tem no {entity1}?",
                    "A água do {entity1} é…?",
                    "Como é a água do {emoji1}?"
                ],
                answer: "{attribute1.water_type}",
                required_types: ["natureza"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "mundo_espaco_periodo",
                texts: [
                    "No céu existe o {entity1} {emoji1}.",
                    "Você já olhou para o céu e viu o {entity1}?",
                    "O {entity1} aparece em um momento especial do dia.",
                    "Olhe o {emoji1}: em que período ele aparece no céu?"
                ],
                questions: [
                    "Quando podemos ver o {entity1}?",
                    "O {entity1} aparece de dia ou de noite?",
                    "Em que momento o {emoji1} fica visível?"
                ],
                answer: "{attribute1.period}",
                required_types: ["corpo_celeste"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "mundo_espaco_feature",
                texts: [
                    "O {entity1} {emoji1} é incrível!",
                    "No espaço existe o {entity1}. Sabe o que é especial nele?",
                    "Você conhece o {entity1}? Ele tem uma característica única.",
                    "O {entity1} {emoji1} tem algo especial: {attribute1.feature}."
                ],
                questions: [
                    "O que é especial no {entity1}?",
                    "Qual é a característica do {emoji1}?",
                    "O que o {entity1} tem de único?"
                ],
                answer: "{attribute1.feature}",
                required_types: ["corpo_celeste"],
                difficulty: 2,
                answer_type: "attribute"
            },

            {
                id: "mundo_estacao_natureza",
                texts: [
                    "No {entity1}, a natureza muda bastante.",
                    "Você reconhece esta estação? {emoji1}",
                    "O {entity1} é uma época do ano muito especial.",
                    "Quando chega o {entity1}, a natureza mostra {attribute1.nature}."
                ],
                questions: [
                    "O que acontece com a natureza no {entity1}?",
                    "Como fica a natureza durante o {entity1}?",
                    "O {emoji1} traz qual mudança na natureza?"
                ],
                answer: "{attribute1.nature}",
                required_types: ["estacao"],
                difficulty: 1,
                answer_type: "attribute"
            },

            {
                id: "mundo_estacao_atividade",
                texts: [
                    "Cada estação tem uma atividade favorita.",
                    "No {entity1}, as pessoas adoram {attribute1.activity}.",
                    "O {emoji1} chegou! Hora de {attribute1.activity}.",
                    "Sabe o que é típico fazer no {entity1}?"
                ],
                questions: [
                    "O que as pessoas fazem no {entity1}?",
                    "Qual atividade é típica do {entity1}?",
                    "O que costumamos fazer durante o {emoji1}?"
                ],
                answer: "{attribute1.activity}",
                required_types: ["estacao"],
                difficulty: 1,
                answer_type: "attribute"
            }
        ]
    }
};
