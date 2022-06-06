import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Themes/Themes";
import colors from "../../utils/colors/colors";

export const DarkmodeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Wrapper
      onClick={() => setTheme({ isDarkmode: !theme.isDarkmode })}
      isDarkMode={theme.isDarkmode}
    >
      <Content>
        <Sun>
          <Moon isDarkMode={theme.isDarkmode} />
        </Sun>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: flex;
  background-color: ${(props) =>
    props.isDarkMode ? `${colors.primary.GRAY_3}` : "white"};
  color: black;
  overflow: hidden;
  transition: background-color 3s;
  cursor: pointer;
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  display: block;
`;

const Sun = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #fcd25b;
  border: 3px solid #fcd25b;
`;

const Moon = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: white;
  top: 0px;
  right: -64px;
  transform: ${(props) =>
    props.isDarkMode ? `translateX(-68px)` : `translateX(0px)`};
  background-color: ${(props) =>
    props.isDarkMode ? `${colors.primary.GRAY_3}` : `white`};
  transition: transform 3s, background-color 3s;

  /* animation: moveShadowDayToNight 5s linear 1.5s;

  @keyframes moveShadowDayToNight {
    0% {
      transform: translateX(0px);
      background-color: white;
    }

    100% {
      transform: translateX(-64px);
      background-color: black;
    }
  } */
`;
