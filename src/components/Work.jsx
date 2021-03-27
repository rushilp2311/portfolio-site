import React from "react";

function Work() {
  return (
    <div className="experience-section">
      <h2 className="title">Work Experience</h2>
      <div className="job">
        <p className="job__title">Frontend Developer</p>
        <p className="company__name">Moralyzer</p>

        <ul className="job__points">
          <li>
            Developed and implement highly-responsive user interface components
            using React concepts.
          </li>
          <li> Using Redux for state management.</li>
          <li> Using Material UI for theming.</li>
        </ul>
      </div>
      <div className="job">
        <p className="job__title">React Developer</p>
        <p className="company__name">Drawpi.com</p>

        <ul className="job__points">
          <li>
            Developed and implement highly-responsive user interface components
            using React concepts.
          </li>
          <li> Monitoring and improving front-end perfomance.</li>
          <li> Troubleshooting and debugging application codes.</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
