import React from "react";

function Footer(props) {
  return (
    <footer className={props.darkMode ? 'footer-dark' : 'footer-light'}>
      <small> "© 2022 Endless development. All rights reserved."</small>
    </footer>
  );
}

export default Footer;
