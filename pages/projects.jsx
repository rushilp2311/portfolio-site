import React, { useEffect } from "react";
import Header from "../src/components/Header";
import Head from "next/head";
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
    <div className="projects-container">
      <Head>
        <html lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Projects | Rushil Patel</title>
      </Head>
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
          image="/static/bugtrackr.png"
          technologiesUsed={[
            "HTML/CSS",
            "Javascript",
            "ReactJs",
            "NodeJs/ExpressJs",
            "Git",
          ]}
        />
        <Project
          name="Bug Trackr"
          description="This a bug tracking website build using MERN stack. Collaborate with your team to make your software bug free."
          liveLink=""
          codeLink=""
          image="/static/bugtrackr.png"
          technologiesUsed={[
            "HTML/CSS",
            "Javascript",
            "ReactJs",
            "NodeJs/ExpressJs",
            "Git",
          ]}
        />
        <Project
          name="Bug Trackr"
          description="This a bug tracking website build using MERN stack. Collaborate with your team to make your software bug free."
          liveLink=""
          codeLink=""
          image="/static/bugtrackr.png"
          technologiesUsed={[
            "HTML/CSS",
            "Javascript",
            "ReactJs",
            "NodeJs/ExpressJs",
            "Git",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
