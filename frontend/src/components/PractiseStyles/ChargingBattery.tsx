import styled from "styled-components";

export const ChargingBattery: React.FC = () => {
  return (
    <Wrapper>
      <Battery>
        <BatteryHead />
        <BatteryBody>
          <Charge />
        </BatteryBody>
      </Battery>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
`;

const Battery = styled.div``;

const BatteryHead = styled.div`
  width: 30px;
  height: 10px;
  background-color: black;
  margin: 0 auto;
  border: 4px solid gray;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const BatteryBody = styled.div`
  width: 100px;
  height: 200px;
  background: black;
  position: relative;
  margin: 0 auto;
  border: 4px solid gray;
  border-radius: 18px;
`;

const Charge = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 14px;
  animation: battery-charge 8s linear infinite;

  @keyframes battery-charge {
    0% {
      height: 0%;
      background-color: red;
    }

    25% {
      height: 25%;
      background-color: orange;
    }

    50% {
      height: 50%;
      background-color: yellow;
    }

    75% {
      height: 75%;
      background-color: yellowgreen;
    }

    100% {
      height: 100%;
      background-color: green;
    }
  }
`;
