import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navHeader">
        <h2 className="nav__logo">Video Call</h2>
      </div>
      <div className="navlist">
        <p>Join as Guest</p>
        <p>Register</p>
        <div role="button">
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
};
