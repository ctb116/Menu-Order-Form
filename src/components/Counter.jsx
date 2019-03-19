import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import { getDrinks } from "../services/fakeDrinksService";
import DrinkMenu from "./DrinkMenu";
import Header from "./Header";
import Cart from "./Cart";
import "../styles/counter.css";

class Counter extends Component {
  state = {
    drinks: getDrinks(),
    drinksInCart: [],
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
      let order = {
        id: drink._id,
        name: drink.name,
        price: drink.price,
        ordered: 1
      };
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
    if (drink.ordered === 1) {
      this.handleDelete(drink);
    } else {
      let drinks = this.state.drinks;
      let objIndex = drinks.findIndex(obj => obj._id === drink.id);
      drinks[objIndex].numberInStock++;
      drink.ordered -= 1;
      const drinksInCart = this.state.drinksInCart.filter(d => d.id);
      this.setState({ drinksInCart, drinks });
    }
  };

  handleDelete = drink => {
    let drinks = this.state.drinks;
    let objIndex = drinks.findIndex(obj => obj._id === drink.id);
    drinks[objIndex].numberInStock += drink.ordered;
    const drinksInCart = this.state.drinksInCart.filter(
      obj => obj.id !== drink.id
    );
    this.setState({ drinksInCart, drinks });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav tabs className="tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Cart
              {this.getItemsInCart() !== 0 ? (
                <Badge>{this.getItemsInCart()}</Badge>
              ) : null}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Table hover>
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
              <tbody id="test">
                {this.state.drinks.map(drink => (
                  <DrinkMenu
                    key={drink._id}
                    drink={drink}
                    onAddToCart={this.handleOrder}
                    onZeroInStock={this.getOrderCondition}
                  />
                ))}
              </tbody>
            </Table>
          </TabPane>
          <TabPane tabId="2">
            {this.state.drinksInCart.length !== 0 ? (
              <Cart
                drinksInCart={this.state.drinksInCart}
                onReduce={this.handleReduce}
                onDelete={this.handleDelete}
              />
            ) : (
              <p>you haven't orderd anything yet!</p>
            )}
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }

  getItemsInCart() {
    let cartInt = 0;
    this.state.drinksInCart.forEach(obj => {
      cartInt += obj.ordered;
    });
    return cartInt;
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
