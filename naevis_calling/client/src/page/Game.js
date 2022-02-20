import { useState } from "react";
import { ArrowKey } from "../components/ArrowKey";
import BlackMamba from "../components/games/BlackMamba";
import NextLevel from "../components/games/NextLevel";
import Savage from "../components/games/Savage";
import Score from "../components/Score";

function Game({ gameName }) {
  const [userPos, setUserPos] = useState([0, 0]);
  const [snake, setSnake] = useState([]);
  const [crystalPos, setCrystalPos] = useState([]);
  const [score, setScore] = useState(0);
  let gameCode;
  if (gameName === "blackmamba") {
    gameCode = 0;
  } else if (gameName === "nextlevel") {
    gameCode = 1;
  } else {
    gameCode = 2;
  }

  return (
    <div>
      <h2>{gameName.toUpperCase()}</h2>
      <Score score={score} />

      {gameCode === 0 ? (
        <BlackMamba />
      ) : gameCode === 1 ? (
        <NextLevel />
      ) : (
        <Savage />
      )}

      <ArrowKey userPos={userPos} setUserPos={setUserPos} />
    </div>
  );
}

// 게임 화면 컴포넌트와 방향키 컴포넌트 등으로 된 게임 플레이 화면이 만들어질 곳

export default Game;
