import React from "react";
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

const graphqlClient = new GraphQLClient("http://localhost:4000/graphql");

function App() {
  document.title = "Cool Blog";

  return (
    <Router>
      <header>
        <NavBar
          links={NavBarLinks}
          icon={<LogoIcon height="64" width="64" />}
        />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Overview client={graphqlClient} />}></Route>
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
          <Route path="/styles" element={<Styles client={graphqlClient} />} />
        </Routes>
        <Footer links={FooterLinks} />
      </body>
    </Router>
  );
}

export default App;

const NavBarLinks: Links = [
  ["/overview", "Overview"],
  ["/styles", "Practise Styles"],
];

const FooterLinks: Links = [["/about", "About"]];
