import { useContext } from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { GlobalContext } from "../../context/GlobalStateContext";

import {skills} from "../../data/common.json"

const Frontend = () => {

  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <div className="skills_content">
      <h3 className="skills_title">{skills.skills_title_frontend[language]}</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">
                {skills.level_skills_proficient[language]}
              </span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">
                {skills.level_skills_proficient[language]}
              </span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">
                {skills.level_skills_proficient[language]}
              </span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">
                {skills.level_skills_competent[language]}
              </span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">TypeScript</h3>
              <span className="skills_level">
                {skills.level_skills_competent[language]}
              </span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Tailwind</h3>
              <span className="skills_level">
                {skills.level_skills_basic[language]}
              </span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">{skills.patrones[language]}</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
