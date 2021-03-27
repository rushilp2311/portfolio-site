import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About';
import Work from "./components/Work";

function App() {
  AOS.init({
    offset: 400,
    duration: 1000,
  });
  return (
    <div className="grid-container" style={{ overflowX: "hidden" }}>
      <div class="Navigation">
        <Header />
      </div>
      <div class="Welcome">
        <Main />
      </div>
      <div class="Work">
        <Work />
      </div>
      <div class="Project">
        <Projects />
      </div>
      <div class="About">
        <About />
      </div>
    </div>
  );
}

export default App;
