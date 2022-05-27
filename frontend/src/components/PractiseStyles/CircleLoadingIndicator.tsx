import styled from "styled-components";

export const CircleLoadingIndicator: React.FC = () => {
  const circleClass = "circle";

  return (
    <Loader>
      <IndicatorElement className={circleClass} />
      <IndicatorElement className={circleClass} />
      <IndicatorElement className={circleClass} />
      <IndicatorElement className={circleClass} />
      <IndicatorElement className={circleClass} />
    </Loader>
  );
};

const Loader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  
  .circle {
    position: relative;
  }

  .circle::before {
    content:"";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    animation: loading 2s ease-out infinite;
  }

  .circle:nth-child(1) {
    background-color: green;
  }
  .circle:nth-child(2) {
    background-color: yellowgreen;
  }
  .circle:nth-child(3) {
    background-color: yellow;
  }
  .circle:nth-child(4) {
    background-color: orange;
  }
  .circle:nth-child(5) {
    background-color: red;
  }

  .circle:nth-child(1)::before {
    background-color: green;
  }

  .circle:nth-child(2)::before {
    background-color: yellowgreen;
    animation-delay: 0.2s;
  }
  .circle:nth-child(3)::before {
    background-color: yellow;
    animation-delay: 0.4s;
  }
  .circle:nth-child(4)::before {
    background-color: orange;
    animation-delay: 0.6s;
  }
  .circle:nth-child(5)::before {
    background-color: red;
    animation-delay: 0.8s;
  }

  @keyframes loading {
    0% {
      transform: scale(1);
    }
    75% {
      transform: scale(2.5);
    }

    100% {
      opacity: 0;
    }
  }
`;

const IndicatorElement = styled.div`
  width: 8px;
  height: 8px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: white;
  border-radius: 50%;
`;
