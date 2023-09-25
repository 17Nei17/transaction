import React, { useState, useEffect } from "react";
import redPaw from '../images/redPaw.png'
import greenPaw from '../images/greenPaw.png'


export default function RenderBattleField(props) {
    const [activeSkill, setActiveSkill] = useState();

    useEffect(() => { }, [activeSkill]);

    function createEnemies() {
        if (props.currentEnemy === "Вихреспинка") {
            const enemyLists = props.enemyObj.map((enemyItem, id) => {
                return (
                    <div className={enemyItem.isAlive ? 'enemy-cat-wrap alive ' : 'enemy-cat-wrap death '}>
                        <div
                            className={props.currentTurn.name === enemyItem.name ? 'active' : ''}
                            id={enemyItem.name}
                        >
                            <div className="enemyHP">{enemyItem.hp}</div>
                            <div className="image">
                                <img src={enemyItem.image} />
                            </div>
                        </div>
                    </div>

                );
            });
            return enemyLists;
        }
        if (props.currentEnemy === "???") {
            const enemyLists = props.enemyObj.map((enemyItem, id) => {
                return (
                    <div className={enemyItem.isAlive ? 'enemy-cat-wrap alive ' : 'enemy-cat-wrap death '}>
                        <div
                            className={props.currentTurn.name === enemyItem.name ? 'active' : ''}
                            id={enemyItem.name}
                        >
                            <div className="enemyHP">{enemyItem.hp}</div>
                            <div className="image">
                                <img src={enemyItem.image} />
                            </div>
                        </div>
                    </div>

                );
            });
            return enemyLists;
        }
    }

    function createAllies() {
        const allyList = props.currentParty.map((allyItem, id) => {
            return (
                <div className={
                    allyItem.isAlive ? "ally-cat-wrap alive" : "ally-cat-wrap death"
                }>
                    <div
                        className={props.currentTurn.name === allyItem.name ? "active" : ""
                        }
                        id={allyItem.name}
                    >
                        <div className="allyHP">{allyItem.hp}</div>
                        <div className="image"><img src={allyItem.image} /></div>
                    </div>
                </div>

            );
        });
        return allyList;
    }

    function createMenu() {
        const skillList = props.currentParty.map((allyItem, id) => {
            if (allyItem.name === props.currentTurn.name) {
                return allyItem.skills.map((skill, id) => {
                    return <div onClick={() => { selectSkill(skill) }}>{skill.name}</div>;
                });
            }
        });
        return skillList;
    }

    function selectSkill(skill) {
        if (skill.aoe) {
            props.useSkill(skill, 'aoe');
        } else {
            setActiveSkill(skill)
        }
    }

    function renderSelectEnemy() {
        if (activeSkill) {
            let enemyCats = props.enemyObj.map(enemyCat => {
                if (enemyCat.isAlive) {
                    return <div onClick={() => { selectEnemyCat(enemyCat.name, activeSkill) }}>{enemyCat.name}</div>;
                }
            });
            return enemyCats;
        }
    }

    function selectEnemyCat(name, activeSkill) {
        props.useSkill(activeSkill, name);
        setActiveSkill();
    }

    function createRightMenu() {
        const rightMenuList = props.currentParty.map((allyItem, id) => {
            return (
                <div className={allyItem.isAlive ? 'ally-stats-item alive' : 'ally-stats-item death'} id={id}>
                    <div>{allyItem.name}</div>
                    <div className="allyHP">{allyItem.hp}</div>
                    <div className="image"><img src={allyItem.image} /></div>
                </div>
            );
        });
        return rightMenuList;
    }

    function initTurns() {
        const turnHistoryHTML = props.currentTurn.turns.map((i, index) => {
            return (
                <div
                    className={
                        props.currentTurn.isEnemy
                            ? "redIcon turn-icon"
                            : "greenIcon turn-icon"
                    }
                >
                    <div className={index === props.activeTurnIndex ? "active turn-icon" : "turn-icon"}>
                        <img src={props.currentTurn.isEnemy ? redPaw : greenPaw} />
                    </div>
                </div>
            );
        });
        return turnHistoryHTML;
    }

    return (
        <React.Fragment>
            <div className="battle-field">
                <div className="ally-stats-wrap">{createRightMenu()}</div>
                <div className="turn-icon-wrap">{initTurns()}</div>
                <div className="enemy-block">{createEnemies()}</div>
                <div className="botton-line">
                    <div className="menu-wrap">{createMenu()}</div>
                    <div className="menu-wrap">{renderSelectEnemy()}</div>
                    <div className="ally-block">{createAllies()}</div>
                </div>
            </div>
        </React.Fragment>
    );
}
