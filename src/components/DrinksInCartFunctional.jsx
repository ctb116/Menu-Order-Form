import React, { Component } from "react";

class DrinksInCartFunctional extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.drink.name}</td>
        <td>{this.props.drink.ordered}</td>
        <td>
          <button className="btn btn-danger btn-sm">Reduce</button>
        </td>
        <td>
          <button
            onClick={() => this.props.onDelete(this.props.drink[0])}
            className="btn btn-primary btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default DrinksInCartFunctional;
