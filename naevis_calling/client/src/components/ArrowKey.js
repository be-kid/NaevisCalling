import styled from "styled-components";
import arrow1 from "../img/arrow1.jpg";
import arrow2 from "../img/arrow2.jpg";

const ArrowKeys = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const button = styled.button`
  width: 50px;
  height: 50px;
  background-color: unset;
  border: 0px;
`;

const UpArrow = styled(button)`
  margin-bottom: 100%;
  background-image: url(${arrow2});
`;

const LeftArrow = styled(button)`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-200%, -50%);
  background-image: url(${arrow1});
`;

const RightArrow = styled(button)`
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(200%, -50%) rotateY(180deg);
  background-image: url(${arrow1});
`;

const DownArrow = styled(button)`
  transform: rotateX(180deg);
  background-image: url(${arrow2});
`;

export const ArrowKey = ({
  userPos,
  setUserPos,
  crystalPos,
  crystalRegen,
  score,
  setScore,
}) => {
  const clickArrowButton = (move) => {
    const nextPos = [userPos[0] + move[0], userPos[1] + move[1]];
    if (
      nextPos[0] >= 0 &&
      nextPos[0] < 25 &&
      nextPos[1] >= 0 &&
      nextPos[1] < 25
    ) {
      if (crystalPos[0] === nextPos[0] && crystalPos[1] === nextPos[1]) {
        setScore(score + 100); // 임시로 100점씩 늘어나게
        crystalRegen(); // 보석을 먹었으니 새로운 위치로 배정
      }
      setUserPos(nextPos);
    }
  };

  return (
    <ArrowKeys>
      <UpArrow
        onClick={() => {
          clickArrowButton([-1, 0]);
        }}
      />
      <LeftArrow
        onClick={() => {
          clickArrowButton([0, -1]);
        }}
      />
      <DownArrow
        onClick={() => {
          clickArrowButton([1, 0]);
        }}
      />
      <RightArrow
        onClick={() => {
          clickArrowButton([0, 1]);
        }}
      />
    </ArrowKeys>
  );
};
