import React from 'react';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

/**
 * Header с логотипом/названием, иконкой переключения темы и т.д.
 * Принимает:
 *   - theme (string) – текущая тема, 'light' или 'dark'
 *   - toggleTheme (function) – колбэк для переключения
 */
function Header({ theme, toggleTheme }) {
  const icon = theme === 'dark' ? sunIcon : moonIcon;

  return (
    <header className="header">
      <div>Supertros Industries</div>
      <img
        src={icon}
        alt="Toggle Theme"
        className="theme-toggle-icon"
        onClick={toggleTheme}
      />
    </header>
  );
}

export default Header;
