import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="nav">
      <div>
        <Link to="/game">Game</Link>
      </div>
      <div>
        <Link to="/ranking">Rank</Link>
      </div>
      <div>
        <Link to="/mypage">MyPage</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Menu;
