import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  RecipeInfo,
  IngredientsList,
  OtherRecipes,
  CookingDirections,
} from "../components/RecipePage";
import { EatHealthyCard } from "../components";
import { fetchDataFromApi } from "../utils/fetchDataFromApi";

const RecipePage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeData = async () => {
      const data = await fetchDataFromApi(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setRecipeInfo(data.meals ? data.meals[0] : {});
    };
    fetchRecipeData();
  }, [id]);

  return (
    <main>
      <RecipeInfo recipeInfo={recipeInfo} />

      <div className="padding-x max-width flex justify-center gap-[4rem]">
        <IngredientsList recipeInfo={recipeInfo} />
        <div>
          <OtherRecipes />
          <EatHealthyCard />
        </div>
      </div>

      <CookingDirections recipeInfo={recipeInfo} />
    </main>
  );
};

export default RecipePage;
