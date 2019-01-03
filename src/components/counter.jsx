import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button class="btn btn-primary">Order</button>
      </React.Fragment>
    );
  }
}

export default Counter;
