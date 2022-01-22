import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import BlackMamba from "./BlackMamba";
import BlackMambaRank from "./BlackMambaRank";
import GameList from "./GameList";
import NextLevel from "./NextLevel";
import NextLevelRank from "./NextLevelRank";
import SavageRank from "./SavageRank";
import Savage from "./Savage";

function SelectGame({ currentPath }) {
  let location = useLocation();
  let Rank = currentPath === "/ranking" ? true : false;
  return (
    <div>
      {currentPath === location.pathname ? (
        <GameList currentPath={currentPath}></GameList>
      ) : (
        ""
      )}
      <Switch>
        <Route path={`${currentPath}/blackmamba`}>
          {Rank ? <BlackMambaRank></BlackMambaRank> : <BlackMamba></BlackMamba>}
        </Route>
        <Route path={`${currentPath}/nextlevel`}>
          {Rank ? <NextLevelRank></NextLevelRank> : <NextLevel></NextLevel>}
        </Route>
        <Route path={`${currentPath}/savage`}>
          {Rank ? <SavageRank></SavageRank> : <Savage></Savage>}
        </Route>
      </Switch>
    </div>
  );
}

export default SelectGame;
