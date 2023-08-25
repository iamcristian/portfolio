import "./Home.css";
import { home } from "../../data/common.json";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";

export const Home = () => {
  const { theme, setTheme, language, setLanguage } = useContext(GlobalContext);

  return (
    <div className={`main-container ${theme}`}>
      <div className="short">
        <h3 id="name">{`Cristian Arando </>`}</h3>
        <span className="job">{home.job[language]}</span>
      </div>

      <div className="details">{home.description[language]}</div>

      <div className="rrss">
        <ul>
          <span>{home.follow[language]}</span>
          <li>
            <a
              href="https://www.linkedin.com/in/cristian-arando"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedinSquare className="icon-rrss" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iamcristian"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="icon-rrss" />
            </a>
          </li>
          <li>
            <a
              className="yellow-button"
              href={`./CV_${language}.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <span id="download">{home.download[language]}</span>
              <HiDocumentDownload />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
