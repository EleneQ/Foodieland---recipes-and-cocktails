import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  RecipeInfo,
  IngredientsList,
  CookingDirections,
} from "../components/RecipePage";
import {
  EatHealthyCard,
  SubscribtionBanner,
  AdditionalRecipes,
  OtherRecipes,
} from "../components";
import { Loading } from "../components";

const RecipePage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const ingredients = [];
  const measurements = [];

  //TODO: implements some type of hook!!!!!!!
  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const { meals } = await res.json();

        setRecipeInfo(meals ? meals[0] : {});
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

  if (loading) return <Loading />;

  return (
    <main>
      <RecipeInfo
        recipeInfo={recipeInfo}
        ingredients={ingredients}
        measurements={measurements}
      />

      <div className="padding-x max-width flex flex-col md:flex-row md:justify-between md:gap-[4rem]">
        <div>
          <IngredientsList
            ingredients={ingredients}
            measurements={measurements}
          />
          <CookingDirections recipeInfo={recipeInfo} />
        </div>
        <div>
          <OtherRecipes sectionTitle="Other Recipes" />
          <EatHealthyCard />
        </div>
      </div>

      <SubscribtionBanner />

      <section className="padding-x max-width mt-[6rem] mb-[6rem] md:mb-[7rem]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          You may like these recipes too
        </h2>
        <AdditionalRecipes letterToSearchBy="e" maxRecipeAmount={4} />
      </section>
    </main>
  );
};

export default RecipePage;
