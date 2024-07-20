import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:akhil99635@gmail.com" className="f-email">
          <span>akhil99635@gmail.com</span>
        </a>
        <div className="f-icons">
          <a href="https://www.instagram.com/im__akki___" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/patha-akhil/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/pathaakhil495" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
