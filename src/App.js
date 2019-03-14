import React, { Component } from 'react';
import { Header, } from "semantic-ui-react";
import Game from "./Game"

class App extends Component {
  state = {
    rps: ["rock", "paper", "scissors"],
    playerChoice: "",
    compChoice: "",
    wins: 0,
    loses: 0,
    ties: 0,
  }


  compareChoice = (choice) => {
    let randNum = Math.floor(Math.random() * 3)
    let compPlay = this.state.rps[randNum]
    let play = choice.player
    let wins = this.state.wins
    let loses = this.state.loses
    let ties = this.state.ties
    if (play === "paper" && compPlay === "rock") {
      this.setState({ wins: wins++ })
    } else if (play === "rock" && compPlay === "scissors") {
      this.setState({ wins: wins++ })
    } else if (play === "scissors" && compPlay === "paper") {
      this.setState({ wins: wins++ })
    } else if (compPlay === "paper" && play === "rock" ) {
      this.setState({ loses: loses++ })
    } else if (compPlay === "rock" && play === "scissors") { 
      this.setState({ loses: loses++ })
    } else if (compPlay === "scissors" && play === "paper") {
      this.setState({ loses: loses++ })
    } else {
      this.setState({ ties: ties++ })
    }
    debugger
  }

  render() {
    return (
      <div>
        <Header as="h1" style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
          React - Rock, Paper, Scissors
      </Header>
        <Game add={this.compareChoice} />
      <br />
      <Header as="h3" style={{display: "flex", justifyContent: "center"}}>
        Wins: {this.state.wins}
      </Header>
      <Header as="h3" style={{display: "flex", justifyContent: "center"}}>
        Loses: {this.state.loses}
      </Header>
      <Header as="h3" style={{display: "flex", justifyContent: "center"}}>
        Ties: {this.state.ties}
      </Header>

      </div>

    );
  }
}

export default App;
