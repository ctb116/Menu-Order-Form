import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "reactstrap";

const EmptyCart = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="emptycart" colSpan="2">
            <p>You got nothing in your cart!</p>
            <p> Do you need some help?</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="emptycart">
          <td>
            <Button className="emptycartbutton" color="success">
              <p>I can't decide!</p>
              <p>What do you recommend?</p>
              <FontAwesomeIcon icon="question" />
            </Button>
          </td>
          <td>
            <Button className="emptycartbutton" color="warning">
              <p>Yes! Help!</p>
              <p>I am waaaay too drunk for this!</p>
              <FontAwesomeIcon icon="sad-cry" />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EmptyCart;
