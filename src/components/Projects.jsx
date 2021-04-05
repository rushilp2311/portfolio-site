import React from "react";
import Book from "../assets/book.png";
import Think from "../assets/think.png";
import Issue from "../assets/issue.png";

function Projects() {
  return (
    <div className="project__container" style={{ overflowX: "hidden" }}>
      <h2 className="title">Some of my Projects</h2>
      <section
        className="card"
        // data-aos="fade-right"
        style={{ overflowX: "hidden" }}
      >
        <img src={Issue} alt="card 1" />
        <div>
          <h3>Issue Tracker</h3>
          <ul>
            <li>
              Issue Tracking Project similar to JIRA build with . It is
              primarily build to track issues among teams.
            </li>
            <li>
              Some of the functionalities include sorting issues based on
              sprint, chat and a beautiful dashboard visualizing your progress.
            </li>

            <li>
              Tech Used: ReactJS, NodeJS, Express, PostgresSQL, SCSS, Redux
            </li>
          </ul>
          <p style={{ color: "red" }}>Note: Work in Progress</p>
          <div className="btns">
            <p className="live__btn disabled__btn">Live</p>
            <a
              href="https://github.com/rushilp2311/issue_tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>
      <section className="card" data-aos="fade-left">
        <img src={Book} alt="card 1" />
        <div>
          <h3>Mom & Pop Book Store</h3>
          <ul>
            <li>Build Online Ecommerce Website for Books.</li>
            <li>
              Used over 28000 books data for the website without affecting the
              web performance. Implemented pagination on both frontend and
              backend to reduce network payload.
            </li>
            <li>Collaborated with team using Git and Github.</li>
            <li>Tech Used: ReactJS, Spring Boot, IBM DB2.</li>
          </ul>
          <p style={{ color: "red" }}>
            Note: Might take few seconds to load. Deployed on Free Tier on
            Heroku
          </p>
          <div className="btns">
            <a
              href="https://frontend-4413.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="live__btn">Live</p>
            </a>
            <a
              href="https://github.com/rushilp2311/4413-Backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>

      <section className="card" data-aos="fade-right">
        <img src={Think} alt="card 1" />
        <div>
          <h3>Think Piece</h3>
          <ul>
            <li>Online Blogging website.</li>
            <li>Implemented OAuth with Google. Live update of data.</li>
            <li>Built with React and Google Firebase.</li>
            <li>Tech Used: ReactJS, SCSS, Google Firebase.</li>
          </ul>
          <div className="btns">
            <a
              href="https://think-piece-d4578.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="live__btn">Live</p>
            </a>
            <a
              href="https://github.com/rushilp2311/Think-Piece"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
