import React, { useState } from "react";
import "./levels.css";
import { getThumbnailFromId } from "./utils";
import { getYoutubeIdFromUrl } from "./utils";
import Tilt from "react-vanilla-tilt";

export const Levels = ({ levelsData }) => {
  const [levelDropdown, setLevelDropdown] = useState(-1);

  const renderLevelDropdown = (completions) => (
    <div className="level-dropdown-content">
      <div className="level-dropdown-content-header">Records</div>
      {completions.map((completion) => (
        <a className="level-dropdown-content-content" href={completion.link}>
          <div>{completion.user}</div>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <div className="list">
        {levelsData.map((level, placement) => (
          <section>
            <Tilt
              className={`level panel-${placement + 1}`}
              onClick={() =>
                setLevelDropdown(levelDropdown === placement ? -1 : placement)
              }
            >
              <div className="tilt-content">
                <img
                  className="level-thumbnail"
                  src={getThumbnailFromId(getYoutubeIdFromUrl(level.vid))}
                  width="320"
                  height="180"
                />
                <div className="level-content">
                  <div className="level-title">
                    #{placement + 1} - {level.title}
                  </div>
                  <div className="level-author">{level.author}</div>
                </div>
              </div>
              <div
                className="level-dropdown"
                onClick={() =>
                  setLevelDropdown(levelDropdown === placement ? -1 : placement)
                }
              >
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </Tilt>

            {levelDropdown === placement &&
              renderLevelDropdown(level.completions)}
          </section>
        ))}
      </div>
    </>
  );
};
