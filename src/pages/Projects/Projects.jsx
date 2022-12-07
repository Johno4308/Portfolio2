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
import MemeProj1IMG from "./../../assets/memeProj1.jpg";
import VillageProj1IMG from "./../../assets/villageProj1.jpg";
import ContainerProj1IMG from "./../../assets/containerProj1.jpg";
import ContainerProj2IMG from "./../../assets/containerProj2.jpg";
import GuesthouseProj1IMG from "./../../assets/guesthouseProj1.jpg";
import GuesthouseProj2IMG from "./../../assets/guesthouseProj2.jpg";
import CalculatorProj1IMG from "./../../assets/calculatorProj1.png";
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
        </div>

        {/*       MEMEAPI           */}
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>MEME API</h1>
          <span className={classes.hero__content__tagline}>
            A simply meme making tool.
          </span>
          <span className={classes.hero__content__codes}>| React | CSS |</span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={MemeProj1IMG}
              width="80%"
            />
          </div>
          <p className={classes.hero__content__description}>
            Built with React and CSS. Its a simple application that recieves 100
            of most popular MEME images from an API and allows the user to add
            text to the top and bottom of the image in classic MEME font.
          </p>
          <div className={classes.hero__content__cta}>
            <a
              href="https://github.com/Johno4308/MemeAPI"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>
        </div>
        {/*       VILLAGE           */}
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>VILLAGE</h1>
          <span className={classes.hero__content__tagline}>
            UNIVERSITY COMPUTER GRAPHICS PROJECT - VILLAGE
          </span>
          <span className={classes.hero__content__codes}>
            | HTML | CSS | THREEJS |
          </span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={VillageProj1IMG}
              width="80%"
            />
          </div>
          <p className={classes.hero__content__description}>
            Built with THREEjs. University requirements were to have a hut, fire
            place and igloo (don't ask why). With a focus on functionality
            between HTML and JS over and above textures, objects and lighting.
            Some of the button functionality was to, change scene direction,
            change scene speed, toggle between day and night time, zoom in and
            zoom out.
          </p>
          <div className={classes.hero__content__cta}>
            <a
              href="https://github.com/Johno4308/Village"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>
        </div>
        {/*       CONTAINER           */}
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>CONTAINER</h1>
          <span className={classes.hero__content__tagline}>
            An application to keep track of the heavy lifting
          </span>
          <span className={classes.hero__content__codes}>| C++ | QT |</span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={ContainerProj1IMG}
              width="400px"
            />
            <img
              className={classes.hero__content__item__img}
              src={ContainerProj2IMG}
              width="400px"
            />
          </div>

          <p className={classes.hero__content__description}>
            Built with C++ and QT. Its a server program to stack cylinder and
            box objects onto pallets and send the XML objects over a network to
            client program, which displays shipping objects in a table model
            view. This university project required the following techniques.
            Factory and Momento Design Patterns, XML writing using DOM and
            XMLStreamer, TCP sockets, Threading, Serialization of class objects,
            Table model view
          </p>

          <div className={classes.hero__content__cta}>
            <a
              href="https://github.com/Johno4308/Container"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>
        </div>
        {/*       GUESTHOUSE           */}
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>GUESTHOUSE</h1>
          <span className={classes.hero__content__tagline}>
            Have a few rooms you need to let out, this is the perfect
            application to do so.
          </span>
          <span className={classes.hero__content__codes}>| C++ | QT |</span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={GuesthouseProj1IMG}
              width="400px"
            />
            <img
              className={classes.hero__content__item__img}
              src={GuesthouseProj2IMG}
              width="400px"
            />
          </div>

          <p className={classes.hero__content__description}>
            Built with C++ and QT. Its a 5 room BnB booking application that
            books in guests, checks dates and room availability. This university
            project required the following techniques. To hard code a UI without
            using QT onboard designer, Implementation of user input validation,
            Serialization of class objects, Converting and retrieving data
            to/from XML.
          </p>

          <div className={classes.hero__content__cta}>
            <a
              href="https://github.com/Johno4308/GuestHouse"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>
        </div>
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>CALCULATOR</h1>
          <span className={classes.hero__content__tagline}>
            TO SUM IT UP.. HERES A SIMPLY CALCULATOR
          </span>
          <span className={classes.hero__content__codes}>| C++ | QT |</span>
          <div className={classes.hero__content__item}>
            <img
              className={classes.hero__content__item__img}
              src={CalculatorProj1IMG}
              width="80%"
            />
          </div>

          <p className={classes.hero__content__description}>
            Built with C++ and QT. Its a calculator with four basic operations,
            namely addition, subtraction, multiplication, and division. This
            university project required the following techniques. To hard code a
            UI without using QT onboard designer, Implementation of Singleton
            Design Pattern, Implementation of Factory Design Pattern.
          </p>

          <div className={classes.hero__content__cta}>
            <a
              href="https://github.com/Johno4308/Calculator"
              className={classes.hero__content__cta__item}
            >
              {<FaGithub className={classes.hero__content__cta__item__icon} />}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
