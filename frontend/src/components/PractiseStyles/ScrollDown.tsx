import styled from "styled-components";

export const ScrollDown: React.FunctionComponent = () => {
  return (
    <Mouse>
      <MouseWheel />
    </Mouse>
  );
};

const Mouse = styled.span`
  width: 25px;
  height: 50px;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
`;

const MouseWheel = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  margin: auto;
  animation: mouse-wheel 1s linear infinite;

  @keyframes mouse-wheel {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }

    100% {
      opacity: 1;
      transform: translateY(1rem);
    }
  }
`;
