import React, { Component } from "react";
import Aux from "../../hoc/ReactAux";
import Balls from "../../Components/Balls/Balls";
import classes from "./Game.css";
import Button from "../../Components/Button/Button";
import Congrats from "../../Components/Messages/Congratulations/Congratulations";
import NextTime from "../../Components/Messages/NextTime/NextTime";
import ClickOnTheBall from "../../Components/Messages/ClickOnTheBall/ClickOnTheBall";
import DynamicBall from "../../Components/Balls/DynamicBall/DynamicBall";
import Modal from "../../Components/UI/Modal/Modal";
import BetCheckModal from "../../Components/BetCheckModal/BetCheckModal";
import WonValue from "../../Components/WonValue/WonValue";
import axios from "../../axiosTickets";

class Game extends Component {
  state = {
    ids: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
      { id: 23 },
      { id: 24 },
      { id: 25 },
      { id: 26 },
      { id: 27 },
      { id: 28 },
      { id: 29 },
      { id: 30 },
      { id: 31 },
      { id: 32 },
      { id: 33 },
      { id: 34 },
      { id: 35 },
      { id: 36 },
      { id: 37 },
      { id: 38 },
      { id: 39 },
      { id: 40 },
      { id: 41 },
      { id: 42 },
      { id: 43 },
      { id: 44 },
      { id: 45 },
      { id: 46 },
      { id: 47 },
      { id: 48 },
      { id: 49 },
      { id: 50 },
      { id: 51 },
      { id: 52 },
      { id: 53 },
      { id: 54 },
      { id: 55 },
      { id: 56 },
      { id: 57 },
      { id: 58 },
      { id: 59 },
      { id: 60 },
      { id: 61 },
      { id: 62 },
      { id: 63 },
      { id: 64 },
      { id: 65 },
      { id: 66 },
      { id: 67 },
      { id: 68 },
      { id: 69 },
      { id: 70 },
      { id: 71 },
      { id: 72 },
      { id: 73 },
      { id: 74 },
      { id: 75 },
      { id: 76 },
      { id: 77 },
      { id: 78 },
      { id: 79 },
      { id: 80 }
    ],
    chosenBallsIds: [],
    randomNums: [],
    betValueFinal: [],
    wonValue: [],
    win: false,
    lost: false,
    lessThan3: false,
    betBtnHandlerClicked: false,
    message: false,
    time: new Date().toLocaleString()
  };

  componentWillMount() {
    let numbers = [];
    while (numbers.length < 20) {
      let random = Math.floor(Math.random() * 80) + 1;
      if (numbers.indexOf(random) === -1) {
        numbers.push(random);
      }
    }

    numbers.sort(function(a, b) {
      return a - b;
    });
    this.setState({ randomNums: numbers });
  }

  componentDidMount() {
    console.log(this.state.randomNums);
  }

  clickedBallHandler = ballIndex => {
    if (this.state.win || this.state.lost) {
      return;
    }
    let chosenBallsIds = this.state.chosenBallsIds;
    if (chosenBallsIds.includes(ballIndex)) {
      let index = chosenBallsIds.indexOf(ballIndex);
      if (index > -1) {
        chosenBallsIds.splice(index, 1);
      }
    } else {
      chosenBallsIds.push(ballIndex);
    }
    if (this.state.win || this.state.lost) {
      chosenBallsIds.pop();
    }

    if (chosenBallsIds.length >= 9) {
      chosenBallsIds.pop();
    }

    // if (+chosenBallsIds.slice(-1)[0] === ballIndex) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
    this.setState({
      chosenBallsIds: chosenBallsIds
    });

    console.log(this.state.chosenBallsIds);
  };

  betBtnHandler = e => {
    let filteredNums = this.state.chosenBallsIds.filter(e => {
      return this.state.randomNums.indexOf(e) > -1;
    });
    console.log(filteredNums);
    if (this.state.chosenBallsIds.length === 3 && filteredNums.length === 3) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 65);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (
      this.state.chosenBallsIds.length === 4 &&
      filteredNums.length === 4
    ) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 275);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (
      this.state.chosenBallsIds.length === 5 &&
      filteredNums.length === 5
    ) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 1350);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (
      this.state.chosenBallsIds.length === 6 &&
      filteredNums.length === 6
    ) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 6500);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (
      this.state.chosenBallsIds.length === 7 &&
      filteredNums.length === 7
    ) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 25000);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (
      this.state.chosenBallsIds.length === 8 &&
      filteredNums.length === 8
    ) {
      let won = this.state.betValueFinal.slice(-1)[0];
      let wonValue = this.state.wonValue;
      wonValue.push(won * 125000);
      this.setState({ wonValue: wonValue });
      this.setState({ win: true });
    } else if (this.state.chosenBallsIds.length < 3) {
      this.setState({ lessThan3: true });
    } else {
      this.setState({
        win: false,
        betBtnHandlerClicked: true,
        message: true,
        lost: true
      });
    }
    setTimeout(() => {
      this.setState({ betBtnHandlerClicked: false });
    }, 500);

    const ticket = {
      ticket: this.state.chosenBallsIds,
      winnings: +this.state.wonValue,
      bet: this.state.betValueFinal.slice(-1)[0],
      time: this.state.time,
      winnNums: this.state.randomNums
    };
    if (this.state.chosenBallsIds.length >= 3) {
      axios
        .post("/tickets.json", ticket)
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
    }

    e.preventDefault();
  };

  betBtnCanceledHandler = () => {
    this.setState({ betBtnHandlerClicked: false });
  };

  modalOpenHandler = () => {
    if (this.state.chosenBallsIds.length < 1) {
      this.setState({ betBtnHandlerClicked: false });
    } else {
      this.setState({ betBtnHandlerClicked: true });
    }
  };

  inputChangedHandler = event => {
    let value = this.state.betValueFinal;
    let betValue = event.target.value;

    if (this.state.betBtnHandlerClicked) {
      value.push(+betValue);
    }
    this.setState({ betValueFinal: value });
  };

  render() {
    let balls = null;
    balls = (
      <div>
        {this.state.ids.map((ball, index) => {
          return (
            <Balls
              key={ball.id}
              number={ball.id}
              clicked={() => this.clickedBallHandler(index + 1)}
              id={index + 1}
            />
          );
        })}
      </div>
    );

    let dynBall = null;
    dynBall = (
      <div>
        {this.state.chosenBallsIds.map((ball, index) => {
          return (
            <DynamicBall
              key={ball}
              number={ball}
              clicked={() => this.clickedBallHandler(index + 1)}
              id={index}
            />
          );
        })}
      </div>
    );

    let modal = null;

    modal = (
      <div>
        {this.state.chosenBallsIds.map((ball, index) => {
          return (
            <Modal
              key={ball}
              show={this.state.betBtnHandlerClicked}
              modalClosed={this.betBtnCanceledHandler}
            >
              <BetCheckModal
                chosen={this.state.chosenBallsIds}
                number={ball}
                clicked={() => this.clickedBallHandler(index + 1)}
                id={ball}
                bet={this.betBtnHandler}
                changed={this.inputChangedHandler}
              />
            </Modal>
          );
        })}
      </div>
    );

    let message = null;

    if (this.state.win) {
      message = <Congrats />;
    } else if (
      this.state.chosenBallsIds.length >= 3 &&
      !this.state.win &&
      this.state.message
    ) {
      message = <NextTime />;
    } else if (this.state.lessThan3) {
      message = <ClickOnTheBall />;
    }
    return (
      <Aux>
        {modal}
        <div>
          <WonValue value={+this.state.wonValue} />
        </div>
        <div>{message}</div>
        <div className={classes.Balls}>{balls}</div>
        <Button clicked={this.modalOpenHandler} />
        {dynBall}
      </Aux>
    );
  }
}

export default Game;
