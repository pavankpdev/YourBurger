/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import Aux from "../../hoc/Auxkp";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
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
    totalPrice: 10,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    axios
      .get("https://yourburger-95b47.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({
          ingredients: response.data
        });
      });
    axios
      .get("https://yourburger-95b47.firebaseio.com/state.json")
      .then(response => {
        this.setState({
          purchasable: response.data
        });
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  isPurchasing = () => {
    this.setState({ purchasing: true });
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
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCOunt = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCOunt - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    // alert("Yay Let's go!");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Pavan Kumar K",
        address: {
          street: "Magadi Road",
          ZipCode: "12345",
          Country: "India"
        }
      },
      delivery: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => this.setState({ loading: false, purchasing: false }))
      .catch(Error => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    console.log("it's purchaseable =>", this.state.purchasable);
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummaryVar = null;

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientsAdded={this.addIngredientHandler}
            ingredientsRemove={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.isPurchasing}
            price={this.state.totalPrice}
          />
        </Aux>
      );
      orderSummaryVar = (
        <OrderSummary
          ingredients={this.state.ingredients}
          total={this.state.totalPrice}
          purchaseCancel={this.purchaseCancel}
          purchaseContinue={this.purchaseContinue}
        />
      );
    }
    if (this.state.loading) {
      orderSummaryVar = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          {orderSummaryVar}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
