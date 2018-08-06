import React from "react";

const wonValue = props => {
  return (
    <div>
      <p
        style={{
          color: "rgb(0, 255, 34)",
          textAlign: "center",
          fontSize: "32px",
          margin: "0px"
        }}
      >
        <strong>€:</strong>
        {props.value}
      </p>
    </div>
  );
};

export default wonValue;
