import snakeImg from "../img/snake.jpg";
import nextImg from "../img/next.jpg";
import savageImg from "../img/savage.jpg";
import totalImg from "../img/pos.jpg";
import GameBox from "./GameBox";

function GameList({ currentPath }) {
  const gameList = [
    [snakeImg, "blackmamba"],
    [nextImg, "nextlevel"],
    [savageImg, "savage"],
  ];
  return (
    <div>
      {currentPath === "/ranking" ? (
        <GameBox currentPath={currentPath} img={totalImg} title={"total"} />
      ) : (
        ""
      )}
      {gameList.map((game, idx) => {
        return (
          <GameBox
            key={idx}
            currentPath={currentPath}
            img={game[0]}
            title={game[1]}
          />
        );
      })}
    </div>
  );
}

export default GameList;
