import enemy from '../../images/enemy.jpg'

let redCapote = { name: 'redCapote', aoe: false, damage: 10, castOnAlly: false };
let andalucia = { name: 'andalucia', aoe: false, damage: 10, castOnAlly: false };
let mazan = { name: 'mazan', aoe: false, damage: 10, castOnAlly: false };

let easyEnemy = [
    {
        isEnemy: true,
        image: enemy,
        name: "???",
        hp: 50,
        skills: [
            redCapote, andalucia, mazan
        ],
        turns: [1, 2, 3, 4],
        weakness: [],
        isAlive: true,
    },
];

export default easyEnemy;