import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import colors from "../../utils/colors/colors";
import { useMemo } from "react";
import { NonEmptyArray, NonEmptyTuple } from "../../utils/types/types";
import { isDefined } from "../../utils/utils";
import AuthenticationButtons from "../AuthenticationButtons/AuthenticationButtons";

type LinkPath = string;
type LinkDescription = string;

export type Links = NonEmptyArray<NonEmptyTuple<LinkPath, LinkDescription>>;
export interface NavBarProps {
  icon?: React.ReactNode;
  iconText?: string;
  links: Links;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({
  links,
  icon,
  iconText,
}) => {
  const NavLinkElements = useMemo(() => {
    return links.map((link: any[]) => {
      return <NavBarLink to={link[0]}>{link[1]}</NavBarLink>;
    });
  }, [links]);
  return (
    <NavBarContainer>
      {isDefined(icon) && (
        <NavLogoContainer>
          <NavLogo to="/">{icon}</NavLogo>
          <p>{iconText}</p>
        </NavLogoContainer>
      )}
      <NavBarMenu>{NavLinkElements}</NavBarMenu>
      <ButtonContainer>
        <AuthenticationButtons/>
      </ButtonContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  padding-left: 10%;
  padding-right: 5%;
`;

const NavBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarLink = styled(Link)`
  padding: 15px;
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: ${colors.primary.GRAY_1};
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLogoContainer = styled.div`
  display: block;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  border: solid;
`;

export default NavBar;
