import React from "react";

// Route should be wrapped by div tag
const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__info">
          <h1 className="logo">
            <a href="/">Rei</a>
          </h1>
        </div>
        <nav className="nav">
          <ul className="navList">
            <li className="navList__item navList__item01">
              <a href="#about">About</a>
            </li>
            <li className="navList__item navList__item02">
              <a href="#projects">Works</a>
            </li>
            <li className="navList__item navList__item03">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;