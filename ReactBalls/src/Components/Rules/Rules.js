import React from "react";
import classes from "./Rules.css";

const rules = props => {
  return (
    <div className={classes.Rules}>
      <h1>RULES</h1>
      <p>
        For every bet, 20 out of 80 numbers are randomly generated and these
        numbers are winning numbers.Your goal is to guess 3 or 4 or 5, up to 8
        numbers from that generated array of winning numbers, that can be any
        number from 1-80.
      </p>
      <div>
        <table style={{ width: "100%" }}>
          <caption style={{ marginBottom: "10px" }}>Prize table</caption>
          <tbody>
            <tr>
              <th>NUMBER OF GUESSES</th>
              <th>PRIZE</th>
            </tr>
            <tr>
              <td>3</td>
              <td>Bet amount * 65</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bet amount * 275</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Bet amount * 1350</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Bet amount * 6500</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Bet amount * 25000</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Bet amount * 125000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default rules;
