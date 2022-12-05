import React, { Fragment } from "react";
import Button from "./../../UI/Button/Button";
import coverIMG1 from "./../../assets/Background1.png";
import coverIMG2 from "./../../assets/Background2.png";
import coverIMG3 from "./../../assets/Background3.png";
import coverIMG4 from "./../../assets/Background4.png";
import coverIMG5 from "./../../assets/Background5.png";

import classes from "./Hero.module.scss";

const images = [coverIMG1, coverIMG2, coverIMG3, coverIMG4, coverIMG5];

const HomePageContent = () => {
  return (
    <Fragment>
      <h1 className={classes.hero__content__title}>Hi, I'm Johnathan..</h1>
      <span className={classes.hero__content__tagline}>A Web Developer</span>
      <p className={classes.hero__content__description}>
        And an South African that arrived in London on an ancestral work visa,
        in December 2022. Whilst working full time in recruitment, I have been
        studying a BSC in Computing through the University of South Africa. I
        will complete my degree by the end of 2023.
      </p>
      <div className={classes.hero__content__cta}>
        <Button to="aboutme" outline>
          Read More
        </Button>
      </div>
    </Fragment>
  );
};

const Hero = ({ isDynamic, children, children1, children2 }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={classes.container}>
      <img className={classes.video} src={randomImage} />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynamic && <HomePageContent />}

          {isDynamic && (
            <>
              <h1 className={classes.hero__content__title}>{children}</h1>
              <span className={classes.hero__content__tagline}>
                {children1}
              </span>
              <p className={classes.hero__content__description}>{children2}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
