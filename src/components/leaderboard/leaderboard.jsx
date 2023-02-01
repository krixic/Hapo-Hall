import React, { useState } from "react";
import "./leaderboard.css";
import "../game-selector/game-selector.css";
import { getScore, getPlacement, scoreDecimal } from "./score";

import {
  celestelevels,
  devildaggerslevels,
  gdlevels,
  hyperdemonlevels,
  irllevels,
  l4d2levels,
} from "../../data/levels-data";

function getScoreByUser(array, username) {
  let userScores = [];
  let totalScore = 0;

  Object.values(array).forEach((level, index) => {
    level.completions.forEach((completion) => {
      if (completion.user === username) {
        let score = getScore(index + 1);
        userScores.push(score);
        totalScore += parseFloat(score);
      }
    });
  });

  return [userScores, totalScore];
}

export const Leaderboard = () => {
  const [selectedLink, setSelectedLink] = useState("celeste");
  const [currentArray, setCurrentArray] = useState("celestelevels");
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

  const sortedUserList = getUniqueUsers(allLevels[currentArray])
    .map((user, index) => ({
      id: index,
      value: getScoreByUser(allLevels[currentArray], user)[1],
      user,
    }))
    .sort((a, b) => b.value - a.value);

  const scoreArray = getScoreByUser(
    allLevels[currentArray],
    sortedUserList[activeButtonIndex].user
  )[0];

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
        <div className="user-list-container">
          {sortedUserList.map((obj, index) => {
            return (
              <div className="user-list-row">
                <div className="user-placement">{`#${index + 1}`}</div>
                <div className="user-score">
                  {obj.value.toFixed(scoreDecimal)}
                </div>
                <div className="username">
                  <button
                    className={activeButtonIndex === index && "active-button"}
                    onClick={() => setActiveButtonIndex(index)}
                  >
                    {obj.user}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="user-info">
          <div className="user-info-heading">
            <div className="user-info-placement">#{activeButtonIndex + 1}</div>
            <div className="user-info-title">
              {sortedUserList[activeButtonIndex].user}
            </div>
          </div>
          <div className="user-info-score">
            {getScoreByUser(
              allLevels[currentArray],
              sortedUserList[activeButtonIndex].user
            )[1].toFixed(scoreDecimal)}
          </div>
          <div className="user-info-completed">{`Completed (${scoreArray.length})`}</div>
          <div className="user-info-completed-content">
            {scoreArray.map((score, index) => (
              <>
                <div className="user-info-completed-placement">
                  #{getPlacement(score) + 1}
                </div>
                <div className="user-info-completed-level">
                  {allLevels[currentArray][getPlacement(score)].title}
                  {console.log(getPlacement(score))}
                </div>

                <div className="user-info-completed-score">+{score}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
