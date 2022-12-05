import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import classes from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <Fragment>
      <Hero isDynamic>
        <h2 className={classes.aboutme__content__title}>testing the format</h2>
        <span className={classes.aboutme__content__tagline}>
          A Web Developer
        </span>
        <p className={classes.aboutme__content__description}>
          And an South African that arrived in London on an ancestral work visa,
          in December 2022. Whilst working full time in recruitment, I have been
          studying a BSC in Computing through the University of South Africa. I
          will complete my degree by the end of 2023.
        </p>
      </Hero>
    </Fragment>
  );
};

export default AboutMe;
