import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";
import DrawerToogle from "../SideDrawer/DrawerToggle/DrawerToggle";

const ToolBar = props => (
  <header className={classes.ToolBar}>
    <DrawerToogle clicked={props.drawerToogleClicked} />
    <Logo />
    <nav className={classes.pcOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;
