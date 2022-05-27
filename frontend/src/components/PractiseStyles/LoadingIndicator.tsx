import styled from "styled-components";

export const LoadingIndicator: React.FC = () => {
  return (
    <Wrapper>
      <OddLine />
      <EvenLine />
      <OddLine />
      <EvenLine />
      <OddLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  width: 200px;

  background: black;
`;

const OddLine = styled.div`
  height: 100px;
  width: 10px;
  background-color: lightblue;
  border-radius: 5px;
  animation: oddpulse 0.7s linear infinite;

  @keyframes oddpulse {
    0% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.25);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const EvenLine = styled.div`
  height: 100px;
  width: 10px;
  background-color: lightblue;
  border-radius: 5px;
  animation: evenpulse 0.7s linear infinite;

  @keyframes evenpulse {
    0% {
      transform: scaleY(0.25);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.25);
    }
  }
`;
