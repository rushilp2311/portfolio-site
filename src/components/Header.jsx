import React from "react";
import Fade from "react-reveal/Fade";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <>
      <Fade bottom cascade>
        <div className="header">
          <div className="header__left">
            <p className="logo">Rushil Patel</p>
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
