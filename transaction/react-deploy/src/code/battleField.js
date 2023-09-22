import React, { useState, useEffect } from "react";
import RenderBattleField from "./renderBattleField";
import matadorSkillsetSwitch from "./skillsSets/matadorSkillsetSwitch";
import getRandomInt from "./skillsSets/getRandom";
import Matador from "./Objects/matador.js";
import currentParty from "./Objects/currentParty.js";

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
        if (currentTurn.isEnemy === true) {
            currentTurn.turns.forEach((item, index) => {
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
            });
        } else {
            console.log("ход игрока");
        }
    }, [currentTurn]);

    function shredingerAttack() {
        Matador[0].hp = Matador[0].hp - 10;
    }

    function useSkill() {
        console.log("скилл игрока");
        shredingerAttack();
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
