import React from "react";
import Button from "../../UI/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";

const footerColumns = [
  {
    id: 1,
    headline: "About us",
    links: [
      "Pricing",
      "Our Story",
      "Testimonials",
      "Investors",
      "Terms of Service",
    ],
  },
  {
    id: 2,
    headline: "Contact us",
    links: ["Contact", "Support", "Destinations", "Careers", "Refund Policy"],
  },
  {
    id: 3,
    headline: "Content",
    links: [
      "Submit Video",
      "Submit Photo",
      "Influencer",
      "Marketing",
      "Privacy Policy",
    ],
  },
  {
    id: 4,
    headline: "Socials",
    links: ["Youtube", "Facebook", "Snapchat", "Twitter", "Instagram"],
  },
];

const socials = [<FaGithub />, <FaLinkedin />];

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__newsletter}>
          <h4 className={classes.footer__newsletter__headline}>
            FEEL FREE TO CONTACT ME!
          </h4>
          <span>
            I am looking for any opportunity in software development. I am
            extremely hard working and adapt well to new frameworks. Really
            looking forward to hearing from you.
          </span>
          <div className={classes.footer__newsletter__form}>
            <input className={classes.input} type="name" placeholder="Name" />
          </div>
          <div className={classes.footer__newsletter__form}>
            <input className={classes.input} type="email" placeholder="Email" />
          </div>
          <div className={classes.footer__newsletter__form}>
            <input
              className={classes.input}
              placeholder="Subject"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className={classes.footer__newsletter__form}>
            <textarea
              className={classes.textarea}
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <div className={classes.footer__newsletter__form}>
            <Button>Submit</Button>
          </div>
        </div>
        <div className={classes.footer__base}>
          <Logo />

          <ul className={classes.footer__base__socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
