import "./Her0.css";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const Hero = () => {
  const [link, setLink] = useState("");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div className="hero">
      <input
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="Enter your text here"
      />
      <div className="qr">
        <QRCode value={link} /> 
      </div>
    </div>
  );
};

export default Hero;
