import React from "react";
import luckyBall from "../../assets/images/billiard_PNG10925.png";
import classes from "./Logo.css";

const logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <a href="/">
        <img src={luckyBall} alt="LuckyBall" />
      </a>
    </div>
  );
};

export default logo;
