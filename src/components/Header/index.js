import React from "react";

import netflixLogo from "../../assets/netflix-logo.png";
import netflixUser from "../../assets/netflix-user.png";

import "./styles.css";

export default function Header({ scroll }) {
  return (
    <header className={scroll ? "scroll" : ""}>
      <div className="header__logo">
        <a href="/#">
          <img src={netflixLogo} alt="netflix logo" />
        </a>
      </div>
      <div className="header__user">
        <a href="/#">
          <img src={netflixUser} alt="netflix user" />
        </a>
      </div>
    </header>
  );
}
