import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import Button from "../Button/Button";
import UserIcon from "../Icons/UserIcon";

interface AuthenticationMenuProps {
  isAuthenticated?: boolean;
}

const AuthenticationMenu: React.FunctionComponent<AuthenticationMenuProps> = ({
  isAuthenticated = false,
}) => {
  return (
    <SWrapper>
      {isAuthenticated ? <UserDropdown /> : <LoginButton>Log In</LoginButton>}
    </SWrapper>
  );
};

export default AuthenticationMenu;

const LoginButton = styled(Button)`
  width: 90%;
  height: 70%;
  background-color: ${colors.primary.GRAY_2};
  color: ${colors.monochrome.WHITE}
`;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const UserDropdown = () => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        const hasClickedOutside = !ref.current.contains(
          event.target as HTMLElement
        );
        if (isVisible === true && hasClickedOutside) {
          setVisible(false);
        }
      }
    },
    [isVisible]
  );

  const toggle = useCallback(() => {
    if (isVisible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <DropdownContainer onClick={toggle} ref={ref}>
      <DropdownMain>
        <SUserIcon />
        <DropdownMainLabel>UserName</DropdownMainLabel>
      </DropdownMain>
      {isVisible && <LogOutButton>Log Out</LogOutButton>}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: block;
  height: 90%;
  width: 200px;
  background-color: ${colors.primary.GRAY_2};
  cursor: pointer;
`;

const DropdownMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
  padding-left: 2px;
`;

const SUserIcon = styled(UserIcon)`
  margin: 10px;
`;

const DropdownMainLabel = styled.span`
  display: flex;

  align-items: center;
  margin-left: 10px;
`;

const LogOutButton = styled(Button)`
  width: inherit;
  height: 5%;
  color: ${colors.monochrome.WHITE};
  border: none;
  background-color: inherit;
  position: absolute;
  z-index: 1;
  margin-top: 1px;
  padding: 0;
  cursor: pointer;
`;
