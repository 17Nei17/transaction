import React, { useState, useEffect } from "react";
import RenderBattleField from "./renderBattleField";
import matadorSkillsetSwitch from "./skillsSets/matadorSkillsetSwitch";
import getRandomInt from "./skillsSets/getRandom";
import Matador from "./Objects/matador.js";
import currentParty from "./Objects/currentParty.js";
import odnomeroSkillSetSwitch from './skillsSets/odnomeroSkillSetSwitch.js'
import shrodingerSkillSetSwitch from './skillsSets/shrodingerSkillSetSwitch.js'

export default function BattleField(props) {
    const currentEnemy = props.currentEnemy;
    const [currentTurn, setCurrentTurn] = useState(
        Matador.concat(currentParty)[0]
    );
    const [activeTurnIndex, setActiveTurnIndex] = useState(0);
    const [turnHistory, setTurnInHistory] = useState(
        Matador.concat(currentParty)
    );

    useEffect(() => { });

    useEffect(() => {
        console.log(Matador)
        if (currentTurn.isEnemy === true) {
            let enemyPartyAlive = false;
            Matador.forEach((enemyCat, index) => {
                if (enemyCat.isAlive) {
                    enemyPartyAlive = true;
                }
            })
            currentTurn.turns.forEach((item, index) => {
                if (currentTurn.isAlive) {
                    // ход живого противника
                    setTimeout(function () {
                        setActiveTurnIndex(index);
                        matadorSkillsetSwitch(
                            currentTurn.skills[getRandomInt(currentTurn.skills.length - 1)],
                            currentParty,
                            currentTurn
                        );
                        if (index === currentTurn.turns.length - 1) {
                            changeTurn();
                        }
                    }, index * 1000);
                } else {
                    // мертвые пробегают хода в массиве но ничего не делают
                    setActiveTurnIndex(index);
                    if (index === currentTurn.turns.length - 1) {
                        changeTurn();
                    }
                }
            });
            if (!enemyPartyAlive) {
                console.log("все враги умерли")
                props.renewMode('WinBattle', '')
            }
        } else {
            console.log("ход игрока");
            let isPartyAlive = false;
            currentParty.forEach((currentCat, index) => {
                if (currentCat.isAlive) {
                    isPartyAlive = true;
                }
            })
            if (isPartyAlive) {
                setActiveTurnIndex(0);
                if (!currentTurn.isAlive) {
                    changeTurn();
                }
            } else {
                console.log("Все союзники умерли")
                props.renewMode('GameOver', '')
            }
        }
    }, [currentTurn]);


    function useSkill(skill, enemyName) {
        console.log(enemyName)
        //todo enemyName это выбранный враг по которому ударить скиллом. Нужно написать выбор
        console.log("скилл игрока");
        switch (currentTurn.name) {
            case "Одномеро":
                odnomeroSkillSetSwitch(skill, Matador);
                break;
            case "Шредингер":
                shrodingerSkillSetSwitch(skill, Matador);
                break;
            default:
                alert("Что-то сломалось в выборе скилла игрока");
        }
        changeTurn();
    }

    function changeTurn() {
        let newArr = turnHistory;
        newArr.push(turnHistory[0]);
        newArr.shift();
        setTurnInHistory(newArr);
        setCurrentTurn(newArr[0]);
    }

    return (
        <RenderBattleField
            currentEnemy={currentEnemy}
            enemyObj={Matador}
            currentTurn={currentTurn}
            currentParty={currentParty}
            activeTurnIndex={activeTurnIndex}
            useSkill={useSkill}
        ></RenderBattleField>
    );
}
