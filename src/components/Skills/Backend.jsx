import { BiBadgeCheck } from "react-icons/bi";
import { skills } from "../../data/common.json";
import { GlobalContext } from "../../context/GlobalStateContext";
import { useContext } from "react";


const Backend = () => {

  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <div className="skills_content">
      <h3 className="skills_title">{skills.skills_title_backend[language]}</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Python</h3>
              <span className="skills_level">
                {skills.level_skills_proficient[language]}
              </span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Django</h3>
              <span className="skills_level">
                {skills.level_skills_proficient[language]}
              </span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Java</h3>
              <span className="skills_level">
                {skills.level_skills_competent[language]}
              </span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Nodejs</h3>
              <span className="skills_level">
                {skills.level_skills_basic[language]}
              </span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_level">
                {skills.level_skills_competent[language]}
              </span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">
                {skills.level_skills_competent[language]}
              </span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Docker</h3>
              <span className="skills_level">{skills.level_skills_basic[language]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
