import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDrinks } from "../services/fakeDrinksService";
import DrinksInCartControlled from "./DrinksInCartControlled";
import DrinkMenu from "./DrinkMenu";
import "../styles/counter.css";

class Counter extends Component {
  state = {
    drinks: getDrinks(),
    drinksInCart: [],
    drinksTotalPrice: 0
  };

  handleOrder = drink => {
    this.handleAddToCart(drink);
    this.handleDecrement(drink);
    this.handlePriceTotal(drink);
  };

  handleAddToCart = drink => {
    let drinksInCart = this.state.drinksInCart;
    let found = drinksInCart.some(function(el) {
      return el.id === drink._id;
    });
    if (!found) {
      let order = { id: drink._id, name: drink.name, ordered: 1 };
      this.setState(prevState => ({
        drinksInCart: [...prevState.drinksInCart, order]
      }));
    } else {
      let objIndex = drinksInCart.findIndex(obj => obj.id === drink._id);
      drinksInCart[objIndex].ordered++;
      this.setState({ drinksInCart });
    }
  };

  handleDecrement = drink => {
    drink.numberInStock -= 1;
    const drinkClicked = this.state.drinks.filter(d => d._id);
    this.setState({ drinkClicked });
  };

  handlePriceTotal = drink => {
    let drinksTotalPrice = this.state.drinksTotalPrice;
    this.setState({ drinksTotalPrice: (drinksTotalPrice += drink.price) });
  };

  handleReduce = drink => {
    if (drink.ordered === 0) {
    } else {
      drink.ordered -= 1;
    }
    const drinksInCart = this.state.drinksInCart.filter(d => d.id);
    this.setState({ drinksInCart });
  };

  handleDelete = drinkId => {
    const drinksInCart = this.state.drinksInCart.filter(
      obj => obj.id !== drinkId
    );
    this.setState({ drinksInCart });
  };

  render() {
    console.log(this.state.drinksInCart);
    return (
      <React.Fragment>
        <div className="imageCenter">
          <img
            className="frontLogo"
            src={require("../assets/images/HeaderLogo.jpg")}
            alt="header logo"
          />
        </div>
        <div className="mainBody">
          <div className="cart">
            <div className="cartItems">
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Drink Ordered</th>
                    <th scope="col">Number Ordered</th>
                    <th scope="col">Reduce Order</th>
                    <th scope="col">Delete Order</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.drinksInCart.map(drink => (
                    <DrinksInCartControlled
                      key={drink.id}
                      drink={drink}
                      onDelete={this.handleDelete}
                      onReduce={this.handleReduce}
                    />
                  ))}
                </tbody>
              </table>
              <div style={this.getPriceTotalClassses()}>
                ${this.state.drinksTotalPrice}
              </div>
            </div>
          </div>
          <div className="menu">
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
                  <DrinkMenu
                    key={drink._id}
                    drink={drink}
                    onAddToCart={this.handleOrder}
                    onZeroInStock={this.getOrderCondition}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getPriceTotalClassses() {
    if (this.state.drinksTotalPrice === 0) {
      return { display: "none" };
    } else {
      return { display: "inline" };
    }
  }

  getOrderCondition(drink) {
    if (drink.numberInStock === 0) {
      return "Out of Stock";
    } else {
      return "Add";
    }
  }
}

export default Counter;
