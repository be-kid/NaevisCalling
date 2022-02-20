import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GameList from "../components/GameList";
import Rank from "./Rank";
import Game from "./Game";

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
        {Ranking ? (
          <Route path={`${currentPath}/total`}>
            <Rank gameName={"total"}></Rank>
          </Route>
        ) : (
          ""
        )}
        <Route path={`${currentPath}/blackmamba`}>
          {Ranking ? (
            <Rank gameName={"blackmamba"}></Rank>
          ) : (
            <Game gameName={"blackmamba"}></Game>
          )}
        </Route>
        <Route path={`${currentPath}/nextlevel`}>
          {Ranking ? (
            <Rank gameName={"nextlevel"}></Rank>
          ) : (
            <Game gameName={"nextlevel"}></Game>
          )}
        </Route>
        <Route path={`${currentPath}/savage`}>
          {Ranking ? (
            <Rank gameName={"savage"}></Rank>
          ) : (
            <Game gameName={"savage"}></Game>
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default SelectGame;

// 게임 선택 또는 랭킹보기 선택
// 나중에 DB를 쓰게 되거나 하면 코드를 더 정리할 수 있을 듯
// 아니면 그냥 게임 리스트를 만들어서도 가능
