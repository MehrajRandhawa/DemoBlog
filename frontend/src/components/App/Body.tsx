import { useContext } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { ThemeContext } from "../Themes/Themes";

interface BodyInterface {
  children: React.ReactNode;
}

export const Body: React.FunctionComponent<BodyInterface> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <BodyWrapper isDarkmode={theme.isDarkmode}>{children}</BodyWrapper>;
};

const BodyWrapper = styled.div<{ isDarkmode: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.isDarkmode ? `${colors.primary.GRAY_3}` : "white"};
  color: ${(props) => (props.isDarkmode ? "white" : "black")};
  transition: background-color 3s;
`;
