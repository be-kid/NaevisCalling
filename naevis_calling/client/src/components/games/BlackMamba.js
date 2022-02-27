import styled from "styled-components";
import { useEffect, useState } from "react";
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
  const [crystalPos, setCrystalPos] = useState([
    (Math.floor(Math.random() * 100) % 10) + 10,
    (Math.floor(Math.random() * 100) % 10) + 10,
  ]);
  const [score, setScore] = useState(0);
  const pieces = Array.from({ length: 25 }, (v) =>
    Array.from({ length: 25 }, (v) => 0)
  );

  let pieceColors = {};
  pieceColors[`${userPos[0]},${userPos[1]}`] = "gray";
  snakes.forEach((snake) => {
    snake.forEach((el) => {
      pieceColors[`${el[0]},${el[1]}`] = "black";
    });
  });
  pieceColors[`${crystalPos[0]},${crystalPos[1]}`] = "red";

  const crystalRegen = () => {
    while (true) {
      let crystalX = Math.floor(Math.random() * 100) % 25;
      let crystalY = Math.floor(Math.random() * 100) % 25;
      if (pieceColors[`${crystalX},${crystalY}`] === undefined) {
        setCrystalPos([crystalX, crystalY]);
        break;
      }
    }
  };

  const updateBoard = (x, y) => {
    if (crystalPos[0] === x && crystalPos[1] === y) {
      setScore(score + 100); // 임시로 100점씩 늘어나게
      crystalRegen(); // 보석을 먹었으니 새로운 위치로 배정
      addSnake(); // 뱀 추가
    }
    setUserPos([x, y]);
  };
  const addSnake = () => {
    // if (snakes.length < 8) {
    //   const newSnake = [];
    //   setSnakes([...snakes, newSnake]);
    // }
  };

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

      <ArrowKey userPos={userPos} updateBoard={updateBoard} />
    </div>
  );
}

export default BlackMamba;
