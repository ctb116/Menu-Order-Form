import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDrinks } from "../services/fakeDrinksService";

class Counter extends Component {
  state = {
    drinks: getDrinks(),
    drinksInCart: {},
    drinksTotalPrice: 0
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

  handlePriceTotal = drink => {
    let drinkPrice = drink.drink.price;
    let drinksTotalPrice = (this.state.drinksTotalPrice += drinkPrice);
    this.setState({ drinksTotalPrice });
    console.log(drinksTotalPrice);
  };

  handleOrder = drink => {
    this.handleDecrement(drink);
    this.handleAddToCart(drink);
    this.handlePriceTotal(drink);
  };

  render() {
    let drinksInCartArr = Object.entries(this.state.drinksInCart);
    return (
      <React.Fragment>
        <div>
          {drinksInCartArr.map(drink => (
            <p>
              {drink[0]}: {drink[1]}
            </p>
          ))}
          <span style={this.getPriceTotalClassses()}>
            ${this.state.drinksTotalPrice}
          </span>
        </div>
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
                  type="button"
                  onClick={() => this.handleOrder({ drink })}
                  disabled={this.getDisabledBool(drink)}
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

  // getBadgeClasses() {
  //   let classes = "badge badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  getPriceTotalClassses() {
    let displayFalse = {
      display: "none"
    };
    let displayTrue = {
      display: "inline"
    };
    if (this.state.drinksTotalPrice === 0) {
      return displayFalse;
    } else {
      return displayTrue;
    }
  }

  getDisabledBool(drink) {
    if (drink.numberInStock === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default Counter;
