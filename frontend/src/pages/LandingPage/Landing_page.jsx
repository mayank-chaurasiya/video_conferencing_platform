import React from "react";
import "./Landing_page.css";
import { Navbar } from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

const Landing_page = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="landingPageContainer">
        <div className="landingPageContainer__left">
          <p>
            <span className="connect_text">Connect</span> with your loved ones
          </p>
          <p>Cover a distance by Video Call</p>
          <div role="button" className="getStarted__btn">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div className="landingPageContainer__right">
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
