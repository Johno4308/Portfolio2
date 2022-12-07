import React from "react";
import Button from "./../../Ui/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import classes from "./Footer.module.scss";
import Logo from "../../UI/Logo/Logo";
import { useRef } from "react";

const Footer = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vulj6uy",
        "template_tgivqic",
        refForm.current,
        "BUUXSBXz3Nl_Iallz"
      )
      .then(
        () => {
          alert("Message sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };

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
          <form ref={refForm} onSubmit={sendEmail}>
            <div className={classes.footer__title__form}>
              <input
                className={classes.input}
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className={classes.footer__title__form}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
                name="email"
                required
              />
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
              <Button type="submit" value="SEND">
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className={classes.footer__base}>
          <Logo />

          <ul className={classes.footer__base__socials}>
            <li>
              <a href="https://github.com/Johno4308">{<FaGithub />}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/johnathan-david-cookson-689a85112/">
                {<FaLinkedin />}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
