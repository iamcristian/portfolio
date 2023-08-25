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
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          {/* html */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Node</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          {/* css */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Firebase</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          {/* javascript  */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Express</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          {/* react */}
          <div className="skills_data">
            <BiBadgeCheck className="check_icon"/>

            <div>
              <h3 className="skills_name">Nextjs</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
