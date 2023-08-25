import { Link } from "react-router-dom";

import { GiWorld } from "react-icons/gi";
import { ReactComponent as SunIcon } from "../../assets/icons-theme/sun-icon.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons-theme/moon-icon.svg";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";

import { header } from "../../data/common.json"

import './Header.css'

const Header = () => {

  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLanguageChange = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <Link to="/">
          <GiWorld className={`logo-nav ${theme}`} />
        </Link>

        <nav className="navbar">
          <ul id="nav">
            <li className="inav">
              <Link className="links" to="/">
                {header.home[language]}
              </Link>
            </li>
            <li className="inav">
              <Link className="links" to="/about/">
                {header.about[language]}
              </Link>
            </li>
            <li className="inav">
              <Link className="links" to="/skills/">
                {header.skills[language]}
              </Link>
            </li>
            {/* <li className="inav">
              <Link className="links" to="/experience/">
                {header.experience[language]}
              </Link>
            </li> */}
            <li className="inav">
              <Link className="links" to="/Contact/">
                {header.contact[language]}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="settings">
          <div className="icon-theme">
            {theme === "dark" ? (
              <SunIcon className="moonlight" onClick={handleThemeChange} />
            ) : (
              <MoonIcon onClick={handleThemeChange} />
            )}
          </div>
          <span className="language" onClick={handleLanguageChange}>
            {language}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
