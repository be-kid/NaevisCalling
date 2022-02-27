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
  const [gameState, setGameState] = useState(true);
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
    setUserPos([x, y]);
    if (crystalPos[0] === x && crystalPos[1] === y) {
      setScore(score + 100); // 임시로 100점씩 늘어나게
      crystalRegen(); // 보석을 먹었으니 새로운 위치로 배정
      addSnake(); // 뱀 추가
    }
  };

  const isVaild = (x, y) => {
    return 0 <= x && x < 25 && 0 <= y && y < 25;
  };
  const clickArrowButton = (move) => {
    const nextPos = [userPos[0] + move[0], userPos[1] + move[1]];
    if (isVaild(nextPos[0], nextPos[1])) {
      updateBoard(nextPos[0], nextPos[1]);
    }
  };

  const addSnake = () => {
    // if (snakes.length < 8) {
    //   const newSnake = [[24,0],[24,1],[24,2],[24,3],[24,4],[24,5],[24,6],[24,7],[24,8]];
    //   새로운 뱀이 추가될 수 있을 때까지 체크
    //   checkEmpty();
    //   추가된 이후로 움직이도록 함
    //   setSnakes([...snakes, newSnake]);
    // }
  };

  const checkEmpty = () => {
    let check = setInterval(function () {
      let flag = true;
      for (let i = 0; i < 9; i++) {
        if (pieceColors[`24,${i}`]) {
          flag = false;
        }
      }
      if (flag) {
        clearInterval(check);
      }
    }, 100);
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

      <ArrowKey clickArrowButton={clickArrowButton} />
    </div>
  );
}

export default BlackMamba;
