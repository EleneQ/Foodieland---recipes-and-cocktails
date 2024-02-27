import { useContext } from "react";
import { MealsRecipeContext } from "../context/MealsRecipeContext";

export const useMealRecipes = () => {
  return useContext(MealsRecipeContext);
};
