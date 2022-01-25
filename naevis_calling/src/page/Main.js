import { Route, Switch } from "react-router-dom";
import Mypage from "./Mypage";
import About from "./About";
import Menu from "../component/Menu";
import { useLocation } from "react-router-dom";
import SelectGame from "./SelectGame";

function Main() {
  let location = useLocation();
  console.log(location.pathname);
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
