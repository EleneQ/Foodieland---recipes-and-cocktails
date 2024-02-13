import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeInfo from "../components/RecipePage/RecipeInfo";
import IngredientsList from "../components/RecipePage/IngredientsList";
import CookingDirections from "../components/RecipePage/CookingDirections";
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
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const { meals } = res.data;

        setRecipeInfo(meals[0]);
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
