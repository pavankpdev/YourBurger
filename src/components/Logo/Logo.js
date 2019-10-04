import React from "react";
import burgerLogo from "../../asset/images/Burger.svg";
import classes from "./Logo.module.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My Logo" />
  </div>
);

export default logo;
