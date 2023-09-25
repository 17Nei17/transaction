import getRandomInt from './getRandom'
import checkPartyHp from './checkPartyHp';

export default function matadorSkillsetSwitch(
    currentSkill,
    currentParty,
    currentTurn
) {
    switch (currentSkill.name) {
        case "redCapote":
            console.log("враг кастует redCapote");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "andalucia":
            console.log("враг кастует andalucia");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "mazan":
            console.log("враг кастует mazan");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "focus":
            console.log("враг кастует focus");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "taunt":
            console.log("враг кастует taunt");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "decunda":
            console.log("враг кастует decunda");
            mazanSkillCast(currentParty, currentTurn);
            break;
        default:
            alert("Что-то сломалось в навыках matadorSkillsetSwitch");
    }
}

function mazanSkillCast(currentParty, currentTurn) {
    currentParty.forEach((partyCat) => {
        if(partyCat.isAlive){
            if (partyCat.weakness.includes("wind")) {
                partyCat.hp = partyCat.hp - 20;
                // matadorSkillsetSwitch(
                //     currentTurn.skills[getRandomInt(currentTurn.skills.length - 1)],
                //     currentParty,
                //     currentTurn
                // );
            } else {
                partyCat.hp = partyCat.hp - 10;
            }
            checkPartyHp(partyCat);
        }
       
    });
}
