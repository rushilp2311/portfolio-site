import React from "react";

function About() {
  return (
    <div className="about__container">
      <h2 className="title">About me</h2>
      <div className="info">
        <div className="image">
          <img src="https://picsum.photos/id/237/400/400" alt="me" />
        </div>
        <div>
          <p>
            As a software engineer, I love both frontend and backend. I will be
            graduating from York University with a Computer Science degree. I
            love solving problems and love to draw.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Work Experience</h2>
      </div>
    </div>
  );
}

export default About;
