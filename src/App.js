import React from "react";
import "./styles.css";

export default function App() {
  const [turn, setTurn] = React.useState("X");
  const [winner, setWinner] = React.useState(undefined);
  const winnerCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [data, setData] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  function reset() {
    let newData = data;
    newData = [null, null, null, null, null, null, null, null, null];
    setData(newData);
    setWinner(undefined);
    setTurn("X");
  }
  function changeArray(e, i) {
    if (!data[i] && !winner) {
      let newdata = data;
      newdata[i] = turn;
      setData(newdata);
      setTurn(turn === "X" ? "O" : "X");
      winnerCond.forEach((winner) => {
        const [x, y, z] = winner;
        if (data[x] && data[x] === data[y] && data[y] === data[z]) {
          setWinner(true);
        }
      });
    }
  }
  return (
    <div className="App">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div key={index} onClick={(event) => changeArray(event, index)}>
              {item}
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className="grid-turn">{`Turn : ${turn}`} </div>
      {winner ? <div>{`Winner : ${turn === "X" ? "O" : "X"}`}</div> : null}
      <br />
      {winner ? <button onClick={reset}>Restart</button> : null}
    </div>
  );
}
