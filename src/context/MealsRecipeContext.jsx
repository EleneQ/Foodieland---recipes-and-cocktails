import { createContext, useContext, useState } from "react";

export const MealsRecipeContext = createContext([]);

export const useMealRecipes = () => {
  return useContext(MealsRecipeContext);
};

export const MealsRecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <MealsRecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </MealsRecipeContext.Provider>
  );
};
