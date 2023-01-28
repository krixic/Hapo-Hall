import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerHeight = offset > 1 ? { height: "50px" } : {};
  const logoSize = offset > 1 ? { fontSize: "32px" } : {};

  return (
    <nav className="header" style={headerHeight}>
      <strong>
        <h1>
          <Link to="/" className="hapo-logo" style={logoSize}>
            HAPO
          </Link>
        </h1>
      </strong>
      <div>
        <button className="dropdown-button">
          <Link to="/gd">List</Link>
        </button>
      </div>
      <div>
        <button className="leaderboard-button link">
          <Link to="/leaderboard">Leaderboard</Link>
        </button>
      </div>
    </nav>
  );
};
