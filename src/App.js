import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import CustomerView from "./components/CustomerView";
import "./styles/App.css";
// import DrinksInCart from "./components/DrinksInCart";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div>
        <CustomerView />
      </div>
    );
  }
}

export default App;
