import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css"

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <h3 className="section_subtitle">My technical level</h3>

      <div className="skills_container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
