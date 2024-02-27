import { createContext, useState } from "react";

export const MealsRecipeContext = createContext([]);

export const MealsRecipeProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const filterMealsByName = (searchTerm) => {
    setMeals(
      meals.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <MealsRecipeContext.Provider value={{ meals, setMeals, filterMealsByName }}>
      {children}
    </MealsRecipeContext.Provider>
  );
};
