import checkPartyHp from './checkPartyHp';


// let redCapote = { name: 'Удар лапой', aoe: false, damage: 10, castOnAlly: false, type: 'phys' };
// let andalucia = { name: 'andalucia', aoe: true, damage: 20, castOnAlly: false, type: 'phys' };
// let mazan = { name: 'mazan', aoe: false, damage: 20, castOnAlly: false, type: 'wind' };

export default function shrodingerSkillSetSwitch(currentSkill, enenyParty, enemyName, setAllyExtraTurn) {
    switch (currentSkill.name) {
        case "Удар лапой":
            console.log(currentSkill);
            shredingerAttackPaw(enenyParty, enemyName, currentSkill);
            break;
        case "andalucia":
            console.log(currentSkill);
            shredingerAndalucia(enenyParty, enemyName, currentSkill);
            break;
        case "mazan":
            console.log(currentSkill);
            // shredingerAttack(enenyParty);
            shredingerMazan(enenyParty, enemyName, currentSkill, setAllyExtraTurn);
            break;
        default:
            alert("Что-то сломалось в навыках shrodingerSkillSetSwitch");
    }
}


function shredingerAttackPaw(enenyParty, enemyName, currentSkill) {
    enenyParty.forEach((enemyCat) => {
        if (enemyCat.isAlive && enemyCat.name === enemyName) {
            enemyCat.hp = enemyCat.hp - currentSkill.damage;
            checkPartyHp(enemyCat);
        }
    })
}


function shredingerAndalucia(enenyParty, enemyName, currentSkill) {
    enenyParty.forEach((enemyCat) => {
        if (enemyCat.isAlive) {
            enemyCat.hp = enemyCat.hp - currentSkill.damage;
            checkPartyHp(enemyCat);
        }
    })
}


function shredingerMazan(enenyParty, enemyName, currentSkill, setAllyExtraTurn) {
    enenyParty.forEach((enemyCat) => {
        if (enemyCat.isAlive && enemyCat.name === enemyName) {
            if (enemyCat.weakness.includes("wind")) {
                enemyCat.hp = enemyCat.hp - (currentSkill.damage + 10);
                setAllyExtraTurn(true);
            } else {
                enemyCat.hp = enemyCat.hp - currentSkill.damage;
            }

            checkPartyHp(enemyCat);
        }
    })
}