import React from "react";
// import { unstable_HistoryRouter } from "react-router-dom";
import classes from "./Button.module.scss";
import { useNavigate } from "react-router-dom";

//props of outline, if the button gets the outline prop. we will make it a outline button otherwise standard
const Button = ({ outline, children, onClick, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        onClick && onClick();
        navigate(`/${to}`);
      }}
      className={`${classes.button} ${outline ? classes.outline : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
