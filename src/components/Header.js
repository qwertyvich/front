import React from "react";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

function Header({ theme, onToggleTheme }) {
  const icon = theme === "dark" ? sunIcon : moonIcon;

  return (
    <header className="header">
      <img
        src={icon}
        alt="Toggle Theme"
        className="theme-toggle-icon"
        onClick={onToggleTheme}
      />
    </header>
  );
}

export default Header;