import React from "react";
import reactLogo from "../images/logo512.png";

function Header(props) {
  return (
    <nav className={props.darkMode ? "nav-bar-dark" : "nav-bar-light"}>
      <div className="nav-title-logo">
        <h1> React Facts </h1>
        <img className="nav-logo" src={reactLogo} />
      </div>
      <div className="toggler">
        <p className="toggler--dark">Dark</p>
        <div 
        className={ props.darkMode ? "toggler--slider--dark" : "toggler--slider--light"}
        onClick={props.toggle}>
          <div 
          className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--light">Light</p>
      </div>
      {/* <ul className='nav-items'>
        <li>Pricing</li>
        <li>Contact</li>
        <li>About</li>
      </ul> */}
    </nav>
  );
}

export default Header;
