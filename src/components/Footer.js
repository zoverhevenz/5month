import React from "react";
import insta from "../img/insta.svg";
import teleg from "../img/teleg.svg";

function Footer() {
  return (
    <footer>
      <div className="social_media">
        <img src={insta} alt="instagram" />
        <h3>geeks_edu</h3>
      </div>
      <div className="social_media">
        <img src={teleg} alt="telegram" />
        <h3>overh3eavenn</h3>
      </div>
    </footer>
  );
}

export default Footer;
