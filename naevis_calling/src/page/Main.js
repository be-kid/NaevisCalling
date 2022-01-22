import { Route, Switch } from "react-router-dom";
import Mypage from "./Mypage";
import About from "./About";
import Menu from "../component/Menu";
import { useLocation } from "react-router-dom";
import SelectGame from "../component/SelectGame";

function Main() {
  let location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? <Menu></Menu> : ""}
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
