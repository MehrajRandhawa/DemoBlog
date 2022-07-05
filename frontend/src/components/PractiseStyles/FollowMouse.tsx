import styled from "styled-components";
import EyeIcon from "../Icons/EyeIcon";
import colors from "../../utils/colors/colors";
import { useState, MouseEvent } from "react";

type FollowCursorAnimation = {
  outer: string;
  inner: string;
};

export const FollowMouse: React.FC = () => {
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
      <EyeIcon fill="black" transform={animationState.inner} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ transform?: string }>`
  height: 250px;
  width: 250px;
  background-color: ${colors.monochrome.WHITE};
  transform: ${(props) => props.transform ?? ""};

  :hover svg {
    
  }
`;
