import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      <BurgerIngredient type="Cheese" />
      <BurgerIngredient type="Meat" />
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default burger;
