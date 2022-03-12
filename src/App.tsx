import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "./images/profile.jpeg";
import { ReactComponent as ReactSVG } from "./images/React.svg";
import { ReactComponent as TypescriptSVG } from "./images/TypeScript.svg";
import { ReactComponent as JavascriptSVG } from "./images/Javascript.svg";
import { ReactComponent as NextjsSVG } from "./images/Nextjs.svg";
import { ReactComponent as SassSVG } from "./images/Sass.svg";
import { ReactComponent as JestSVG } from "./images/Jest.svg";
import { ReactComponent as ReduxSVG } from "./images/Redux.svg";
import { ReactComponent as FigmaSVG } from "./images/Figma.svg";
import { ReactComponent as NodeJsSVG } from "./images/NodeJs.svg";
import { ReactComponent as ElasticsearchSVG } from "./images/elasticsearch.svg";
import { ReactComponent as MongodbSVG } from "./images/Mongodb.svg";
import { ReactComponent as PostgresSVG } from "./images/Postgres.svg";
import { ReactComponent as WorkSVG } from "./images/work.svg";
import { ReactComponent as GithubSVG } from "./images/github.svg";
import { ReactComponent as LinkedInSVG } from "./images/linkedin.svg";

import Resume from "./resume.pdf";

import {
  PhoneIcon,
  MailIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/outline";

function App() {
  useEffect(() => {
    document.title = "Rushil Patel";
  }, []);

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.04,
      },
    },
  };

  const line1 = "👋 Hi I am Rushil Patel";
  const line2 = "Full stack Developer";
  const line3 = "based in Toronto, Canada 🇨🇦";

  return (
    <div className="w-full h-full pt-12 sm:pt-20 px-6 container mx-auto sm:px-6 lg:px-8">
      {/* Phone and Email */}
      <div className="w-full font-medium text-lg text-brand">
        <a href="tel:6476738995" target="_blank" rel="noreferrer">
          <div className="flex w-fit items-center">
            <PhoneIcon className="h-5 w-5 mr-2" /> 647-673-8995
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rushilp2311@gmail.com&tf=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex w-fit items-center my-3">
            <MailIcon className="h-5 w-5 mr-2" /> rushilp2311@gmail.com
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rushil-patel-062054bb/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex w-fit items-center my-3">
            <LinkedInSVG className="h-5 w-5 mr-2" /> Checkout my LinkedIn
          </div>
        </a>
      </div>
      {/* Welcome Heading and Profile */}
      <div className="my-16 sm:my-28 flex-col sm:flex-row flex sm:justify-between sm:items-center">
        <div className="flex w-fit flex-col items-start text-brand">
          <motion.h3
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {/* <p className="text-2xl font-medium my-1">
                👋 Hi I am Rushil Patel
              </p> */}
            <div className="text-2xl font-medium my-1">
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
            <div className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl xl:text-7xl my-1">
              {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
            <div className="font-serif text-3xl my-1">
              {line3.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </div>
          </motion.h3>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="flex items-center my-10 bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-800  active:ring active:ring-indigo-300">
              <DocumentDownloadIcon className="w-5 h-5 mr-2" />
              Download my Resume
            </button>
          </a>
        </div>
        <div>
          <img
            src={Profile}
            alt="profile"
            className="h-80 rounded-xl  content-center"
          />
        </div>
      </div>
      {/* About my work */}
      <div className="sm:mt-44 grid grid-cols-4 gap-x-5 items-center ">
        <div className="col-span-3">
          <div>
            <p className="font-medium text-indigo-600">ABOUT MY WORK</p>
          </div>
          <div className="text-brand mt-8 col-span-4">
            <p className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl my-1 ">
              1+ years of experience
            </p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-2">
              as a developer
            </p>
            <p className="mt-5 text-lg sm:text-xl text-zinc-700">
              I am currently working at{" "}
              <span className="text-2xl text-brand font-semibold underline cursor-pointer">
                <a
                  href="https://www.brokerbay.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Brokerbay
                </a>
              </span>{" "}
              as a Software engineer.
            </p>
            <p className="my-1 text-lg sm:text-xl text-zinc-700">
              I focus on both front-end and back-end. I also work on mobile side
              ocassionally.
            </p>
            <div className="flex flex-col sm:flex-row">
              <div className="my-14 max-w-md">
                <p className="text-brand text-2xl font-semibold">
                  FRONT-END DEVELOPMENT
                </p>
                <p className="text-md sm:text-xl text-zinc-700 w-fit">
                  I currently work in React and with legacy Angular code at my
                  current job. I have knowledge of Typescript and NextJS.
                </p>
                <div className="grid grid-cols-4 my-6 gap-y-4">
                  <ReactSVG className="h-12 w-12" />
                  <JavascriptSVG className="h-12 w-12" />
                  <TypescriptSVG className="h-12 w-12" />
                  <SassSVG className="h-12 w-12" />
                  <NextjsSVG className="h-12 w-12" />
                  <JestSVG className="h-12 w-12 fill-[#99415b]" />
                  <ReduxSVG className="h-12 w-12 fill-[#7e57c2]" />
                  <FigmaSVG className="h-12 w-12" />
                </div>
              </div>
              <div className="sm:my-14 max-w-md">
                <p className="text-brand text-2xl font-semibold">
                  BACK-END DEVELOPMENT
                </p>
                <p className="text-md sm:text-xl text-zinc-700 w-fit">
                  I have working knowledge of NodeJS, RESTful APIs, GraphQL. I
                  have worked with PostgreSQL, MongoDB and ElasticSearch.
                </p>
                <div className="grid grid-cols-4 my-6 gap-y-4">
                  <NodeJsSVG className="h-12 w-12" />
                  <ElasticsearchSVG className="h-12 w-12" />
                  <MongodbSVG className="h-12 w-12" />
                  <PostgresSVG className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 items-center justify-items-center md:block hidden">
          <WorkSVG className="w-96" />
        </div>
      </div>

      {/* Projects */}

      <div className="w-full sm:my-38 my-24">
        <p className="w-full text-center font-serif font-medium text-brand text-2xl sm:text-3xl md:text-4xl xl:text-5xl my-1 hover:underline hover:cursor-pointer">
          <a
            href="https://github.com/rushilp2311"
            target="_blank"
            rel="noreferrer"
          >
            Checkout my projects on{" "}
            <GithubSVG className="ml-6 h-12 w-12 inline" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
