import React from "react";
import Header from "../src/components/Header";
import Fade from "react-reveal/Fade";
import Head from "next/head";
import { useRouter } from "next/router";
const Page = () => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Rushil Patel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Fade bottom cascade>
        <div className="welcome-container">
          <p className="welcome-container__hello">
            Hello There <span>👋</span>
          </p>
          <p className="welcome-container__description">
            I am a Computer Science student based in Toronto, Canada.
          </p>

          <button className="btn-blue" onClick={(e) => router.push(`/about`)}>
            About me
          </button>
          <p className="project-link">Checkout my Work</p>
        </div>
      </Fade>
    </div>
  );
};

export default Page;
