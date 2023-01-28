import React, { useState } from "react";
import "./game-selector.css";
import { Link } from "react-router-dom";

export const links = [
  "gd",
  "irl",
  "l4d2",
  "devil-daggers",
  "hyper-demon",
  "celeste",
];

export const Gameselector = () => {
  const [selectedLink, setSelectedLink] = useState("gd");

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="dropdown">
      {links.map((link) => (
        <Link
          to={`/${link}`}
          key={link}
          onClick={() => handleClick(link)}
          className={`tab ${
            link === selectedLink ? "selected-link" : "normal-link"
          }`}
        >
          {link.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
