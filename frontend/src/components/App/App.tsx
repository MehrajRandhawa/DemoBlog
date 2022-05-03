import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar, { Links } from "../NavBar/NavBar";
import Overview from "../../pages/Overview";
import LogoIcon from "../Icons/LogoIcon";
import Footer from "../Footer/Footer";
import Upload from "../../pages/Upload";
import Article from "../../pages/Article";

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
          <Route path="/" element={<Overview />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
        </Routes>
        <Footer links={FooterLinks} />
      </body>
    </Router>
  );
}

export default App;

const NavBarLinks: Links = [
  ["/overview", "Overview"],
  ["/about", "About"],
];

const FooterLinks: Links = [
  ["/overview", "Overview"],
  ["/upload", "Upload"],
  ["/about", "About"],
];
