import React, { useState, useEffect } from "react";
import RenderBattleField from "./renderBattleField";
import matadorSkillsetSwitch from "./skillsSets/matadorSkillsetSwitch";
import getRandomInt from "./skillsSets/getRandom";
import Matador from "./Objects/matador.js";
import easyEnemy from './Objects/easyEnemy.js'
import currentParty from "./Objects/currentParty.js";
import odnomeroSkillSetSwitch from './skillsSets/odnomeroSkillSetSwitch.js'
import shrodingerSkillSetSwitch from './skillsSets/shrodingerSkillSetSwitch.js'



export default function BattleField(props) {
    const currentEnemyName = props.currentEnemy;
    let currernEnemyObj = {};

    switch (currentEnemyName) {
        case "Вихреспинка":
            currernEnemyObj = Matador;
            break;
        case "???":
            currernEnemyObj = easyEnemy;
            break;
        default:
            alert("Что-то сломалось в выборе противника");
    }

    const [currentTurn, setCurrentTurn] = useState(
        currernEnemyObj.concat(currentParty)[0]
    );
    const [allyExtraTurn, setAllyExtraTurn] = useState(false);
    const [activeTurnIndex, setActiveTurnIndex] = useState(0);
    const [turnHistory, setTurnInHistory] = useState(
        currernEnemyObj.concat(currentParty)
    );

    // useEffect(() => {


    // }, []);

    useEffect(() => {
        if (currentTurn.isEnemy === true) {
            let enemyPartyAlive = false;
            currernEnemyObj.forEach((enemyCat, index) => {
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

    }, [currentTurn, allyExtraTurn]);


    function useSkill(skill, enemyName) {
        switchAllyTurn(skill, enemyName);
        changeTurn();
    }

    function switchAllyTurn(skill, enemyName) {
        switch (currentTurn.name) {
            case "Одномеро":
                odnomeroSkillSetSwitch(skill, currernEnemyObj, enemyName, setAllyExtraTurn);
                break;
            case "Шредингер":
                shrodingerSkillSetSwitch(skill, currernEnemyObj, enemyName, setAllyExtraTurn);
                break;
            default:
                alert("Что-то сломалось в выборе скилла игрока");
        }
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
            currentEnemy={currentEnemyName}
            enemyObj={currernEnemyObj}
            currentTurn={currentTurn}
            currentParty={currentParty}
            activeTurnIndex={activeTurnIndex}
            useSkill={useSkill}
        ></RenderBattleField>
    );
}
