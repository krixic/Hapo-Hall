import React, { useState, useRef } from "react";
import "./leaderboard.css";
import "../game-selector/game-selector.css";

import {
  celestelevels,
  devildaggerslevels,
  gdlevels,
  hyperdemonlevels,
  irllevels,
  l4d2levels,
} from "../../data/levels-data";

export const Leaderboard = () => {
  const [selectedLink, setSelectedLink] = useState("gd");
  const [currentArray, setCurrentArray] = useState("gdlevels");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const allLevels = {
    celestelevels,
    devildaggerslevels,
    gdlevels,
    hyperdemonlevels,
    irllevels,
    l4d2levels,
  };

  const getUniqueUsers = (levels) => {
    const uniqueUsers = [];

    levels.forEach((level) =>
      level.completions.forEach((completion) => {
        if (!uniqueUsers.includes(completion.user)) {
          uniqueUsers.push(completion.user);
        }
      })
    );

    return uniqueUsers;
  };

  const placementRef = useRef(null);
  const usernameRef = useRef(null);

  return (
    <div>
      <div className="dropdown">
        {Object.entries(allLevels).map(([key]) => (
          <a
            key={key}
            className={`tab ${
              key.slice(0, -6) === selectedLink
                ? "selected-link"
                : "normal-link"
            }`}
            onClick={() => {
              setCurrentArray(key);
              setSelectedLink(key.slice(0, -6));
              setActiveButtonIndex(0);
            }}
          >
            {key.slice(0, -6).toUpperCase()}
          </a>
        ))}
      </div>
      <div className="main">
        <table className="user-list">
          {getUniqueUsers(allLevels[currentArray]).map((user, index) => (
            <tr className="user-list-row">
              <td ref={placementRef} className="user-placement">{`#${
                index + 1
              }`}</td>
              <td className="username">
                <button
                  ref={usernameRef}
                  className={activeButtonIndex === index && "active-button"}
                  onClick={() => setActiveButtonIndex(index)}
                >
                  {user}
                </button>
              </td>
            </tr>
          ))}
        </table>

        <div className="user-info">
          <div className="user-info-placement">#{activeButtonIndex + 1}</div>
          <div className="user-info-title">
            {getUniqueUsers(allLevels[currentArray])[activeButtonIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};
