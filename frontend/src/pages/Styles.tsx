import styled from "styled-components";
import {
  ChargingBattery,
  Eclipse,
  FollowingEye,
  FollowMouse,
  LoadingIndicator,
  PractiseCanvas,
  ScrollDown,
} from "../components/PractiseStyles";
import { CircleLoadingIndicator } from "../components/PractiseStyles/CircleLoadingIndicator";
import { ContentCard } from "../components/PractiseStyles/ContentCard";
import { PageProps } from "../utils/types/interfaces";

const Styles: React.FunctionComponent<PageProps> = ({ client }) => {
  return (
    <Wrapper>
      <PractiseCanvas title="ScrollDown">
        <ScrollDown />
      </PractiseCanvas>
      <PractiseCanvas title="Eclipse">
        <Eclipse />
      </PractiseCanvas>
      <PractiseCanvas title="Charging Battery">
        <ChargingBattery />
      </PractiseCanvas>
      <PractiseCanvas title="Loading Indicator Music">
        <LoadingIndicator />
      </PractiseCanvas>
      <PractiseCanvas title="Circle Loading Indicator">
        <CircleLoadingIndicator />
      </PractiseCanvas>
      <PractiseCanvas title="Content Card">
        <ContentCard />
      </PractiseCanvas>
      <PractiseCanvas title="Follow Mouse">
        <FollowMouse />
      </PractiseCanvas>
      <PractiseCanvas title="Following Eye">
        <FollowingEye />
      </PractiseCanvas>
    </Wrapper>
  );
};

export default Styles;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
