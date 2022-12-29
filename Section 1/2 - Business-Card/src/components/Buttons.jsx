import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function buttons() {
  return (
    <div className="buttons">
      <button className="email">
        <FaFacebookSquare fontSize={16} />
        Email
      </button>
      <a href="https://it.linkedin.com">
        <button className="linkedin">
          <FaLinkedin fontSize={16} />
          LinkedIn
        </button>
      </a>
    </div>
  );
}

export default buttons;
