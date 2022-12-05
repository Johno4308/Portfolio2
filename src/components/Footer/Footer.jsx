import React from "react";
import Button from "../../UI/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";

const socials = [<FaGithub />, <FaLinkedin />];

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__title}>
          <h4 className={classes.footer__title__headline}>
            FEEL FREE TO CONTACT ME!
          </h4>
          <span>
            I am looking for any opportunity in software development. I am
            extremely hard working and adapt well to new frameworks. Really
            looking forward to hearing from you.
          </span>
          <div className={classes.footer__title__form}>
            <input className={classes.input} type="name" placeholder="Name" />
          </div>
          <div className={classes.footer__title__form}>
            <input className={classes.input} type="email" placeholder="Email" />
          </div>
          <div className={classes.footer__title__form}>
            <input
              className={classes.input}
              placeholder="Subject"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className={classes.footer__title__form}>
            <textarea
              className={classes.textarea}
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <div className={classes.footer__title__form}>
            <Button>Submit</Button>
          </div>
        </div>
        <div className={classes.footer__base}>
          <Logo />

          <ul className={classes.footer__base__socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/https://github.com/Johno4308">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
