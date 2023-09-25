import getRandomInt from './getRandom'
import checkPartyHp from './checkPartyHp';

export default function odnomeroSkillSetSwitch(currentSkill, enenyParty) {
    switch (currentSkill) {
        case "кусь":
            console.log(currentSkill);
            shredingerAttack(enenyParty);
            break;
        default:
            alert("Что-то сломалось в навыках odnomeroSkillSetSwitch");
    }
}



function shredingerAttack(enenyParty) {
    enenyParty.forEach((enemyCat) => {
        if (enemyCat.isAlive) {
            enemyCat.hp = enemyCat.hp - 20;
            checkPartyHp(enemyCat);
        }
    })
}