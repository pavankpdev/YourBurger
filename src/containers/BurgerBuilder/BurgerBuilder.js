/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import Aux from "../../hoc/Auxkp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const INGREDIENT_PRICES = {
  Salad: 25,
  Cheese: 30,
  Meat: 35,
  Bacon: 50
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 10
  };
  addIngredientHandler = type => {
    const oldCOunt = this.state.ingredients[type];
    const updatedCount = oldCOunt + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = type => {
    const oldCOunt = this.state.ingredients[type];
    if (oldCOunt === 0) {
      {
        alert("Your Burger is Empty!");
      }
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCOunt - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemove={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
