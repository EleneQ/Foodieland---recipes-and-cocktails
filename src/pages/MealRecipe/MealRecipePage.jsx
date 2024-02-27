import { useParams } from "react-router-dom";
import RecipeInfo from "@/components/Recipe/RecipeInfo";
import IngredientsList from "@/components/Recipe/IngredientsList";
import CookingDirections from "@/components/Recipe/RecipeDirections";
import EatHealthyCard from "@/components/EatHealthyCard";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import AdditionalRecipes from "@/components/AdditionalRecipes";
import OtherRecipes from "@/components/OtherRecipes";
import Loading from "@/components/Loading";
import { MEAL_DETAILS } from "@/constans/endpoints";
import { womanCooking } from "@/images";
import { extractIngredientsMeasurements } from "@/utils/extractIngredientsMeasurements";
import useFetch from "@/hooks/useFetch";

const MealRecipePage = () => {
  const { id } = useParams();

  //fetch data
  const {
    loading,
    error,
    value: { meals } = [],
  } = useFetch(`${MEAL_DETAILS}${id}`, {}, [id]);

  const recipeInfo = meals?.[0];

  const { ingredients, measurements } =
    extractIngredientsMeasurements(recipeInfo);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
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
