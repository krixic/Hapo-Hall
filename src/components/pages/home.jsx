import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Banner } from "../banner/banner";
import { Spacer } from "../spacer/spacer";
import { Creditschangelog } from "..//creditschangelog/creditschangelog";
import { Github } from "../github/github";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Spacer text={"Written in React"} />
      <Github />
      <Spacer text={"Actively Maintained"} />
      <Creditschangelog />
      <Footer />
    </div>
  );
};
