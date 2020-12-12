import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Header = () => {
  return (
    <>
      <Fade bottom cascade>
        <div className="header">
          <div className="header__left">
            <Link href={`/`}>
              <p className="logo">Rushil Patel</p>
            </Link>
            <p>rushilp2311@gmail.com</p>
          </div>
          <div className="header__right">
            <span className="linkedin">
              <AiFillLinkedin />
            </span>
            <span className="github">
              <FaGithubSquare />
            </span>
            <span className="gmail">
              <SiGmail />
            </span>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Header;
