import React from "react";
import "./Nav.css";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="heading">QR - Engine</div>
      <p>Create your own QR 
      designed with ❤️ by&nbsp;<a href="/" >nirmalyax</a></p>

      <div className="icon">
        <FaGithub/>
      </div>
    </div>
  );
}
