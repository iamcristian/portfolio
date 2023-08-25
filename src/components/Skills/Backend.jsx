import { BiBadgeCheck} from "react-icons/bi";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Python</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Django</h3>
              <span className="skills_level">Proficient</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Java</h3>
              <span className="skills_level">Competent</span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Nodejs</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_level">Competent</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">Competent</span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Docker</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
