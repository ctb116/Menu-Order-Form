import React, { Component } from "react";

class DrinksInCartControlled extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.drink.name}</td>
        <td>{this.props.drink.ordered}</td>
        <td>

          <button
            onClick={() => this.props.onReduce(this.props.drink)}
            className="btn btn-danger btn-sm"
          >
            Reduce
          </button>
        </td>
        <td>
          <button
            onClick={() => this.props.onDelete(this.props.drink.id)}
            className="btn btn-primary btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DrinksInCartControlled;
