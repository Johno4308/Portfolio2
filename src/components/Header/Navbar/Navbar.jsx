import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/footer">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
