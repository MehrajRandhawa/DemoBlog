import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import Button from "../Button/Button";
import UserIcon from "../Icons/UserIcon";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthenticationMenuProps {}

const AuthenticationMenu: React.FunctionComponent<
  AuthenticationMenuProps
> = ({}) => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  console.log(user);
  const logIn = () => {
    loginWithRedirect();
  };
  return (
    <SWrapper>
      {isAuthenticated ? (
        <UserDropdown userName={user?.nickname!} logOutHandler={logout}/>
      ) : (
        <LoginButton onPressHandler={logIn}>Log In</LoginButton>
      )}
    </SWrapper>
  );
};

export default AuthenticationMenu;

const LoginButton = styled(Button)`
  width: 90%;
  height: 70%;
  background-color: ${colors.primary.GRAY_2};
  color: ${colors.monochrome.WHITE};
`;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

interface UserDropDownInterface {
  userName: string;
  logOutHandler: () => void;
}

const UserDropdown: React.FunctionComponent<UserDropDownInterface> = ({userName, logOutHandler}) => {
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

  const logOut = useCallback(() => {
    console.log("Loggin out");
    logOutHandler();
  }, []);

  return (
    <UserDropdownContainer onClick={toggle} ref={ref}>
      <DropdownMainElement>
        <SUserIcon />
        <UsernameLabel>{userName}</UsernameLabel>
      </DropdownMainElement>
      {isVisible && (
        <DropdownList>
          <NavLink to="/upload">
            <DropdownListElement>
              <UploadButton>Upload</UploadButton>
            </DropdownListElement>
          </NavLink>
          <DropdownListElement>
            <LogOutButton onPressHandler={logOut}>Log Out</LogOutButton>
          </DropdownListElement>
        </DropdownList>
      )}
    </UserDropdownContainer>
  );
};

const UserDropdownContainer = styled.div`
  display: block;
  height: 90%;
  width: 200px;
  background-color: ${colors.primary.GRAY_2};
  cursor: pointer;
`;

const DropdownMainElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
  padding-left: 2px;
`;

const SUserIcon = styled(UserIcon)`
  margin: 10px;
`;

const UsernameLabel = styled.span`
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

const UploadButton = styled(Button)`
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

const DropdownListElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 3px;
  height: 30px;
  text-decoration: none;
  list-style-type: none;
  border-style: solid;
  border-color: black;
  border-width: 0px 0px 1px 0px;

  &:hover {
    background-color: ${colors.primary.GRAY_3};
  }
`;

const DropdownList = styled.ul`
  width: inherit;
  background-color: inherit;
  position: absolute;
  z-index: 1;
  margin-top: 1px;
  padding: 0;
  cursor: pointer;
`;
