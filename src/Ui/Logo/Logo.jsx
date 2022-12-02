import React from "react";
import Logos from "../../assets/Logo.png";
import classes from "./Logo.module.scss";

function Logo() {
  return (
    <a href="/" className={classes.logo}>
      <img src={Logos} height="42" width="42" className={classes.logo__img} />
      <span>Portfolio</span>
    </a>
  );
}

export default Logo;
