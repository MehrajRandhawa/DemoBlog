import styled from "styled-components";
import LoadingIcon from "../Icons/LoadingIcon";

const LoadingIndicator: React.FunctionComponent = () => {
  return <SLoadingIcon size="32"/>;
};

export default LoadingIndicator;

const SLoadingIcon = styled(LoadingIcon)`
  display: flex;
  align-items: center;

  animation: rotation 1s linear infinite;

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }
`;
