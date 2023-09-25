import React, { useState, useEffect } from 'react';
import CustomField from './customField'
import BattleField from "./battleField"
import GameOver from './gameOver'

const myCatCell = { 'isEmpty': false, "isMyCat": true };
const itemCell = { 'isEmpty': false, "isItem": true };
const goToFirstMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 1", 'name': 'firstMap' };
const goToSecondMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 2", 'name': 'SecondMap' };
const goToThirdMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 3", 'name': 'ThirdMap' };

const MataCatoDor = { 'isEmpty': false, 'isEnemy': true, 'name': 'Вихреспинка' };
const easyCat = { 'isEmpty': false, 'isEnemy': true, 'name': '???' };

let firstMap = [
    [null, myCatCell, itemCell, itemCell, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, itemCell, null, null, null, null],
    [null, MataCatoDor, null, null, null, null, null, null, null, null],
    [null, null, null, null, itemCell, null, null, null, null, null],
    [null, null, null, itemCell, null, null, null, null, null, goToSecondMap]
]


let SecondMap = [
    [null, myCatCell, itemCell],
    [itemCell, null, itemCell],
    [null, null, null],
    [null, null, goToFirstMap],
    [null, null, null],
    [null, goToThirdMap, null],
]

let ThirdMap = [
    [null, myCatCell, null],
    [null, null, itemCell],
    [null, null, null],
    [easyCat, null, goToFirstMap],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


export default function Map() {
    const currentDate = new Date().getHours();
    const [currentDayState, setDayState] = useState((currentDate < 12 || currentDate > 1) ? 'day' : 'night');
    const [currentMap, setCurrentMap] = useState(firstMap);
    const [currentMode, setCurrentMode] = useState("Map");
    const [currentEnemy, setCurrentEnemy] = useState();
   

    useEffect(() => { console.log(currentMode) });

    function renewMap(newMapValue) {
        switch (newMapValue) {
            case 'firstMap':
                setCurrentMap(firstMap);
                break;
            case 'SecondMap':
                setCurrentMap(SecondMap);
                break;
            case 'ThirdMap':
                setCurrentMap(ThirdMap);
                break;
            default:
                setCurrentMap(firstMap);
        }
    }
    function renewMode(mode, enemyName) {
        setCurrentMode(mode);
        setCurrentEnemy(enemyName);
    }

    return (
        <React.Fragment>
            {currentMode === "Map" && <CustomField currentDate={currentDayState} currentMap={currentMap} myCatCell={myCatCell} renewMap={renewMap} renewMode={renewMode} />}
            {currentMode === "Battle" && <BattleField currentEnemy={currentEnemy} renewMode={renewMode}></BattleField>}
            {currentMode === "GameOver" && <GameOver text='Вы проиграли'></GameOver>}
            {currentMode === "WinBattle" && <GameOver text='Все враги убиты'></GameOver>}
        </React.Fragment>

    );
}