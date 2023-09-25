let redCapote = { name: 'redCapote', aoe: false, damage: 10, castOnAlly: false };
let andalucia = { name: 'andalucia', aoe: false, damage: 10, castOnAlly: false };
let mazan = { name: 'mazan', aoe: false, damage: 10, castOnAlly: false };

let Matador = [
    {
        isEnemy: true,
        image: "asd",
        name: "Matador",
        hp: 20,
        skills: [
            redCapote, andalucia, mazan
        ],
        turns: [1, 2, 3, 4],
        weakness: [],
        isAlive: true,
    },
    {
        isEnemy: true,
        image: "asd2",
        name: "Саня",
        hp: 30,
        skills: [
            redCapote, andalucia, mazan
        ],
        turns: [1, 2, 3, 4],
        weakness: [],
        isAlive: true,
    },
];

export default Matador;
