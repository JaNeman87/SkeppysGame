import React from "react";
import Aux from "../../../hoc/ReactAux";
import classes from "./Input.css";

const input = props => {
  return (
    <Aux>
      <div className={classes.Input}>
        <label className={classes.Label}>Place your bet</label>
        <input value={props.value} onChange={props.changed} type="number" />
      </div>
    </Aux>
  );
};

export default input;
