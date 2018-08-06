import React, { Component } from "react";
import Ticket from "../../Components/Ticket/Ticket";
import axios from "../../axiosTickets";

class History extends Component {
  state = {
    tickets: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/tickets.json")
      .then(res => {
        const fetchedTickets = [];
        for (let key in res.data) {
          fetchedTickets.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(res.data);
        this.setState({ loading: false, tickets: fetchedTickets });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        <h1
          style={{
            color: "rgb(0, 255, 34)",
            textAlign: "center",
            fontSize: "27px",
            margin: "0px"
          }}
        >
          Your Tickets
        </h1>
        {this.state.tickets.map(ticket => {
          return (
            <Ticket
              key={ticket.id}
              numbers={ticket.ticket + ", "}
              bet={ticket.bet}
              winnings={ticket.winnings}
              time={ticket.time}
              winnNums1={ticket.winnNums.slice(0, 10) + ", "}
              winnNums2={ticket.winnNums.slice(10, 20) + ", "}
            />
          );
        })}
      </div>
    );
  }
}

export default History;
