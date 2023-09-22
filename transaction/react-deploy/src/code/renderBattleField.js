import React, { useState, useEffect } from "react";

export default function RenderBattleField(props) {
    function createEnemies() {
        if (props.currentEnemy === "Matador") {
            const enemyLists = props.enemyObj.map((enemyItem, id) => {
                return (
                    <div
                        className={
                            props.currentTurn.name === enemyItem.name
                                ? "enemy-cat-wrap active"
                                : "enemy-cat-wrap"
                        }
                        id={enemyItem.name}
                    >
                        <div className="enemyHP">{enemyItem.hp}</div>
                        <div className="image">{enemyItem.image}</div>
                    </div>
                );
            });
            return enemyLists;
        }
    }

    function createAllies() {
        const allyList = props.currentParty.map((allyItem, id) => {
            return (
                <div
                    className={
                        props.currentTurn.name === allyItem.name
                            ? "ally-cat-wrap active"
                            : "ally-cat-wrap"
                    }
                    id={allyItem.name}
                >
                    <div className="allyHP">{allyItem.hp}</div>
                    <div className="image">{allyItem.image}</div>
                </div>
            );
        });
        return allyList;
    }

    function createMenu() {
        const skillList = props.currentParty.map((allyItem, id) => {
            if (allyItem.name === props.currentTurn.name) {
                return allyItem.skills.map((skill, id) => {
                    return <div onClick={props.useSkill}>{skill}</div>;
                });
            }
        });
        return skillList;
    }

    function createRightMenu() {
        const leftMenuList = props.currentParty.map((allyItem, id) => {
            return (
                <div className="ally-stats-item" id={id}>
                    <div>{allyItem.name}</div>
                    <div className="allyHP">{allyItem.hp}</div>
                    <div className="image">{allyItem.image}</div>
                </div>
            );
        });
        return leftMenuList;
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
                    {index === props.activeTurnIndex ? "active" : ""}
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
                    <div className="ally-block">{createAllies()}</div>
                </div>
            </div>
        </React.Fragment>
    );
}
