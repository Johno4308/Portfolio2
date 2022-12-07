import React from "react";
import { FaGithub, FaCoffee } from "react-icons/fa";
import classes from "./Projects.module.scss";
import coverIMG1 from "./../../assets/Background1.png";
import coverIMG2 from "./../../assets/Background2.png";
import coverIMG3 from "./../../assets/Background3.png";
import coverIMG4 from "./../../assets/Background4.png";
import coverIMG5 from "./../../assets/Background5.png";
import CaffiendProj1IMG from "./../../assets/caffiendProj1.jpg";
import CaffiendProj2IMG from "./../../assets/caffiendProj2.jpg";
import CaffiendProj3IMG from "./../../assets/caffiendProj3.jpg";
import CaffiendProj4IMG from "./../../assets/caffiendProj4.jpg";
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
        {/*       CAFFIEND            */}
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>Caffiend</h1>
          <span className={classes.hero__content__tagline}>
            A guide to making great different coffees.
          </span>
          <span className={classes.hero__content__codes}>
            | React | SCSS | REACT-THREE-FIBER | GSAP |
          </span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={CaffiendProj1IMG}
              width="200px"
            />
            <img
              className={classes.hero__content__item__img}
              src={CaffiendProj2IMG}
              width="200px"
            />
            <img
              className={classes.hero__content__item__img}
              src={CaffiendProj3IMG}
              width="200px"
            />
            <img
              className={classes.hero__content__item__img}
              src={CaffiendProj4IMG}
              width="200px"
            />
          </div>

          <p className={classes.hero__content__description}>
            Built with React and Scss. Purpose of this project was to practise
            breakpoints and setting up the site to be mobile responsive. Each of
            the 18 coffees was stored as an object which I then mapped over to
            create both the Nav list and coffee instruction component. Extra the
            mug in the first image is a 3D model that rotates and is interactive
            using React-Three-Fiber.
          </p>

          <div className={classes.hero__content__cta}>
            <a
              href="https://caffiend.netlify.app/"
              className={classes.hero__content__cta__item}
            >
              {<FaCoffee className={classes.hero__content__cta__item__icon} />}
              Website
            </a>

            <a
              href="https://github.com/Johno4308/Caffiend"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>

          {/* <div className={classes.hero__content__cta}>
            <Button outline>
              {<FaCoffee className={classes.hero__content__cta__icon} />}Website
            </Button>
            <a href="https://github.com/Johno4308/Caffiend">
              <Button>
                {<FaGithub className={classes.hero__content__cta__icon} />}
                Github
              </Button>
            </a>
          </div> */}
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
