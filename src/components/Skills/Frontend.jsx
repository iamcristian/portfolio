import { BiBadgeCheck } from "react-icons/bi";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Competent</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">TypeScript</h3>
              <span className="skills_level">Competent</span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">Tailwind</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon" />

            <div>
              <h3 className="skills_name">JS Design Patterns</h3>
              <span className="skills_level"></span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Frontend;
