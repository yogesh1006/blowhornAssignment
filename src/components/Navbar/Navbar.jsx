import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="hamnav">
      <label htmlFor="hamburger">
        <i className="fas fa-bars"></i>
      </label>
      <input type="checkbox" id="hamburger" style={{ visibility: "hidden" }} />
      <div id="hamitems">
        <div className="row">
          <h4>nullBrains.</h4>
        </div>
        <div className="nav_tabs">
          <ul className="row">
            <li className="nav_items">
              <a href="#home">Home</a>
            </li>
            <li className="nav_items">
              <a href="#features">Features</a>
            </li>
            <li className="nav_items">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav_items">
              <a href="#contacts">Contact</a>
            </li>
            <i className="fas fa-search fa-sm" style={{ color: "grey" }}></i>
          </ul>
        </div>
        <div className="row">
          <li className="links">
            <a href="#links">Sign In</a>
          </li>
          <li className="links ">
            <a className="active" href="#links">
              Sign Up
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
