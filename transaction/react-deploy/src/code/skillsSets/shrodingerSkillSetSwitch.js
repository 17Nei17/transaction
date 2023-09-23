import getRandomInt from './getRandom'
import checkPartyHp from './checkPartyHp';

export default function shrodingerSkillSetSwitch(currentSkill, enenyParty) {
    switch (currentSkill) {
        case "кусь":
            console.log(currentSkill);
            shredingerAttack(enenyParty);
            break;
        default:
            alert("Что-то сломалось в навыках matadorSkillsetSwitch");
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