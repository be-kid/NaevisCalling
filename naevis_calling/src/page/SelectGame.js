import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import GameList from "../component/GameList";
import Rank from "../component/Rank";
import PlayGame from "./PlayGame";

function SelectGame({ currentPath }) {
  let location = useLocation();
  let Ranking = currentPath === "/ranking" ? true : false;
  return (
    <div>
      {currentPath === location.pathname ? (
        <GameList currentPath={currentPath}></GameList>
      ) : (
        ""
      )}
      <Switch>
        <Route path={`${currentPath}/blackmamba`}>
          {Ranking ? (
            <Rank gameName={"blackmamba"}></Rank>
          ) : (
            <PlayGame gameName={"blackmamba"}></PlayGame>
          )}
        </Route>
        <Route path={`${currentPath}/nextlevel`}>
          {Ranking ? (
            <Rank gameName={"nextlevel"}></Rank>
          ) : (
            <PlayGame gameName={"nextlevel"}></PlayGame>
          )}
        </Route>
        <Route path={`${currentPath}/savage`}>
          {Ranking ? (
            <Rank gameName={"savage"}></Rank>
          ) : (
            <PlayGame gameName={"savage"}></PlayGame>
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default SelectGame;
