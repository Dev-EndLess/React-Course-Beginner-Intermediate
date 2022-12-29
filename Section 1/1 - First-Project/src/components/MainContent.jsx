import React from "react";

function MainContent(props) {
  return (
    <div className={props.darkMode ? 'main-content-dark' : 'main-content-light'}>
      <h1 className='h1-main'>Fun facts about React</h1>
      <ul className="ul-content">
        <li>Was fist released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stats on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default MainContent;
