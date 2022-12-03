import React from "react";

import classes from "./Project.module.scss";

import { FaGithub } from "react-icons/fa";

//import { IoLocationOutline } from "react-icons/Bs/Github";
import { BsArrowRight } from "react-icons/bs";
import apiIMG from "./../../assets/apiIMG.png";
import color from "./../../assets/Project1.png";
import MaldivesJPG from "./../../assets/maldives.jpg";
import CaboSanLucasJPG from "./../../assets/cabosanlucas.jpg";
import CroatiaJPG from "./../../assets/croatia.jpg";
import GreeceJPG from "./../../assets/greece.jpg";
import AlbaniaJPG from "./../../assets/albania.jpg";
import { Link } from "react-router-dom";

const locationData = [
  { id: 1, location: "Caffiend", isFeatured: true, img: color },
  { id: 2, location: "Meme API", isFeatured: true, img: apiIMG },
  {
    id: 3,
    location: "Cabo San Lucas",
    isFeatured: false,
    img: CaboSanLucasJPG,
  },
  { id: 4, location: "Croatia", isFeatured: false, img: CroatiaJPG },
  { id: 5, location: "Greece", isFeatured: false, img: GreeceJPG },
  { id: 6, location: "Albania", isFeatured: true, img: AlbaniaJPG },
  { id: 7, location: "Caffiend", isFeatured: true, img: color },
  { id: 8, location: "Maldives", isFeatured: true, img: MaldivesJPG },
  {
    id: 9,
    location: "Cabo San Lucas",
    isFeatured: false,
    img: CaboSanLucasJPG,
  },
];

const Projects = ({ page }) => {
  const mapData = !page ? locationData.slice(0, 6) : locationData;
  return (
    <div className={classes.container}>
      <div className={`${classes.locations} ${page ? classes.page : ""}`}>
        <div className={classes.locations__content}>
          <h2 className={classes.locations__content__title}>Projects</h2>
          <div className={classes.locations__content__gallery}>
            {mapData.map(({ id, location, isFeatured, img }) => (
              <div className={classes.gallery__item} key={id}>
                <img
                  src={img}
                  alt={location}
                  className={classes.gallery__item__img}
                />
                <div className={classes.overlay} />
                <div className={classes.gallery__item__content}>
                  <FaGithub />
                  <h2 className={classes.gallery__item__content__location}>
                    {location}
                  </h2>
                </div>
                {isFeatured && (
                  <div className={classes.gallery__item__tag}>JavaScript</div>
                )}
              </div>
            ))}
          </div>
          {!page && (
            <div className={classes.locations__content__viewmore}>
              <Link to="/locations">
                view more <BsArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
