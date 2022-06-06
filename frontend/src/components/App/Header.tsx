import { useContext } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import LogoIcon from "../Icons/LogoIcon";
import NavBar, { Links } from "../NavBar/NavBar";
import { ThemeContext } from "../Themes/Themes";

export const Header: React.FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderWrapper isDarkmode={theme.isDarkmode}>
      <NavBar
        links={NavBarLinks}
        icon={
          <LogoIcon
            height="64"
            width="64"
            fill={theme.isDarkmode ? "white" : "black"}
          />
        }
      />
    </HeaderWrapper>
  );
};

const NavBarLinks: Links = [
  ["/overview", "Overview"],
  ["/styles", "Practise Styles"],
];

const HeaderWrapper = styled.div<{ isDarkmode: boolean }>`
  width: 100%;
  font-weight: bold;
  background-color: ${(props) =>
    props.isDarkmode ? `${colors.primary.GRAY_3}` : "white"};
  color: ${(props) => (props.isDarkmode ? "white" : "black")};
  transition: background-color 3s;
`;
