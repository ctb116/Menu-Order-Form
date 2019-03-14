import React from "react";

const DrinkMenu = props => {
  const drink = props.drink;
  return (
    <tr>
      <td>{drink.name}</td>
      <td>{drink.brewer}</td>
      <td>{drink.abv}</td>
      <td>{drink.price}</td>
      <td>{drink.numberInStock}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => props.onAddToCart(drink)}
          disabled={drink.numberInStock === 0 ? true : false}
        >
          Order
        </button>
      </td>
    </tr>
  );
};

export default DrinkMenu;
