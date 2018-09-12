import React, { Component } from "react";

import Header from "./components/Header.js";
import Skills from "./components/Skills.js";
//import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
