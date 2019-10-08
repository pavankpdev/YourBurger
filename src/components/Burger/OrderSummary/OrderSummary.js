import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Auxkp";
class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("updated bruh!");
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}> {igKey}</span>:
            &#160;
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>Continue to checkout?</p>
        <p>Total : {this.props.total}</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
