import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Levels } from "../levels/levels";
import { Gameselector } from "../game-selector/game-selector";

export const LevelsPage = ({ levelsData }) => {
  return (
    <>
      <Navbar />
      <Gameselector />
      <Levels levelsData={levelsData} />
      <Footer />
    </>
  );
};
