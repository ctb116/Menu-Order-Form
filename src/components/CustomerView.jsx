import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Counter from "./Counter";
import ReactCarousel from "./ReactCarousel";
import RightColAdverts from "../assets/RightColAdverts";
import LeftColAdverts from "../assets/LeftColAdverts";

class CustomerView extends Component {
  render() {
    return (
      <Row>
        <Col xs="3">
          <ReactCarousel advertArray={LeftColAdverts} />
        </Col>
        <Col xs="6">
          <div className="center-shadow">
            <Counter />
          </div>
        </Col>
        <Col xs="3">
          <ReactCarousel advertArray={RightColAdverts} />
        </Col>
      </Row>
    );
  }
}

export default CustomerView;
