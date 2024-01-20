import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/about/About.js";
import Background from "./Components/background/Background.js";
import Contact from "./Components/contact/Contact.js";
import Nav from './Components/nav/Nav.js';
import PlaterStats from "./Components/playerStats/PlayerStats.js";
import Projects from "./Components/projects/Projects.js";
import Skills from "./Components/skills/Skills.js";
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlaterStats />
    </Router>
  );
};

export default App;
