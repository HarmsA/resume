import './App.css';
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ContactMe from "./components/ContactMe/contactMe";
import React, { useState } from "react";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header";

function App() {
    const [iframeHeight, setIframeHeight] = useState('63%');

    const toggleIframeHeight = () => {
    setIframeHeight(iframeHeight === '63%' ? '10%' : '63%');
    };
  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">

        <Home />
        <div className="iframeContainer" style={{ height: iframeHeight }}>
        <button className="toggleButton" onClick={toggleIframeHeight}>
            {iframeHeight === '63%' ? '-' : 'X'}
          </button>
            <iframe src="https://adamschatbotforfaqs-51015.chipp.ai" height="800px" width="100%" frameborder="0" title="Adam's Chatbot for FAQs"></iframe>
        </div>

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
