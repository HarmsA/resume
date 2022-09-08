import './App.css';
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ContactMe from "./components/contactMe";
import React from "react";

function App() {
  return (
    <div className="App">
        <Home />
        <hr/>
      <Projects />
        <hr/>
        <ContactMe/>
    </div>
  );
}

export default App;
