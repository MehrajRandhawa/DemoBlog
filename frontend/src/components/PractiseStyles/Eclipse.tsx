import styled from "styled-components";

export const Eclipse: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Sun>
          <Shadow />
        </Sun>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  display: flex;
  background: white;
  animation: dayToNight 10s infinite 1.5s;

  @keyframes dayToNight {
    0% {
      background-color: white;
    }

    50% {
      background-color: black;
    }

    100% {
      background-color: white;
    }
  }
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  display: block;
`;

const Sun = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #fcd25b;
  border: 3px solid #fcd25b;
`;

const Shadow = styled.div`
  height: 170px;
  width: 170px;
  border-radius: 50%;
  background-color: white;
  top: -5px;
  left: 0px;
  animation: moveshadow 10s infinite 1.5s;

  @keyframes moveshadow {
    0% {
      transform: translateX(150px);
      background-color: white;
    }

    50% {
      transform: translateX(-10px);
      background-color: black;
    }

    100% {
      transform: translateX(-170px);
      background-color: white;
    }
  }
`;
