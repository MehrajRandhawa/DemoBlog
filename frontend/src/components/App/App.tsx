import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar, { Links } from "../NavBar/NavBar";
import Overview from "../../pages/Overview";
import LogoIcon from "../Icons/LogoIcon";

function App() {
  return (
    <React.Fragment>
      <Router>
        <header>
          <NavBar links={NavBarLinks} icon={<LogoIcon height="64" width="64"/>}/>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
          </Routes>
        </body>
      </Router>
    </React.Fragment>
  );
}

export default App;

const NavBarLinks: Links = [
  ["/overview", "Overview"],
  ["/upload", "Upload"],
  ["/about", "About"],
];
