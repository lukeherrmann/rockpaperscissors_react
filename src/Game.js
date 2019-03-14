import React from "react";
import{ Form,  } from "semantic-ui-react";

class Game extends React.Component {
  state = { 
    player: "",
}  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ player: ""})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center"}}>
      <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          fluid
          label="Enter: rock, paper, or scissors to play."
          name="player"
          value={this.state.player}
          onChange={this.handleChange}
          />
        </Form>
      </div>
    )
  }
}



export default Game;