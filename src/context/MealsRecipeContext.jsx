import axios from "axios";
import { createContext, useContext, useState } from "react";

export const MealsRecipeContext = createContext([]);

export const useMealRecipes = () => {
  return useContext(MealsRecipeContext);
};

export const MealsRecipeProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [mealsError, setMealsError] = useState(null);
  const [mealsLoading, setMealsLoading] = useState(false);

  const fetchMeals = async (url) => {
    try {
      setMealsLoading(true);

      const {
        data: { meals },
      } = await axios.get(url);

      setMeals(meals || []);
    } catch (err) {
      setMealsError(err);
    } finally {
      setMealsLoading(false);
    }
  };

  const filterMealsByName = (searchTerm) => {
    setMeals(
      meals.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <MealsRecipeContext.Provider
      value={{
        meals,
        mealsError,
        mealsLoading,
        fetchMeals,
        filterMealsByName,
      }}
    >
      {children}
    </MealsRecipeContext.Provider>
  );
};
