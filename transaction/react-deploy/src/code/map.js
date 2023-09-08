import React, { useState } from 'react';
import CustomField from './customField'


const myCatCell = { 'isEmpty': false, "isMyCat": true };
const itemCell = { 'isEmpty': false, "isItem": true };
const goToFirstMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 1", 'name': 'firstMap' };
const goToSecondMap = { 'isEmpty': false, 'isJump': true, text: "перейти на локацию 2", 'name': 'SecondMap' };
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
    [null, null, null],
]


export default function Map() {
    console.log("map");
    const [currentMap, setCurrentMap] = useState(firstMap);
    function renewMap(newMapValue) {
        switch (newMapValue) {
            case 'firstMap':
                setCurrentMap(firstMap);
                break;
            case 'SecondMap':
                console.log(currentMap)
                setCurrentMap(SecondMap);
                console.log(currentMap)
                break;
            default:
                setCurrentMap(firstMap);
        }
    }

    return (
        <CustomField currentMap={currentMap} myCatCell={myCatCell} renewMap={renewMap} />
    );
}