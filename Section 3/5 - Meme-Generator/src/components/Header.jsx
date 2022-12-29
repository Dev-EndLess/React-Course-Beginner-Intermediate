import React from "react";
import trollface from '../images/troll-face.png'

function Header() {
  return <div className="header">
    <img className="header--image" src={trollface} alt="LOGO" />
    <h1 className="header--title">Meme Generator</h1>
    <h3 className="header--project">React Course - Project 3</h3>
  </div>;
}

export default Header;
