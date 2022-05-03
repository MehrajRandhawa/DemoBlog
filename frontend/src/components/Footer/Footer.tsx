import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { useMemo } from "react";
import { NonEmptyArray, NonEmptyTuple } from "../../utils/types/types";
import { NavBarLink } from "../NavBar/NavBar";

type LinkPath = string;
type LinkDescription = string;

export type Links = NonEmptyArray<NonEmptyTuple<LinkPath, LinkDescription>>;
export interface FooterProps {
  links: Links;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  links,
}) => {
  const FooterElements = useMemo(() => {
    return links.map((link: any[]) => {
      return <NavBarLink to={link[0]}>{link[1]}</NavBarLink>;
    });
  }, [links]);
  return (
    <Wrapper>
      <FooterEntries>{FooterElements}</FooterEntries>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 30px;
  position: sticky;
  bottom: 0;
  background-color: ${colors.primary.GRAY_3};
  justify-content: space-between;
  width: 100%;
  color: white;
  padding-left: 10%;
  padding-right: 5%;
`;

const FooterEntries = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

