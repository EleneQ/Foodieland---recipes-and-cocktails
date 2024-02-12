import { useState } from "react";
import PropTypes from "prop-types";

import { Loading } from "./";
import { RecipeCard } from "./HomePage";
import useFetchEffect from "../hooks/useFetchEffect";

const AdditionalRecipes = ({ letterToSearchBy, maxRecipeAmount }) => {
  const [recipes, setRecipes] = useState([]);

  //fetch recipes by letter
  useFetchEffect(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterToSearchBy}`,
    setRecipes,
    (data) => data.meals || [],
    {},
    [letterToSearchBy, maxRecipeAmount]
  );

  if (!recipes.length) return <Loading />;

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
