import { useParams } from "react-router-dom";
import { COCKTAIL_DETAILS } from "../../constans/endpoints";
import IngredientsList from "../../components/Recipe/IngredientsList";
import RecipeInfo from "../../components/Recipe/RecipeInfo";
import AdditionalRecipes from "../../components/AdditionalRecipes";
import EatHealthyCard from "../../components/EatHealthyCard";
import Loading from "../../components/Loading";
import OtherRecipes from "../../components/OtherRecipes";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import CookingDirections from "../../components/Recipe/RecipeDirections";
import { bartender } from "../../images";
import { extractIngredientsMeasurements } from "../../utils/extractIngredientsMeasurements";
import useFetch from "../../hooks/useFetch";

const CocktailRecipePage = () => {
  const { id } = useParams();

  //fetch data
  const {
    loading,
    error,
    value: { drinks } = [],
  } = useFetch(`${COCKTAIL_DETAILS}${id}`, {}, [id]);

  const cocktailInfo = drinks?.[0];

  const { ingredients, measurements } =
    extractIngredientsMeasurements(cocktailInfo);

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
            name={cocktailInfo.strDrink}
            category={cocktailInfo.strCategory}
            videoThumbnail={cocktailInfo.strDrinkThumb}
            videoLink={cocktailInfo.strVideo}
          />

          <div className="padding-x max-width flex flex-col md:flex-row md:justify-between md:gap-[4rem]">
            <div>
              <IngredientsList
                ingredients={ingredients}
                measurements={measurements}
              />

              <CookingDirections
                recipeInfo={cocktailInfo}
                processImage={bartender}
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
            <AdditionalRecipes letterToSearchBy="g" maxRecipeAmount={4} />
          </section>
        </>
      )}
    </main>
  );
};

export default CocktailRecipePage;
