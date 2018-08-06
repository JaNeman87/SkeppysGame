import React from "react";
import Aux from "../../hoc/ReactAux";
import classes from "./Balls.css";

const balls = props => {
  return (
    <Aux>
      <p className={classes.Ball} id={props.id} onClick={props.clicked}>
        {props.number}
      </p>
    </Aux>
  );
};

export default balls;
