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
            <Link href="https://www.linkedin.com/in/rushil-patel-062054bb/">
              <span className="linkedin">
                <AiFillLinkedin />
              </span>
            </Link>
            <Link href="https://github.com/rushilp2311">
              <span className="github">
                <FaGithubSquare />
              </span>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rushilp2311@gmail.com&tf=1">
              <span className="gmail">
                <SiGmail />
              </span>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Header;
