import React, { useState, useEffect } from 'react';

const Matador = [
    {
        isEnemy: true,
        image: 'asd',
        name: 'Matador',
        hp: 246,
        skills: ['redCapote', 'andalucia', 'mazan', 'focus', 'taunt', 'decunda'],
        turns: [1, 2],
        weakness: []
    }
]

const currentParty = [
    {
        isEnemy: false,
        turns: [1],
        image: 'asd',
        name: 'Шредингер',
        hp: 112,
        skills: ['атака', 'кусь'],
        weakness: ['wind']
    }
]

export default function BattleField(props) {

    const [currentEnemy, setCurrentEnemy] = useState(props.currentEnemy);
    const [allCatsArr, setallCatsArr] = useState(Matador.concat(currentParty));
    const [currentTurn, setCurrentTurn] = useState(allCatsArr[0]);
    const [turnHistory, setTurnInHistory] = useState(Matador.concat(currentParty));

    useEffect(() => { });

    function mazanSkillCast() {
        currentParty.forEach((partyCat) => {
            if (partyCat.weakness.includes("wind")) {
                partyCat.hp = partyCat.hp - 20;
                matadorSkillsetSwitch(currentTurn.skills[getRandomInt(currentTurn.skills.length - 1)])
            } else {
                partyCat.hp = partyCat.hp - 10;
            }
        })
    }

    function shredingerAttack() {
        Matador[0].hp = Matador[0].hp - 10;
    }


    function createEnemies() {
        if (currentEnemy === "Matador") {
            const enemyLists = Matador.map((enemyItem, id) => {
                return <div className={currentTurn.name === enemyItem.name ? "enemy-cat-wrap active" : "enemy-cat-wrap"} id={enemyItem.name}>
                    <div className="enemyHP">{enemyItem.hp}</div>
                    <div className="image">{enemyItem.image}</div>
                </div>
            });
            return enemyLists;
        }
    }

    function createAllies() {
        const allyList = currentParty.map((allyItem, id) => {
            return <div className={currentTurn.name === allyItem.name ? "ally-cat-wrap active" : "ally-cat-wrap"} id={allyItem.name}>
                <div className="allyHP">{allyItem.hp}</div>
                <div className="image">{allyItem.image}</div>
            </div>
        });
        return allyList;
    }

    function createMenu() {
        const skillList = currentParty.map((allyItem, id) => {
            if (allyItem.name === currentTurn.name) {
                return allyItem.skills.map((skill, id) => {
                    return <div onClick={useSkill}>{skill}</div>
                })
            }
        });
        return skillList;
    }
    function createRightMenu() {
        const leftMenuList = currentParty.map((allyItem, id) => {
            return <div className="ally-stats-item" id={id} >
                <div>{allyItem.name}</div>
                <div className="allyHP">{allyItem.hp}</div>
                <div className="image">{allyItem.image}</div>
            </div>
        });
        return leftMenuList;
    }
    function initTurns() {
        const turnHistoryHTML = currentTurn.turns.map((i, id) => {
            return <div className={currentTurn.isEnemy ? "redIcon turn-icon" : "greenIcon turn-icon"}></div>
        })

        return turnHistoryHTML;
    }

    function useSkill() {
        console.log("скилл игрока");
        shredingerAttack();
        changeTurn();
    }

    if (currentTurn.isEnemy === true) {
        currentTurn.turns.forEach((item, index) => {
            matadorSkillsetSwitch(currentTurn.skills[getRandomInt(currentTurn.skills.length - 1)])
            if (index == currentTurn.turns.length - 1) {
                changeTurn();
            }
        })
    } else {
        console.log('ход игрока');
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    function matadorSkillsetSwitch(currentSkill) {
        switch (currentSkill) {
            case 'redCapote':
                console.log("враг кастует redCapote");
                // mazanSkillCast();
                break;
            case 'andalucia':
                console.log("враг кастует andalucia");
                // mazanSkillCast();
                break;
            case 'mazan':
                console.log("враг кастует mazan");
                mazanSkillCast();
                break;
            case 'focus':
                console.log("враг кастует focus");
                // mazanSkillCast();
                break;
            case 'taunt':
                console.log("враг кастует taunt");
                // mazanSkillCast();
                break;
            case 'decunda':
                console.log("враг кастует decunda");
                // mazanSkillCast();
                break;
            default:
                alert("Что-то сломалось в навыках matadorSkillsetSwitch");
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
        <React.Fragment>
            <div className="battle-field">
                <div className="ally-stats-wrap">
                    {createRightMenu()}
                </div>
                <div className="turn-icon-wrap">
                    {initTurns()}
                </div>
                <div className="enemy-block">
                    {createEnemies()}
                </div>
                <div className='botton-line'>
                    <div className='menu-wrap'>
                        {createMenu()}
                    </div>
                    <div className="ally-block">
                        {createAllies()}
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}