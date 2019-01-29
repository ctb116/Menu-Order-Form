import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDrinks } from "../services/fakeDrinksService";
import DrinksInCartFunctional from "./DrinksInCartFunctional";
import "../styles/counter.css";

class Counter extends Component {
  state = {
    drinks: getDrinks(),
    drinksInCart: [],
    drinksTotalPrice: 0
  };

  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  handleDelete = drinkId => {
    let drinksInCartArr = Object.entries(this.state.drinksInCart);
    console.log(drinksInCartArr);
    const drinksInCart = drinksInCartArr.filter(x => x.id !== drinkId);
    this.setState({ drinksInCart: drinksInCart });
    console.log("delete doed");
  };

  handleDecrement = drink => {
    drink.drink.numberInStock -= 1;
    const drinkClicked = this.state.drinks.filter(d => d._id);
    this.setState({ drinkClicked });
  };

  handleAddToCart = drink => {
    const drinkOrderName = drink.drink.name;
    const drinkOrderId = drink.drink._id;
    let drinksInCart = this.state.drinksInCart;
    let found = drinksInCart.some(function(el) {
      return el.id === drinkOrderId;
    });
    if (!found) {
      drinksInCart.push({ id: drinkOrderId, name: drinkOrderName, ordered: 1 });
    } else {
      let objIndex = drinksInCart.findIndex(obj => obj.id === drinkOrderId);
      drinksInCart[objIndex].ordered++;
    }
    this.setState({ drinksInCart });
  };

  handlePriceTotal = drink => {
    let drinkPrice = drink.drink.price;
    let drinksTotalPrice = (this.state.drinksTotalPrice += drinkPrice);
    this.setState({ drinksTotalPrice });
  };

  handleOrder = drink => {
    this.handleDecrement(drink);
    this.handleAddToCart(drink);
    this.handlePriceTotal(drink);
  };

  render() {
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
                    <DrinksInCartFunctional
                      //id undefined - only passing name and amount to state drinksInCart object
                      key={drink.id}
                      onDelete={this.handleDelete}
                      drink={drink}
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
                  <tr style={this.getStockCondition(drink)} key={drink._id}>
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
                      {this.getOrderCondition(drink)}
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // getBadgeClasses() {
  //   let classes = "badge badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  getPriceTotalClassses() {
    if (this.state.drinksTotalPrice === 0) {
      return { display: "none" };
    } else {
      return { display: "inline" };
    }
  }

  getDisabledBool(drink) {
    if (drink.numberInStock === 0) {
      return true;
    } else {
      return false;
    }
  }

  getStockCondition(drink) {
    if (drink.numberInStock === 0) {
      return { backgroundColor: "red" };
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
