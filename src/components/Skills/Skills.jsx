import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css"
import { GlobalContext } from "../../context/GlobalStateContext";
import { useContext } from "react";

export const Skills = () => {

  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <section className={`skills section ${theme}`} id="skills">
      <h2 className="section_title">Skills</h2>
      <h3 className="section_subtitle">My technical level</h3>

      <div className="skills_container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
