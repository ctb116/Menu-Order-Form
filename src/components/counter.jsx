import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    names: ["Ruby Zozzle", "Tart N Juicy", "Hamms"],
    brewers: ["Hi-Wheel", "Epic", "Miller/Coors"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.disableButton()}</span>
        <button class="btn btn-primary">Order</button>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Brewer</th>
              <th scope="col">Description</th>
              <th scope="col">ABV</th>
            </tr>
          </thead>
          <tbody>
            {this.state.brewers.map(brewer => (
              <tr key={brewer}>{brewer}</tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  disableButton() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
