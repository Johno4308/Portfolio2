import React, { Fragment } from "react";
import Button from "./../../Ui/Button/Button";
import coverIMG1 from "./../../assets/Background1.jpeg";
import coverIMG2 from "./../../assets/Background2.jpeg";
import coverIMG3 from "./../../assets/Background3.jpeg";
import coverIMG4 from "./../../assets/Background4.jpeg";
import coverIMG5 from "./../../assets/Background5.jpeg";

import classes from "./Hero.module.scss";

const images = [coverIMG1, coverIMG2, coverIMG3, coverIMG4, coverIMG5];

const Hero = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={classes.container}>
      <img className={classes.video} src={randomImage} />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          <Fragment>
            <h1 className={classes.hero__content__title}>
              Hi, I'm Johnathan..
            </h1>
            <span className={classes.hero__content__tagline}>A Developer</span>
            <p className={classes.hero__content__description}>
              And a South African that arrived in London on an ancestral work
              visa, in December 2022. I have a degree in business management and
              a background in recruitment, which over the years has strengthened
              my expertise in quality service and client satisfaction. Since
              2020 I have been studying a B.Sc. in Computing through the
              University of South Africa distance learning which I will complete
              at the end of 2023. With my move to London, I am looking to become
              a Junior Developer, and would love an opportunity to grow within
              an organisation.
            </p>
            <div className={classes.hero__content__cta}>
              <Button to="aboutme" outline>
                Read More
              </Button>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default Hero;
