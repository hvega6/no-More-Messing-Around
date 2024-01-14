import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from './Components/Nav.js';
import About from "./Components/about/About.js";
import Contact from "./Components/contact/Contact.js";
import Projects from "./Components/projects/Projects.js";
import Skills from "./Components/skills/Skills.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
