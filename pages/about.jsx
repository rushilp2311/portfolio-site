import React, { useEffect } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Head from "next/head";
import Header from "../src/components/Header";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { useRouter } from "next/router";
import {
  SiNextDotJs,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiRedux,
  SiJest,
  SiGit,
} from "react-icons/si";
const About = () => {
  const router = useRouter();
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = " #2d27c9";
    return () => {
      bodyElement.style.backgroundColor = " #faf9f9";
    };
  }, []);

  return (
    <div className="about-container">
      <Head>
        <html lang="en" />
        <title>About Me | Rushil Patel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Fade bottom cascade>
        <div className="about-section">
          <div className="image-container">
            <Image
              src="/static/logo.png"
              loading="eager"
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
              As a software engineer, I love both frontend and backend. I will
              be graduating from York University with a Computer Science degree.
              I love solving problems and love to draw.
            </p>
            {/* <button className="btn-white">
              <a href="/Rushil Patel_Software_Engineer.pdf">Resume</a>
            </button> */}
          </div>
        </div>
        <div className="experience-section">
          <p>Experience</p>
          <p>React Developer</p>
          <p>Drawpi.com</p>
          <p>
            <ul>
              <li>React Developer Drawpi.com</li>
              <li>
                Developed and implement highly-responsive user interface
                components using React concepts.
              </li>
              <li> Monitoring and improving front-end perfomance.</li>
              <li> Troubleshooting and debugging application codes.</li>
            </ul>
          </p>
        </div>
        <div className="skills-section">
          <p className="skills-heading">Skills</p>
          <div className="skills-grid">
            <p className="skill">
              <span>
                <FaReact />
              </span>
              ReactJs
            </p>
            <p className="skill">
              <span>
                <FaNodeJs />
              </span>
              NodeJs
            </p>
            <p className="skill">
              <span>
                <SiTypescript />
              </span>
              Typescript
            </p>
            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              Javascript
            </p>
            <p className="skill">
              <span>
                <SiRedux />
              </span>
              Redux
            </p>
            <p className="skill">
              <span>
                <SiNextDotJs />
              </span>
              NextJs
            </p>
            <p className="skill">
              <span>
                <SiJest />
              </span>
              Jest
            </p>
            <p className="skill">
              <span>
                <FaSass />
              </span>
              Sass/SCSS
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="skill">
              <span>
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiFigma />
              </span>
              Figma
            </p>
            <p className="skill">
              <span>
                <SiJava />
              </span>
              Java
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
          </div>
        </div>
        <div className="project">
          <button
            className="btn-yellow"
            onClick={(e) => router.push("/projects")}
          >
            Checkout my Work
          </button>
        </div>
      </Fade>
    </div>
  );
};
export default About;
