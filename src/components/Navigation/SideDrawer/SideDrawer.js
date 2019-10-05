import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxkp";
const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <BackDrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="25%" margin="25px" />
        <nav>
          <NavigationItems /> 
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
