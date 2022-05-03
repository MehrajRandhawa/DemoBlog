import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { BORDER_RADIUS } from "./ArticleCard";

interface TitleCardProps {
  title: string;
}

export const TitleCard: React.FunctionComponent<TitleCardProps> = ({
  title,
}) => {
  return (
    <SWrapper>
      <HeadingWrapper>{title}</HeadingWrapper>
      <p>Created by Mehraj S. Randhawa</p>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: solid;

  height: 150px;

  margin: 20px;
  width: 100%;

  border-color: ${colors.primary.BLUE_5};
  border-radius: ${BORDER_RADIUS};

  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(16, 35, 54, 1) 0%,
    rgba(45, 99, 153, 1) 25%,
    rgba(104, 196, 172, 1) 51%,
    rgba(175, 0, 42, 1) 100%
  );
  animation: animation 5s ease infinite;

  @keyframes animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const HeadingWrapper = styled.h1``;
