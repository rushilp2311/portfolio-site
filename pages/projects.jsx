import React, { useEffect } from "react";
import Header from "../src/components/Header";
import Head from "next/head";
import Link from "next/link";
import Project from "../src/components/Project";
const Projects = () => {
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = " #f7e05f";
    return () => {
      bodyElement.style.backgroundColor = " #faf9f9";
    };
  }, []);
  return (
    <>
      <Head>
        <html lang="en" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>Projects | Rushil Patel</title>
      </Head>

      <div className="projects-container">
        <Header />

        <div className="projects-header">
          <p>Projects.</p>
        </div>
        <div className="projects-list">
          <Project
            name="Bug Trackr"
            description="This a bug tracking website build using MERN stack. Collaborate with your team to make your software bug free."
            liveLink="https://focused-ramanujan-1df165.netlify.app/"
            codeLink="https://github.com/rushilp2311/bug-trackr"
            note=""
            image="/static/bugtrackr.png"
            technologiesUsed={[
              "SCSS",
              "Javascript",
              "ReactJs",
              "Postman",
              "NodeJs",
              "ExpressJs",
              "Git",
            ]}
          />
          <Project
            name="Mom&Pop BookStore"
            description="The Ecommerce site for buying books online. Built using ReactJs in Frontend and Spring Boot in Backend. This was a group project."
            liveLink="https://frontend-4413.herokuapp.com/"
            codeLink="https://github.com/rushilp2311/4413-Frontend"
            note="Might take couple of reload. The site is deployed on heroku and needs to restart dyno."
            image="/static/book.png"
            technologiesUsed={[
              "SCSS",
              "Javascript",
              "ReactJs",
              "Spring Boot",
              "Postman",
              "Git",
            ]}
          />
          <Project
            name="Think Piece"
            description="This is blogging website build with React and Firebase. The site has OAuth Login with Google and uses SCSS for styling"
            liveLink="https://think-piece-d4578.firebaseapp.com/"
            codeLink="https://github.com/rushilp2311/Think-Piece"
            note=""
            image="/static/think.png"
            technologiesUsed={[
              "SCSS",
              "Javascript",
              "ReactJs",
              "Firebase",
              "Git",
            ]}
          />
        </div>
        <Link href="https://github.com/rushilp2311">
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p className="other-projects">
              Checkout my other projects on Github
            </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Projects;
