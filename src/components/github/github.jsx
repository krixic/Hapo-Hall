import React from "react";
import "./github.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Github = () => {
  return (
    <div className="github">
      <div className="github-button-container">
        <button href="#" className="github-button">
          GitHub
          <FontAwesomeIcon className="fa-github" icon={faGithub} />
        </button>
      </div>
      <div className="github-text-container">
        <div className="github-title">Open-sourced project</div>
        <div className="github-subtitle">
          See the full code of the website on GitHub
        </div>
        <div className="github-heading">
          Feel free to use this template, but make sure that you are crediting
          us somewhere, and are explicitly not affiliated with us
        </div>
      </div>
    </div>
  );
};
