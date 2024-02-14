import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { COCKTAIL_DETAILS } from "../../constans/endpoints";
import IngredientsList from "../../components/Recipe/IngredientsList";
import RecipeInfo from "../../components/Recipe/RecipeInfo";
import AdditionalRecipes from "../../components/AdditionalRecipes";
import EatHealthyCard from "../../components/EatHealthyCard";
import Loading from "../../components/Loading";
import OtherRecipes from "../../components/OtherRecipes";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import CookingDirections from "../../components/Recipe/RecipeDirections";
import axios from "axios";
import { bartender } from "../../images";
import { extractIngredientsMeasurements } from "../../utils/extractIngredientsMeasurements";

const CocktailRecipePage = () => {
  const [cocktailInfo, setCocktailnfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  //fetch data
  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await axios.get(`${COCKTAIL_DETAILS}${id}`);
        const { drinks } = res.data;

        setCocktailnfo(drinks[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
        setLoading(false);
      }
    };
    fetchRecipeData();
  }, [id]);

  const { ingredients, measurements } =
    extractIngredientsMeasurements(cocktailInfo);

  return (
    <main>
      {loading ? (
        <Loading />
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
