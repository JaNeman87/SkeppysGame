import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Game
      </NavigationItem>
      <NavigationItem link="/history">History</NavigationItem>
      <NavigationItem link="/rules">Rules</NavigationItem>
    </ul>
  );
};

export default navigationItems;
