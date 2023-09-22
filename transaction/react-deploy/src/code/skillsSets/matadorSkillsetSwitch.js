import getRandomInt from './getRandom'
export default function matadorSkillsetSwitch(
    currentSkill,
    currentParty,
    currentTurn
) {
    switch (currentSkill) {
        case "redCapote":
            console.log("враг кастует redCapote");
            // mazanSkillCast();
            break;
        case "andalucia":
            console.log("враг кастует andalucia");
            // mazanSkillCast();
            break;
        case "mazan":
            console.log("враг кастует mazan");
            mazanSkillCast(currentParty, currentTurn);
            break;
        case "focus":
            console.log("враг кастует focus");
            // mazanSkillCast();
            break;
        case "taunt":
            console.log("враг кастует taunt");
            // mazanSkillCast();
            break;
        case "decunda":
            console.log("враг кастует decunda");
            // mazanSkillCast();
            break;
        default:
            alert("Что-то сломалось в навыках matadorSkillsetSwitch");
    }
}

function mazanSkillCast(currentParty, currentTurn) {
    currentParty.forEach((partyCat) => {
        if (partyCat.weakness.includes("wind")) {
            partyCat.hp = partyCat.hp - 20;
            matadorSkillsetSwitch(
                currentTurn.skills[getRandomInt(currentTurn.skills.length - 1)],
                currentParty,
                currentTurn
            );
        } else {
            partyCat.hp = partyCat.hp - 10;
        }
    });
}


