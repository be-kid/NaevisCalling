import { Link } from "react-router-dom";
import snakeImg from "/Users/jooyong/PROJECT/naevis_calling/src/img/snake.jpg";
import nextImg from "/Users/jooyong/PROJECT/naevis_calling/src/img/next.jpg";
import savageImg from "/Users/jooyong/PROJECT/naevis_calling/src/img/savage.jpg";
import totalImg from "/Users/jooyong/PROJECT/naevis_calling/src/img/pos.jpg";

function GameList({ currentPath }) {
  return (
    <div>
      {currentPath === "/ranking" ? (
        <div>
          <Link to={`${currentPath}/total`}>
            <div className="project">
              <img src={totalImg} alt="TOTAL"></img>
              <div>TOTAL</div>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div>
        <Link to={`${currentPath}/blackmamba`}>
          <div className="project">
            <img src={snakeImg} alt="BLACK MAMBA"></img>
            <div>BLACK MAMBA</div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`${currentPath}/nextlevel`}>
          <div className="project">
            <img src={nextImg} alt="NEXT LEVEL"></img>
            <div>NEXT LEVEL</div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`${currentPath}/savage`}>
          <div className="project">
            <img src={savageImg} alt="SAVAGE"></img>
            <div>SAVAGE</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GameList;
