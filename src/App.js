import './App.css';
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ContactMe from "./components/ContactMe/contactMe";
import React from "react";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
        <Home />
        <hr/>
        <Skills/>
        <hr/>
      <Projects />
        <hr/>
        <ContactMe/>
    </div>
  );
}

export default App;
