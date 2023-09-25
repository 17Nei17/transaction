let redCapote = { name: 'кусь', aoe: true, damage: 10, castOnAlly: false };
let andalucia = { name: 'andalucia', aoe: false, damage: 10, castOnAlly: false };
let mazan = { name: 'mazan', aoe: false, damage: 10, castOnAlly: false };

let currentParty = [
    {
        isEnemy: false,
        turns: [1],
        image: "asd",
        name: "Шредингер",
        hp: 300,
        skills: [redCapote, andalucia, mazan],
        weakness: ["wind"],
        isAlive: true,
    },
    // {
    //     isEnemy: false,
    //     turns: [1],
    //     image: "asd",
    //     name: "Одномеро",
    //     hp: 200,
    //     // skills: [" Одномероатака", "кусь"],
    //     weakness: ["wind"],
    //     isAlive: true,
    // },
];

export default currentParty;
