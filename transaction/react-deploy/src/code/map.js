import React, { useState } from 'react';
import CustomField from './customField'


const myCatCell = { 'isEmpty': false, "isMyCat": true };
const itemCell = { 'isEmpty': false, "isItem": true };
const goToFirstMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 1", 'name': 'firstMap' };
const goToSecondMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 2", 'name': 'SecondMap' };
const goToThirdMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 3", 'name': 'ThirdMap' };

let firstMap = [
    [null, myCatCell, itemCell, itemCell, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, itemCell, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
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
    [null, null, goToFirstMap],
    [null, null, null],
    [null, null, null],
]


export default function Map() {
    const [currentMap, setCurrentMap] = useState(firstMap);
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

    return (
        <CustomField currentMap={currentMap} myCatCell={myCatCell} renewMap={renewMap} />
    );
}