import React, { useState, useEffect } from 'react';
import myCat from '../myCat.png'
import itemImage from '../item.png'




export default function CustomField(props) {

  useEffect(() => { setArrState(props.currentMap) }, props.currentMap);
  const [arrState, setArrState] = useState(props.currentMap);

  function createItems() {
    const listItems = arrState.map((number, id) => {
      return <div className="line-item" id={id}>
        {number.map((item, itemId) => {
          return <div onClick={() => handleCellClick(id, itemId)} className="cell-item" id={itemId}>{checkCellAndRender(item)}</div>
        })}
      </div>
    });
    return listItems;
  }

  function checkCellAndRender(item) {
    if (item) {
      if (item.isMyCat) {
        return <img src={myCat} />;
      }
      if (item.isItem) {
        return <img src={itemImage} />;
      }
      if (item.isJump) {
        return <div>{item.text}</div>;
      }
    } else return null;
  }

  function handleCellClick(clickRowId, clickCellId) {
    if (arrState[clickRowId][clickCellId]) {
      if (!arrState[clickRowId][clickCellId].isEmpty) {
        if(arrState[clickRowId][clickCellId].isJump){
          props.renewMap(arrState[clickRowId][clickCellId].name);
        }
        
        return;
      }
    }
    cleanOldCat(arrState, props.myCatCell);
    updateElement(clickRowId, clickCellId, props.myCatCell);

  }

  function cleanOldCat(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      const columnIndex = matrix[i].findIndex(element => element === target);
      if (columnIndex !== -1) {
        updateElement(i, columnIndex, null);
      }
    }
  }

  const updateElement = (rowIndex, columnIndex, newValue) => {
    const updatedMatrix = [...arrState];
    updatedMatrix[rowIndex][columnIndex] = newValue;
    setArrState(updatedMatrix);
  };

  return (
    <div className="custom-field">{createItems(arrState)}</div>
  );
}