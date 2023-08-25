import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css"
import { GlobalContext } from "../../context/GlobalStateContext";
import { useContext } from "react";

import {skills} from "../../data/common.json"

export const Skills = () => {

  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <section className={`skills section ${theme}`} id="skills">
      <h2 className="section_title">{skills.title[language]}</h2>
      <h3 className="section_subtitle">{skills.subtitle[language]}</h3>

      <div className="skills_container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
