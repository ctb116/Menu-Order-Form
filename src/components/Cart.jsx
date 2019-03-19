import React, { Component } from "react";
import DrinkCart from "./DrinkCart";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Drink Ordered</th>
              <th scope="col">Number Ordered</th>
            </tr>
          </thead>
          <tbody>
            {this.props.drinksInCart.map(drink => (
              <DrinkCart
                key={drink.id}
                drink={drink}
                onDelete={this.props.onDelete}
                onReduce={this.props.onReduce}
              />
            ))}
          </tbody>
        </table>
        <p>{this.getTotalPrice()}</p>
      </React.Fragment>
    );
  }
  getTotalPrice = () => {
    let totalPrice = 0;
    this.props.drinksInCart.forEach(obj => {
      totalPrice += obj.price * obj.ordered;
    });
    return totalPrice;
  };
}

export default Cart;
