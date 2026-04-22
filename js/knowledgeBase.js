// Base de Conhecimento (Entidades)
const KNOWLEDGE_BASE = {
    entities: [
        // ANIMAIS
        {
            id: "gato",
            label: "Gato",
            type: "animal",
            emoji: "🐱",
            image: "https://images.unsplash.com/photo-1514888286872-01d6d89f4c1b?auto=format&fit=crop&w=300&q=80",
            attributes: { sound: "miau", habitat: "casa", color: "laranja", food: "leite" },
            relations: { is_a: "animal", lives_in: "casa" }
        },
        {
            id: "cachorro",
            label: "Cachorro",
            type: "animal",
            emoji: "🐶",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
            attributes: { sound: "au au", habitat: "casa", color: "marrom", food: "ração" },
            relations: { is_a: "animal", lives_in: "casa" }
        },
        {
            id: "leao",
            label: "Leão",
            type: "animal",
            emoji: "🦁",
            image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=300&q=80",
            attributes: { sound: "rugido", habitat: "savana", color: "amarelo", food: "carne" },
            relations: { is_a: "animal", lives_in: "selva" }
        },
        {
            id: "elefante",
            label: "Elefante",
            type: "animal",
            emoji: "🐘",
            image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&q=80",
            attributes: { sound: "bramido", habitat: "savana", color: "cinza", food: "plantas" },
            relations: { is_a: "animal" }
        },
        {
            id: "girafa",
            label: "Girafa",
            type: "animal",
            emoji: "🦒",
            image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=300&q=80",
            attributes: { habitat: "savana", color: "amarelo e marrom", food: "folhas" },
            relations: { is_a: "animal" }
        },
        {
            id: "macaco",
            label: "Macaco",
            type: "animal",
            emoji: "🐒",
            image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=300&q=80",
            attributes: { sound: "grito", habitat: "selva", color: "marrom", food: "banana" },
            relations: { is_a: "animal" }
        },

        // FRUTAS
        {
            id: "maca",
            label: "Maçã",
            type: "fruta",
            emoji: "🍎",
            image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=300&q=80",
            attributes: { taste: "doce", color: "vermelha", format: "redonda" },
            relations: { is_a: "fruta" }
        },
        {
            id: "banana",
            label: "Banana",
            type: "fruta",
            emoji: "🍌",
            image: "https://images.unsplash.com/photo-1571771894821-ad9958a35c47?auto=format&fit=crop&w=300&q=80",
            attributes: { taste: "doce", color: "amarela", format: "comprida" },
            relations: { is_a: "fruta" }
        },
        {
            id: "uva",
            label: "Uva",
            type: "fruta",
            emoji: "🍇",
            image: "https://images.unsplash.com/photo-1537640538966-79f369b41e8f?auto=format&fit=crop&w=300&q=80",
            attributes: { taste: "doce", color: "roxa", format: "pequena" },
            relations: { is_a: "fruta" }
        },
        {
            id: "melancia",
            label: "Melancia",
            type: "fruta",
            emoji: "🍉",
            image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80",
            attributes: { taste: "doce", color: "verde e vermelha", format: "grande" },
            relations: { is_a: "fruta" }
        },
        {
            id: "laranja",
            label: "Laranja",
            type: "fruta",
            emoji: "🍊",
            image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=300&q=80",
            attributes: { taste: "azedinha", color: "laranja", format: "redonda" },
            relations: { is_a: "fruta" }
        },

        // OBJETOS
        {
            id: "mesa",
            label: "Mesa",
            type: "objeto",
            emoji: "🪑",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=300&q=80",
            attributes: { material: "madeira", location: "sala", color: "marrom" },
            relations: { is_a: "móvel" }
        },
        {
            id: "cama",
            label: "Cama",
            type: "objeto",
            emoji: "🛏️",
            image: "https://images.unsplash.com/photo-1505691722718-4684375a9732?auto=format&fit=crop&w=300&q=80",
            attributes: { material: "tecido", location: "quarto", color: "branco" },
            relations: { is_a: "móvel" }
        },
        {
            id: "carro",
            label: "Carro",
            type: "objeto",
            emoji: "🚗",
            image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=300&q=80",
            attributes: { speed: "rápido", wheels: 4, color: "preto" },
            relations: { is_a: "veículo" }
        },
        {
            id: "bicicleta",
            label: "Bicicleta",
            type: "objeto",
            emoji: "🚲",
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=300&q=80",
            attributes: { speed: "moderada", wheels: 2, color: "azul" },
            relations: { is_a: "veículo" }
        },
        {
            id: "computador",
            label: "Computador",
            type: "objeto",
            emoji: "💻",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80",
            attributes: { location: "escritório", color: "prata" },
            relations: { is_a: "eletrônico" }
        }
    ]
};
