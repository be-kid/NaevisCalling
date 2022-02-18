import snakeImg from "/Users/jooyong/PROJECT/naevis_calling/client/src/img/snake.jpg";
import nextImg from "/Users/jooyong/PROJECT/naevis_calling/client/src/img/next.jpg";
import savageImg from "/Users/jooyong/PROJECT/naevis_calling/client/src/img/savage.jpg";
import totalImg from "/Users/jooyong/PROJECT/naevis_calling/client/src/img/pos.jpg";
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
