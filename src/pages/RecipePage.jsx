import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  RecipeInfo,
  IngredientsList,
  OtherRecipes,
  CookingDirections,
} from "../components/RecipePage";
import {
  EatHealthyCard,
  SubscriptionBanner,
  AdditionalRecipes,
} from "../components";
import { fetchDataFromApi } from "../utils/fetchDataFromApi";

const RecipePage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const ingredients = [];
  const measurements = [];

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const data = await fetchDataFromApi(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        setRecipeInfo(data.meals ? data.meals[0] : {});
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [id]);

  const extractIngredientsMeasurements = () => {
    for (let i = 1; i <= Object.values(recipeInfo).length; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measurementKey = `strMeasure${i}`;

      if (recipeInfo[ingredientKey]) {
        ingredients.push(recipeInfo[ingredientKey]);
        measurements.push(recipeInfo[measurementKey]);
      } else break;
    }
  };
  extractIngredientsMeasurements();

  if (loading) return "Loading...";

  return (
    <main>
      <RecipeInfo
        recipeInfo={recipeInfo}
        ingredients={ingredients}
        measurements={measurements}
      />

      <div className="padding-x max-width flex justify-center gap-[4rem]">
        <IngredientsList
          ingredients={ingredients}
          measurements={measurements}
        />
        <div>
          <OtherRecipes />
          <EatHealthyCard />
        </div>
      </div>

      <CookingDirections recipeInfo={recipeInfo} />
      <SubscriptionBanner />

      <section className="padding-x max-width mt-[6rem] mb-[7rem]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          You may like these recipe too
        </h2>
        <AdditionalRecipes letterToSearchBy="e" maxRecipeAmount={4} />
      </section>
    </main>
  );
};

export default RecipePage;
