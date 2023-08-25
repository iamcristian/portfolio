import "./About.css";
import { about } from "../../data/common.json";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import ChatBot from "../ChatBot/Chat";

export const About = () => {
  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <>
      <div className={`container-about ${theme}`}>
        <div className="content">
          <h1>{about.title[language]}</h1>
          <p>{about.description[language]}</p>
          <div className="personal-data">
            <span className="label">{about.email[language]}:</span>
            <span className="text">cristianarandosyse@gmail.com</span>
          </div>
          <div className="personal-data">
            <span className="label">{about.place[language]}:</span>
            <span className="text">Cochabamba, Bolivia</span>
          </div>
        </div>

        <ChatBot/>
      </div>
    </>
  );
};
