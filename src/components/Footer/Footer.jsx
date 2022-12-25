import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>anuragf45@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_rohitian_anurag_/?hl=en"><Insta color="white" size={"3rem"} /></a>
          <a href="https://m.facebook.com/rohitian.anurag.5/"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/anurag-srivastava-151448152/"> <Gitub color="white" size={"3rem"} /></a>
         
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
