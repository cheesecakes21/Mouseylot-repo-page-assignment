import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <FaGithub className="navbar-icon" />
      <FaLinkedinIn className="navbar-icon" />
      <FaSquareXTwitter className="navbar-icon" />
      &copy; Cynthia Chidera
    </footer>
  );
}

export default Footer;
