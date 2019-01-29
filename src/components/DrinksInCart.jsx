import React, { Component } from "react";
import DrinksInCartFunctional from "./DrinksInCartFunctional";

class DrinksInCart extends Component {
  state = {
    drinksInCart: {},
    drinksTotalPrice: 0
  };
  render() {
    return (
      <div>
        <DrinksInCartFunctional />
      </div>
    );
  }
}

export default DrinksInCart;
