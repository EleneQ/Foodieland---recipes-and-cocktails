import PropTypes from "prop-types";
import  Loading from "./Loading";
import RecipeCard from "../pages/Home/MealCard";
import useFetch from "../hooks/useFetch";
import { RECIPES_BY_LETTER } from "../constans/endpoints";

const AdditionalRecipes = ({ letterToSearchBy, maxRecipeAmount }) => {
  const {
    loading,
    error,
    value: { meals } = [],
  } = useFetch(`${RECIPES_BY_LETTER}${letterToSearchBy}`, {}, [
    letterToSearchBy,
    maxRecipeAmount,
  ]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ul className="additional-recipes-grid">
          {meals.slice(0, maxRecipeAmount).map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      )}
    </>
  );
};

AdditionalRecipes.propTypes = {
  letterToSearchBy: PropTypes.string.isRequired,
  maxRecipeAmount: PropTypes.number.isRequired,
};

export default AdditionalRecipes;
