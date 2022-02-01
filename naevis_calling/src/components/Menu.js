import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/game" activeClassName="selected">
          Game
        </NavLink>
      </div>
      <div>
        <NavLink to="/ranking" activeClassName="selected">
          Rank
        </NavLink>
      </div>
      <div>
        <NavLink to="/mypage" activeClassName="selected">
          MyPage
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Menu;
