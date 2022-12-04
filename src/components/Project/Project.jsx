import React from "react";

import classes from "./Project.module.scss";

import { FaGithub } from "react-icons/fa";

//import { IoLocationOutline } from "react-icons/Bs/Github";
import { BsArrowRight } from "react-icons/bs";
import caffinedIMG from "./../../assets/caffinedIMG.png";
import apiIMG from "./../../assets/apiIMG.png";
import villageIMG from "./../../assets/villageIMG.png";
import containerIMG from "./../../assets/containerIMG.png";
import guestHouseIMG from "./../../assets/guestHouseIMG.png";
import calculatorIMG from "./../../assets/calculatorIMG.png";

import { Link } from "react-router-dom";

const locationData = [
  { id: 1, location: "Caffiend", isFeatured: true, img: caffinedIMG },
  { id: 2, location: "Meme API", isFeatured: true, img: apiIMG },
  {
    id: 3,
    location: "Village",
    isFeatured: true,
    img: villageIMG,
  },
  { id: 4, location: "Container", isFeatured: false, img: containerIMG },
  { id: 5, location: "GuestHouse", isFeatured: false, img: guestHouseIMG },
  { id: 6, location: "Calculator", isFeatured: false, img: calculatorIMG },
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
                {!isFeatured && (
                  <div className={classes.gallery__item__tag}>C++</div>
                )}
              </div>
            ))}
          </div>
          {!page && (
            <div className={classes.locations__content__viewmore}>
              <Link to="/locations">
                Read More <BsArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
