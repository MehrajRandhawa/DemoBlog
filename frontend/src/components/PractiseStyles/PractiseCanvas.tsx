import styled from "styled-components";
import colors from "../../utils/colors/colors";

interface PractiseCanvasProps {
  title: string;
  children?: React.ReactNode;
}

export const PractiseCanvas: React.FC<PractiseCanvasProps> = ({
  title,
  children,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary.BLUE_5};
  height: 100%;
  width: 95%;
  margin: 10px;
  padding: 15px;
  border: 2px solid ${colors.primary.GRAY_3};
  border-radius: 5px;
  box-shadow: 10px 10px 10px gray;

  /* animation: pulsing 5s infinite;

  @keyframes pulsing {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  } */
`;

const Title = styled.h1`
  margin: 10px;
`;
