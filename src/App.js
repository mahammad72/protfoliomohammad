import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Expriance from "./Components/Expriance";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Expriance />

    <SocialLinks />
  </div>
);

export default App;
