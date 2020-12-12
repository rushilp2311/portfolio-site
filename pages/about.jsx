import React, { useEffect } from "react";
import Image from "next/image";
import Header from "../src/components/Header";
const About = () => {
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = " #2d27c9";
    return () => {
      bodyElement.style.backgroundColor = " #faf9f9";
    };
  }, []);

  return (
    <div className="about-container">
      <Header />
      <div className="about-section">
        <div className="image-container">
          <Image
            src="/static/logo.png"
            loading="lazy"
            layout="fixed"
            quality={100}
            width={150}
            height={150}
            alt="Rushil Patel"
            className="image"
          />
        </div>
        <div className="about-info">
          <p>About Me</p>
          <p>
            As a software engineer, I love both frontend and backend. I will be
            graduating from York University with a Computer Science degree. I
            love solving problems and love to draw.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
