import React, { useState } from "react";
import "./game-selector.css";
import { Link } from "react-router-dom";

export const links = [
  "celeste",
  "devil-daggers",
  "gd",
  "hyper-demon",
  "irl",
  "l4d2",
];

export const Gameselector = () => {
  const [selectedLink, setSelectedLink] = useState("celeste");

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
          {link.toUpperCase().replace(/-/g, "")}
        </Link>
      ))}
    </div>
  );
};
