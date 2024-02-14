import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeInfo from "../../components/Recipe/RecipeInfo";
import IngredientsList from "../../components/Recipe/IngredientsList";
import CookingDirections from "../../components/Recipe/RecipeDirections";
import EatHealthyCard from "../../components/EatHealthyCard";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import AdditionalRecipes from "../../components/AdditionalRecipes";
import OtherRecipes from "../../components/OtherRecipes";
import Loading from "../../components/Loading";
import { RECIPE_DETAILS } from "../../constans/endpoints";
import { womanCooking } from "../../images";
import { extractIngredientsMeasurements } from "../../utils/extractIngredientsMeasurements";

const MealRecipePage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  //fetch data
  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await axios.get(`${RECIPE_DETAILS}${id}`);
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

  const { ingredients, measurements } =
    extractIngredientsMeasurements(recipeInfo);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RecipeInfo
            ingredients={ingredients}
            measurements={measurements}
            name={recipeInfo.strMeal}
            category={recipeInfo.strCategory}
            videoThumbnail={recipeInfo.strMealThumb}
            videoLink={recipeInfo.strYoutube}
          />

          <div className="padding-x max-width flex flex-col md:flex-row md:justify-between md:gap-[4rem]">
            <div>
              <IngredientsList
                ingredients={ingredients}
                measurements={measurements}
              />

              <CookingDirections
                recipeInfo={recipeInfo}
                processImage={womanCooking}
              />
            </div>
            <div>
              <OtherRecipes sectionTitle="Other Recipes" />
              <EatHealthyCard />
            </div>
          </div>

          <SubscriptionBanner />

          <section className="padding-x max-width mt-[6rem] mb-[6rem] md:mb-[7rem]">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              You may like these recipes too
            </h2>
            <AdditionalRecipes letterToSearchBy="e" maxRecipeAmount={4} />
          </section>
        </>
      )}
    </main>
  );
};

export default MealRecipePage;
