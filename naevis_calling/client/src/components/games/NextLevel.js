import { useState } from "react";
import { ArrowKey } from "../ArrowKey";
import Score from "../Score";

function NextLevel() {
  const [userPos, setUserPos] = useState([0, 0]);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Next Level</h2>
      <Score score={score} />

      <ArrowKey userPos={userPos} setUserPos={setUserPos} />
    </div>
  );
}

export default NextLevel;
