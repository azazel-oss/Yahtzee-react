import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isActive: false,
    });
    this.props.doScore();
  }
  render() {
    return (
      <tr
        className={`RuleRow RuleRow-${
          this.state.isActive ? "active" : "disabled"
        }`}
        onClick={this.handleClick}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.state.isActive ? this.props.description : this.props.score}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
