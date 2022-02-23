import styled from "styled-components";
import { useState } from "react";
import { ArrowKey } from "../ArrowKey";
import Score from "../Score";

const GameBoard = styled.div`
  max-height: 500px;
  max-width: 500px;
  margin: 0 auto;
  width: 90vw;
  height: 90vw;
  color: darkgray;
  display: flex;
  flex-wrap: wrap;
`;

const Piece = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  width: 4%;
  height: 4%;
  background-color: ${(props) => props.background || "white"};
`;

function BlackMamba() {
  const [userPos, setUserPos] = useState([0, 0]);
  const [snakes, setSnakes] = useState([]);
  const [crystalPos, setCrystalPos] = useState([]);
  const [score, setScore] = useState(0);
  const pieces = Array.from({ length: 25 }, (v) =>
    Array.from({ length: 25 }, (v) => 0)
  );

  const pieceColors = {};
  pieceColors[`${userPos[0]},${userPos[1]}`] = "gray";
  snakes.forEach((snake) => {
    snake.forEach((el) => {
      pieceColors[`${el[0]},${el[1]}`] = "black";
    });
  });
  pieceColors[`${crystalPos[0]},${crystalPos[1]}`] = "red";

  return (
    <div>
      <h2>Black Mamba</h2>
      <Score score={score} />

      <GameBoard>
        {pieces.map((elems, i) => {
          return elems.map((elem, j) => {
            return (
              <Piece
                key={`${i},${j}`}
                id={`${i},${j}`}
                background={() => {
                  return pieceColors[`${i},${j}`] ?? "white";
                }}
              />
            );
          });
        })}
      </GameBoard>

      <ArrowKey userPos={userPos} setUserPos={setUserPos} />
    </div>
  );
}

export default BlackMamba;
/*
export const makeGameBoard = () => {
    const gameBoard = document.getElementById("gameBoard");

    for (let i=0; i<25; i++){
        for (let j=0; j<25; j++){
            const div = document.createElement("div");
            div.id = `${i},${j}`;
            div.className = "piece";
            div.style.backgroundColor = "white";
            gameBoard.appendChild(div);
        }
    }
}

export const clearGameBoard = () => {
    document.querySelectorAll(".piece").forEach(p=>{
        p.style.backgroundColor = "white";
    })
}

export const setBoard = () => {
    const board = new Array(25);
    for (let i = 0; i<25; i++){
        board[i] = new Array(25);
    }
    for (let i=0;i<25;i++){
        for (let j=0; j<25; j++){
            board[i][j] = 0;
        }
    }
    return board;
}
*/
