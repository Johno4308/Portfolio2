import React, { Fragment } from "react";
import classes from "./AboutMe.module.scss";
import coverIMG1 from "./../../assets/Background1.png";
import coverIMG2 from "./../../assets/Background2.png";
import coverIMG3 from "./../../assets/Background3.png";
import coverIMG4 from "./../../assets/Background4.png";
import coverIMG5 from "./../../assets/Background5.png";
import useScrollToTop from "../../hooks/useScrollToTop";

const images = [coverIMG1, coverIMG2, coverIMG3, coverIMG4, coverIMG5];

const AboutMe = () => {
  useScrollToTop();
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
              I am a very goal orientated individual, whether that be through
              fitness, work or studies. I believe as an individual we are put
              onto this earth to serve a purpose beyond ones self, for the
              greater good of society.
            </p>
            <p className={classes.aboutme__content__quote}>
              “At dawn, when you have trouble getting out of bed, tell yourself:
              ‘I have to go to work — as a human being. What do I have to
              complain of, if I’m going to do what I was born for — the things I
              was brought into the world to do? Or is this what I was created
              for? To huddle under the blankets and stay warm? – Marcus Aurelius
            </p>
          </div>
          <div className={classes.aboutme__content}>
            <p className={classes.aboutme__content__description}>
              I enjoy submerging myself in new challenging environments, as I
              believe it’s the only place where personal growth happens. Coding
              and learning new frameworks has become that orientation of
              challenge and my personal growth. And I love it to say the least.
              Enough so that at the age of 34 I’m changing careers and moving
              country to pursue a career in it.
            </p>
            <p className={classes.aboutme__content__description}>
              I am looking for an opportunity to grow within an organisation. To
              understand user needs and learn best practises. I am open and
              excited to learn new languages, frameworks, and packages. To work
              hard and be mentored and moulded into a great asset for the
              organisation, clients and end users.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
