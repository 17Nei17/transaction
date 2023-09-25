import smt from '../../images/smt.jpg'

let redCapote = { name: 'Удар лапой', aoe: false, damage: 10, castOnAlly: false, type: 'phys' };
let andalucia = { name: 'andalucia', aoe: true, damage: 20, castOnAlly: false, type: 'phys' };
let mazan = { name: 'mazan', aoe: false, damage: 20, castOnAlly: false, type: 'wind' };

let currentParty = [
    {
        isEnemy: false,
        turns: [1],
        image: smt,
        name: "Шредингер",
        hp: 300,
        skills: [redCapote, andalucia, mazan],
        weakness: ["fire", "electric"],
        strong: ["ice"],
        isAlive: true,
    },
];

export default currentParty;
