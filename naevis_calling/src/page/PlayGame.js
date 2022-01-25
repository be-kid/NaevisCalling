import BlackMamba from "../component/games/BlackMamba";
import NextLevel from "../component/games/NextLevel";
import Savage from "../component/games/Savage";

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
      {gameCode === 0 ? (
        <BlackMamba />
      ) : gameCode === 1 ? (
        <NextLevel />
      ) : (
        <Savage />
      )}
    </div>
  );
}

export default PlayGame;
