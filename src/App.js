import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import Counters from "./components/Counters";
// import DrinksInCart from "./components/DrinksInCart";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div>
        <Counters />
      </div>
    );
  }
}

export default App;
