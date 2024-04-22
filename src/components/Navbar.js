import React from "react";
import { FaGithub } from "react-icons/fa";
import "../App.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <FaGithub className="navbar-icon" />
        <h1 className="navbar-title">MOUSEYLOT'S REPOSITORIES</h1>
      </nav>
    </header>
  );
}

export default Navbar;
