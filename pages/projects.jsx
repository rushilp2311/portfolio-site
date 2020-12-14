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
        <title>Projects | Rushil Patel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <div className="projects-header">
        <p>Projects.</p>
      </div>
      <div className="projects-list">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
