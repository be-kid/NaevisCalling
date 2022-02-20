import { ArrowKey } from "../components/ArrowKey";
import BlackMamba from "../components/games/BlackMamba";
import NextLevel from "../components/games/NextLevel";
import Savage from "../components/games/Savage";
import Score from "../components/Score";

function PlayGame({ gameName }) {
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
      <Score />
      <div>
        {gameCode === 0 ? (
          <BlackMamba />
        ) : gameCode === 1 ? (
          <NextLevel />
        ) : (
          <Savage />
        )}
      </div>
      <ArrowKey />
    </div>
  );
}

// 게임 화면 컴포넌트와 방향키 컴포넌트 등으로 된 게임 플레이 화면이 만들어질 곳

export default PlayGame;