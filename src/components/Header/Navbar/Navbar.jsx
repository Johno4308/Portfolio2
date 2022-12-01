import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Ui/Button/Button";
import classes from "./Navbar.module.scss";

const Navbar = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/locations">Locations</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/learnmore">Learn More</Link>
        </li>
      </ul>
      <Button
        to="booknow"
        //outline
        className={classes.booknow}
        onClick={menuToggle}
      >
        Book Now
      </Button>
    </nav>
  );
};

export default Navbar;
