import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDrinks } from "../services/fakeDrinksService";

class Counter extends Component {
  state = {
    drinks: getDrinks(),
    drinksInCart: {}
  };

  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  handleDecrement = drink => {
    drink.drink.numberInStock -= 1;
    const drinkClicked = this.state.drinks.filter(d => d._id);
    this.setState({ drinkClicked });
  };

  handleAddToCart = drink => {
    let drinksInCart = this.state.drinksInCart;
    const drinkOrdered = drink.drink.name;
    if (!drinksInCart[drinkOrdered]) {
      drinksInCart[drinkOrdered] = 1;
    } else {
      drinksInCart[drinkOrdered]++;
    }
    console.log(drinksInCart);
    this.setState({ drinksInCart });
  };

  handleOrder = drink => {
    this.handleDecrement(drink);
    this.handleAddToCart(drink);
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.drinksInCart.toString()}</span>
        <span className={this.getBadgeClasses()}>{this.disableButton()}</span>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brewer</th>
              <th>ABV</th>
              <th>Price</th>
              <th>Available</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.drinks.map(drink => (
              <tr key={drink._id}>
                <td>{drink.name}</td>
                <td>{drink.brewer}</td>
                <td>{drink.abv}</td>
                <td>{drink.price}</td>
                <td>{drink.numberInStock}</td>
                <button
                  onClick={() => this.handleOrder({ drink })}
                  className="btn btn-primary"
                >
                  Order
                </button>
              </tr>
            ))}
          </tbody>
        </table>
        Favorite Food: <FontAwesomeIcon icon="igloo" />
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
