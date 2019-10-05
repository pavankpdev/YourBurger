import React, { Component } from "react";
import Aux from "../../hoc/Auxkp";
import classes from "./Layout.module.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showsidedrawer: false
  };
  sideDrawerCloseHndler = () => {
    this.setState({ showsidedrawer: false });
  };

  sideDrawerToogleHandler = () => {
    this.setState(prevState => {
      return { showsidedrawer: !prevState.showsidedrawer };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar drawerToogleClicked={this.sideDrawerToogleHandler} />
        <SideDrawer
          closed={this.sideDrawerCloseHndler}
          open={this.state.showsidedrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
