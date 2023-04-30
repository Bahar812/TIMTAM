import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">
        <h1>TIM TAM</h1>
      </div>
      <div className="navbar_links">
        <Link to="/" className="navbar_link">
          Home
        </Link>
        <Link to="/about" className="navbar_link">
          About Us
        </Link>
        <Link to="/game" className="navbar_link">
          Games
        </Link>
        <Link to="/note" className="navbar_link">
          Notes
        </Link>
        <Link to="/article" className="navbar_link">
          Articles
        </Link>
        <Link to="/contact" className="navbar_link">
          Contact Us
        </Link>
      </div>
      <div>
        <Link className="navbar_btn" to="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
