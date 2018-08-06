import React from "react";
import Aux from "../../hoc/ReactAux";

import Button from "../Button/Button";
import Input from "../UI/Input/Input";

const betCheckModal = props => {
  let chosenBalls = props.chosen.map(ball => {
    return ball + ",";
  });
  return (
    <Aux>
      <div>
        <h3
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "0px"
          }}
        >
          Your numbers:{" "}
        </h3>
        <div
          style={{
            color: "rgb(0, 255, 34)",
            textAlign: "center",
            fontSize: "23px",
            margin: "0px"
          }}
        >
          {" "}
          {chosenBalls}
        </div>

        <Input changed={props.changed} />
        <div>
          <Button clicked={props.bet} />
        </div>
      </div>
    </Aux>
  );
};

export default betCheckModal;
