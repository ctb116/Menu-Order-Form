import React, { Component } from "react";
import { Button } from "reactstrap";

class DrinkMenu extends Component {
  getStockCondition = () => {
    if (this.props.drink.numberInStock === 0) {
      return { backgroundColor: "red" };
    }
  };

  render() {
    const drink = this.props.drink;
    return (
      <React.Fragment>
        <tr style={this.getStockCondition()}>
          <td>{drink.name}</td>
          <td>{drink.brewer}</td>
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
      </React.Fragment>
    );
  }
}

export default DrinkMenu;
