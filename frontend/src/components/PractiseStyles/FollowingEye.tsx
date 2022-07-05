import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { useState, MouseEvent } from "react";
import SharinganIcon from "../Icons/SharinganIcon";
import Kakashi from "../../assets/kakashi.jpg";

type FollowCursorAnimation = {
  outer: string;
  inner: string;
};

export const FollowingEye: React.FC = () => {
  const [animationState, setAnimationState] = useState<FollowCursorAnimation>({
    outer: "",
    inner: "",
  });

  const mouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y;
    // console.log("clientX = ", e.clientX);
    // console.log("clientY = ", e.clientY);
    // console.log("currentTarget.getBoundingClientRect() = ",  e.currentTarget.getBoundingClientRect());
    // console.log("x = ", x);
    // console.log("y = ", y);
    setAnimationState({
      outer: `translate(${x}, ${y})`,
      inner: `translate(${x}, ${y})`,
    });
  };
  return (
    <Wrapper onMouseMove={mouseMoveEvent} transform={undefined}>
      <SharinganIcon transform={animationState.inner}/>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ transform?: string }>`

background-image: url(${Kakashi});
  height: 250px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => props.transform ?? ""};

  background-color: white;
  background-repeat: repeat-x;
  :hover svg {
  }
`;
