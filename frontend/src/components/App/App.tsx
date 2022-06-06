import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar, { Links } from "../NavBar/NavBar";
import Overview from "../../pages/Overview";
import LogoIcon from "../Icons/LogoIcon";
import Footer from "../Footer/Footer";
import Upload from "../../pages/Upload";
import Article from "../../pages/Article";
import { GraphQLClient } from "graphql-request";
import About from "../../pages/About";
import Styles from "../../pages/Styles";
import { ThemeContextProvider } from "../Themes/Themes";
import styled, { ThemeContext } from "styled-components";
import colors from "../../utils/colors/colors";
import { Header } from "./Header";
import { Body } from "./Body";

const graphqlClient = new GraphQLClient("http://localhost:4000/graphql");

function App() {
  document.title = "Cool Blog";
  return (
    <Router>
      <ThemeContextProvider>
        <header>
          <Header />
        </header>
        <body>
          <Body>
            <Routes>
              <Route
                path="/"
                element={<Overview client={graphqlClient} />}
              ></Route>
              <Route
                path="/overview"
                element={<Overview client={graphqlClient} />}
              ></Route>
              <Route
                path="/upload"
                element={<Upload client={graphqlClient} />}
              ></Route>
              <Route
                path="/article/:id"
                element={<Article client={graphqlClient} />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/styles"
                element={<Styles client={graphqlClient} />}
              />
            </Routes>
            <Footer links={FooterLinks} />
          </Body>
        </body>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;

const FooterLinks: Links = [["/about", "About"]];

// const HeaderWrapper = styled.div<{ isDarkMode: boolean }>`
//   width: 100%;
//   font-weight: bold;
//   background-color: ${(props) =>
//     props.isDarkMode ? `${colors.primary.GRAY_3}` : "white"};
//   color: ${(props) => (props.isDarkMode ? "white" : "black")};
//   transition: background-color 3s;
// `;

const BodyWrapper = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  min-height: 100%;
  background-color: ${(props) =>
    props.isDarkMode ? `${colors.primary.GRAY_3}` : "white"};
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  transition: background-color 3s;
`;
