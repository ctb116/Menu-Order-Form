import React, { Component } from "react";
import { Table } from "reactstrap";
import DrinkCart from "./DrinkCart";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>Drink Ordered</th>
              <th>Number Ordered</th>
              <th> </th>
              <th> </th>
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
        </Table>
        <div>
          where are you seated?{" "}
          <p>Your total cost is ${this.getTotalPrice()}</p>
        </div>
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
