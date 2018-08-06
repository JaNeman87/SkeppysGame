import React from "react";
import classes from "./DynamicBall.css";
import Aux from "../../../hoc/ReactAux";

const dynamicBall = props => {
  return (
    <Aux>
      <p className={classes.Ball} id={props.id}>
        {props.number}
      </p>
    </Aux>
  );
};

export default dynamicBall;
