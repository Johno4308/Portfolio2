import React from "react";
import classes from "./Projects.module.scss";
import coverIMG1 from "./../../assets/Background1.png";
import coverIMG2 from "./../../assets/Background2.png";
import coverIMG3 from "./../../assets/Background3.png";
import coverIMG4 from "./../../assets/Background4.png";
import coverIMG5 from "./../../assets/Background5.png";
const images = [coverIMG1, coverIMG2, coverIMG3, coverIMG4, coverIMG5];

const Projects = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={classes.container}>
      <img className={classes.video} src={randomImage} />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>Projects</h1>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
        <div className={classes.hero__content}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            voluptas ipsam molestiae iste fuga perferendis libero fugit
            accusantium soluta quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
