import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem active>BurgerBuilder</NavigationItem>
    <NavigationItem>CheckOut</NavigationItem>
  </ul>
);

export default navigationItems;
