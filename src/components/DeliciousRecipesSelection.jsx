import { useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/fetchDataFromApi";
import { RecipeCard } from "./";

const DeliciousRecipesSelection = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { meals } = await fetchDataFromApi(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=k"
      );
      setRecipes(meals || []);
    };
    fetchRecipes();
  }, []);

  if (!recipes.length) return "Loading...";

  return (
    <section className="padding-x max-width mt-[7rem]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-[2.5rem] gap-5 md:gap-[4rem] max-md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-[450px]">
          Try this delicious recipe to make your day
        </h2>
        <p className="max-w-[620px] text-gray-400 max-md:text-[14px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <ul className="delicious-recipes-grid">
        {recipes.slice(0, 8).map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default DeliciousRecipesSelection;
