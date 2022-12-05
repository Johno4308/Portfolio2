import React, { Fragment } from "react";
import classes from "./AboutMe.module.scss";

import coverIMG1 from "./../../assets/Background1.png";
import coverIMG2 from "./../../assets/Background2.png";
import coverIMG3 from "./../../assets/Background3.png";
import coverIMG4 from "./../../assets/Background4.png";
import coverIMG5 from "./../../assets/Background5.png";

const images = [coverIMG1, coverIMG2, coverIMG3, coverIMG4, coverIMG5];

const AboutMe = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <Fragment>
      <div className={classes.container}>
        <img className={classes.video} src={randomImage} />
        <div className={classes.aboutme}>
          <div className={classes.aboutme__content}>
            <h2 className={classes.aboutme__content__title}>More About Me</h2>
            <span className={classes.aboutme__content__tagline}>
              Im actively searching for a Entry Level Developer role..
            </span>
            <p className={classes.aboutme__content__description}>
              And an South African that arrived in London on an ancestral work
              visa, in December 2022. Whilst working full time in recruitment, I
              have been studying a BSC in Computing through the University of
              South Africa. I will complete my degree by the end of 2023.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
