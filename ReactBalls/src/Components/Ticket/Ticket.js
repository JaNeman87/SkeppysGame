import React from "react";
import classes from "./Ticket.css";

const ticket = props => {
  return (
    <div className={classes.Ticket}>
      <p>
        Your Numbers: <strong>{props.numbers}</strong>
      </p>
      <p>
        Your Bet: <strong>{props.bet}</strong> €
      </p>
      <p>
        Your Winnings: <strong>{props.winnings}</strong> €
      </p>
      <p>Winning Numbers:</p>
      <p>
        <strong>{props.winnNums1}</strong>
        <strong>{props.winnNums2}</strong>
      </p>
      <p>
        Time: <strong>{props.time}</strong>
      </p>
    </div>
  );
};

export default ticket;
