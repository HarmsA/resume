import './App.css';
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ContactMe from "./components/ContactMe/contactMe";
import React from "react";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">

        <Home />
        <hr/>
        <Skills/>
        <hr/>
      <Projects />
        <hr/>
        <ContactMe />
        </div>
    </div>
  );
}

export default App;
