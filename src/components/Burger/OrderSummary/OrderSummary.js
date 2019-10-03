import React from "react";
import Aux from "../../../hoc/Auxkp";
const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey}</span>: &#160;
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <p>Total : {props.total}</p>
      <button>Cancel</button>
      <button>Co ntinue</button>
    </Aux>
  );
};

export default orderSummary;