import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const diceString = ["one", "two", "three", "four", "five", "six"];
    return (
      <i
        onClick={() => this.props.handleClick(this.props.idx)}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        className={`Die fas fa-dice-${diceString[this.props.val - 1]}`}
      ></i>
    );
  }
}

export default Die;
