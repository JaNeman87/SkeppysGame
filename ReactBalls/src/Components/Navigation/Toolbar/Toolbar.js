import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
