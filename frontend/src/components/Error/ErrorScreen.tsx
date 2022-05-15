import styled from "styled-components";

export interface ErrorPageProps {
  error: Error;
}

const ErrorScreen: React.FunctionComponent<ErrorPageProps> = ({ error }) => {
  return (
    <Wrapper>
      <h1>An error occured</h1>
      <h2>{error.name}</h2>
      <div>{error.message}</div>
    </Wrapper>
  );
};

export default ErrorScreen;

const Wrapper = styled.div``;
