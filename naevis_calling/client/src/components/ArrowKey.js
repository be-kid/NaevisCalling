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

const UpArrow = styled.button`
  width: 50px;
  height: 50px;
  background-color: unset;
  border: 0px;
  margin-bottom: 100%;
  background-image: url(${arrow2});
`;

const LeftArrow = styled.button`
  width: 50px;
  height: 50px;
  background-color: unset;
  border: 0px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-200%, -50%);
  background-image: url(${arrow1});
`;

const RightArrow = styled.button`
  width: 50px;
  height: 50px;
  background-color: unset;
  border: 0px;
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(200%, -50%) rotateY(180deg);
  background-image: url(${arrow1});
`;

const DownArrow = styled.button`
  width: 50px;
  height: 50px;
  background-color: unset;
  border: 0px;
  transform: rotateX(180deg);
  background-image: url(${arrow2});
`;

export const ArrowKey = () => {
  return (
    <ArrowKeys>
      <UpArrow />
      <LeftArrow />
      <DownArrow />
      <RightArrow />
    </ArrowKeys>
  );
};
