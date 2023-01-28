import React from "react";
import { Navbar } from "../navbar/navbar";
import { Leaderboard } from "../leaderboard/leaderboard";
import { Footer } from "../footer/footer";

export const LeaderboardPage = () => {
  return (
    <>
      <Navbar />
      <Leaderboard />
      <Footer />
    </>
  );
};
