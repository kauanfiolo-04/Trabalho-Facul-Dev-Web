import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

import Navbar from "./components/layout/Navbar";
import Fotter from "./components/layout/Fotter";
import Container from "./components/layout/Container";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Fotter />
    </Router>
  );
};

export default App;
