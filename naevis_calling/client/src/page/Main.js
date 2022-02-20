import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import Mypage from "./Mypage";
import About from "./About";
import SelectGame from "./SelectGame";

function Main() {
  let location = useLocation();
  return (
    <div>
      {location.pathname.slice(0, 6) === "/game/" ? "" : <Menu></Menu>}
      <Switch>
        <Route path="/game">
          <SelectGame currentPath={"/game"}></SelectGame>
        </Route>
        <Route path="/ranking">
          <SelectGame currentPath={"/ranking"}></SelectGame>
        </Route>
        <Route path="/mypage">
          <Mypage></Mypage>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
