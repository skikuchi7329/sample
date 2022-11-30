import React, { useState } from 'react';


function App() {
  const [nameText, setNameText] = useState("");
  const [nameList, setNewNameList] = React.useState([]);

  const onChangeNameText = (event) => {
    setNameText(event.target.value);
  };

  const onClickAdd = () => {
    const newName = [
      nameText,
    ]
    nameList.push(newName);
  
    setNameText("");
  };

  const onClickReset = () => {
    setNewNameList([]);
  }

  const roulette = () => {
    const random = Math.floor(Math.random() * nameList.length);
    document.getElementById("result").textContent = nameList[random];
    if (nameList.length < 2) {
      alert("error");
    }
    console.log(nameList)
  }

  return (
  <>
    <div>
      <h1>ルーレット</h1>
      <input value={nameText} onChange={onChangeNameText} />
      <button onClick={onClickAdd}>追加</button>
      <button onClick={onClickReset}>リセット</button>
    </div>
    <div>
      <ul>
        {nameList.map(name=>
          <li key={name}>{name}</li>
        )}
      </ul>
    </div>
    <div>
      <button onClick={roulette}>スタート</button>
      <p id="result">?</p>
    </div>
  </>
  )
}

export default App;
