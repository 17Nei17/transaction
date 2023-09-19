import React, { useState, useEffect } from 'react';
import myCat from '../myCat.png'
import itemImage from '../item.png'
import mataCatoDor from "../mataCatoDor.png"


export default function CustomField(props) {

  useEffect(() => { setArrState(props.currentMap) }, props.currentMap);
  const [arrState, setArrState] = useState(props.currentMap);
  const [modalText, setModalText] = useState();
  const [isBattle, setBattle] = useState(false);

  useEffect(() => { startBattle() }, [isBattle]);

  function startBattle(){
    if(isBattle){
      props.renewMode("Battle" , "Matador");
    }
  }

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
      if (item.isEnemy) {
        return <img src={mataCatoDor} />;
      }
      if (item.isJump) {
        return <div>{item.text}</div>;
      }
    } else return null;
  }

  function handleCellClick(clickRowId, clickCellId) {
    setModalText();
    if (arrState[clickRowId][clickCellId]) {
      if (!arrState[clickRowId][clickCellId].isEmpty) {
        if (arrState[clickRowId][clickCellId].isJump) {
          props.renewMap(arrState[clickRowId][clickCellId].name);
          return;
        }
        checkCatPosition(clickRowId, clickCellId, props.myCatCell);
        return;
      }

    }
    cleanOldCat(arrState, props.myCatCell);
    updateElement(clickRowId, clickCellId, props.myCatCell);

  }

  function checkCatPosition(clickRowId, clickCellId, myCatCell) {
    for (let i = 0; i < arrState.length; i++) {
      const columnIndex = arrState[i].findIndex(element => element === myCatCell);
      if (columnIndex !== -1) {
        if ((clickRowId == i && (clickCellId == columnIndex - 1 || clickCellId == columnIndex + 1))
          || ((clickRowId == i + 1 || clickRowId == i - 1) && (clickCellId == columnIndex || clickCellId == columnIndex + 1 || clickCellId == columnIndex - 1))
        ) {
          if (arrState[clickRowId][clickCellId].isEnemy) {
            setModalText({ name: arrState[clickRowId][clickCellId].name, text: "Враг", isEnemy: true });
          } else {
            setModalText({ name: arrState[clickRowId][clickCellId].name, text: "Камень" });
          }

        }
      }
    }

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
    <React.Fragment>
      <div className="custom-field">{createItems(arrState)}</div>
      {modalText && <div className="modal">
        <div>
          <div>{modalText.name}</div>
          <div>{modalText.text}</div>
          {modalText.isEnemy && <button onClick={() => setBattle(true)}>Атаковать</button>}
        </div>
      </div>}
    </React.Fragment >

  );
}