import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlassCheers,
  faSadCry,
  faQuestion,
  faWineBottle
} from "@fortawesome/free-solid-svg-icons";
import CustomerView from "./components/CustomerView";
import "./styles/App.css";

library.add(faGlassCheers, faSadCry, faQuestion, faWineBottle);

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
