import { Link } from "react-router-dom";

function GameList({ currentPath }) {
  return (
    <div>
      <ul>
        {currentPath === "/ranking" ? (
          <li>
            <Link to={`${currentPath}/total`}>TOTAL</Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link to={`${currentPath}/blackmamba`}>BLACK MAMBA</Link>
        </li>
        <li>
          <Link to={`${currentPath}/nextlevel`}>NEXT LEVEL</Link>
        </li>
        <li>
          <Link to={`${currentPath}/savage`}>SAVAGE</Link>
        </li>
      </ul>
    </div>
  );
}

export default GameList;
