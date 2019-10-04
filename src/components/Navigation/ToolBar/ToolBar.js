import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";
const ToolBar = props => (
  <header className={classes.ToolBar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;
