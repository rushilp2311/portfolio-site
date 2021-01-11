import React from "react";
import Header from "../src/components/Header";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Rushil Patel</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <div className="container">
        <Header />
        <div className="welcome-container">
          <Fade bottom cascade>
            <p className="welcome-container__hello">
              Hello There <span>👋</span>
            </p>
          </Fade>
          <p className="welcome-container__description">
            I am a Computer Science student based in Toronto, Canada.
          </p>

          <button className="btn-blue" onClick={(e) => router.push(`/about`)}>
            About me
          </button>
          <Link href={`/projects`}>
            <p className="project-link">Checkout my Work</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
