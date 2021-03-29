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
            Improved Web Performance of the website using Lazy Loading,
            Optimizing Javascript, Optimizing images and videos, which resulted
            in an increase in performance score from 1-5 to 40.
          </li>
          <li>
            Cached Images and Videos using AWS Cloudfront. Saw significant
            improvements in performance.
          </li>
          <li>Using Redux for state management.</li>
          <li>Collaborating with the team using Git and Github.</li>
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
