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

const graphqlClient = new GraphQLClient("http://localhost:4000/graphql");

function App() {
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
          <Route path="/" element={<Overview client={graphqlClient}/>}></Route>
          <Route path="/overview" element={<Overview client={graphqlClient}/>}></Route>
          <Route path="/upload" element={<Upload client={graphqlClient}/>}></Route>
          <Route path="/article/:id" element={<Article client={graphqlClient}/>}></Route>
        </Routes>
        <Footer links={FooterLinks} />
      </body>
    </Router>
  );
}

export default App;

const NavBarLinks: Links = [["/overview", "Overview"]];

const FooterLinks: Links = [["/about", "About"]];
