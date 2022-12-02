import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Project/Project";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Projects />
    </Fragment>
  );
};

export default Home;
