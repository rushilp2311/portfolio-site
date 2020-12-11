import React from "react";
import Header from "../src/components/Header";
import Fade from "react-reveal/Fade";
const Page = () => {
  return (
    <div className="container">
      <Header />
      <Fade bottom cascade>
        <div className="welcome-container">
          <p className="welcome-container__hello">
            Hello There <span>👋</span>
          </p>
          <p className="welcome-container__description">
            I am a Computer Science student based in Toronto, Canada.
          </p>
          <button className="btn-blue">About me</button>
        </div>
      </Fade>
    </div>
  );
};

export default Page;
