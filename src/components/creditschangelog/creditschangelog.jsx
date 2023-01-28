import React from "react";
import "./creditschangelog.css";
import { credits } from "../../data/_credits";

export const Creditschangelog = () => {
  const roleIconMap = {
    owner: "fa-crown",
    admin: "fa-user-gear",
    helper: "fa-user-shield",
    dev: "fa-code",
  };
  return (
    <div className="creditschangelog">
      <div class="credits">
        <div className="credits-header">Contact</div>
        <div className="credits-content">
          {credits.map((credit) => (
            <span>
              <a className={`credit ${credit.rank}`} href={credit.social}>
                <i className={`fa-solid ${roleIconMap[credit.rank]}`}></i>
                {credit.username}
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="verticalspacer"></div>
      <div class="changelog">
        <div className="changelog-header">Changelog</div>
        <div className="changelog-content">
          <ul>
            <li className="changelog-item">1.0.0 - Release</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
