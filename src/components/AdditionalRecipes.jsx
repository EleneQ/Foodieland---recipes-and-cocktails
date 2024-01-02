import { useState } from "react";
import PropTypes from "prop-types";

import useFetchRecipes from "../hooks/useFetchRecipes";
import { RecipeCard } from "./HomePage";

const AdditionalRecipes = ({ letterToSearchBy, maxRecipeAmount }) => {
  const [recipes, setRecipes] = useState([]);

  useFetchRecipes(
    setRecipes,
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterToSearchBy}`
  );

  if (!recipes.length) return "Loading...";

  return (
    <ul className="additional-recipes-grid">
      {recipes.slice(0, maxRecipeAmount).map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </ul>
  );
};

AdditionalRecipes.propTypes = {
  letterToSearchBy: PropTypes.string.isRequired,
  maxRecipeAmount: PropTypes.number.isRequired,
};

export default AdditionalRecipes;
