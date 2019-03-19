import React, { Component } from "react";
import { Collapse, Button } from "reactstrap";

class DrinkMenu extends Component {
  state = { collapse: false, status: "Closed" };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  onEntering = () => {
    this.setState({ status: "Opening..." });
  };

  onEntered = () => {
    this.setState({ status: "Opened" });
  };

  onExiting = () => {
    this.setState({ status: "Closing..." });
  };

  onExited = () => {
    this.setState({ status: "Closed" });
  };

  render() {
    const drink = this.props.drink;
    return (
      <React.Fragment>
        <tr style={this.getStockCondition()}>
          <td onClick={this.toggle}>{drink.name}</td>
          <td onClick={this.toggle}>{drink.brewer}</td>
          <td>{drink.abv}</td>
          <td>{drink.price}</td>
          <td>{drink.numberInStock}</td>
          <td>
            <Button
              color={drink.numberInStock === 0 ? "danger" : "primary"}
              onClick={() => this.props.onAddToCart(drink)}
              disabled={drink.numberInStock === 0 ? true : false}
            >
              Add
            </Button>
          </td>
        </tr>
        <tr
          style={
            this.state.collapse === false && this.state.status === "Closed"
              ? { display: "none" }
              : { display: "contents" }
          }
        >
          <td colSpan="6">
            <Collapse
              isOpen={this.state.collapse}
              onEntering={this.onEntering}
              onEntered={this.onEntered}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <p onClick={this.toggle}>{drink.description}</p>
            </Collapse>
          </td>
        </tr>
      </React.Fragment>
    );
  }

  getStockCondition = () => {
    if (this.props.drink.numberInStock === 0) {
      return { backgroundColor: "red" };
    }
  };
}

export default DrinkMenu;
