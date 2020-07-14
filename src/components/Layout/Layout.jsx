import React, { Component } from "react";
import Aux from "../hoc/Auxilary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSiderDrawer} closed={this.SideDrawerClosedHandler} />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
