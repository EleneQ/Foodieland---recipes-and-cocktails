import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CocktailInfo from "../components/CocktailPage/CocktailInfo";

const CocktailPage = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // useEffect(() => {
  //   const fetchRecipeData = async () => {
  //     try {
  //       const data = await fetchDataFromApi(
  //         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  //       );

  //       setRecipeInfo(data.meals ? data.meals[0] : {});
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching recipe data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchRecipeData();
  // }, [id]);

  return (
    <main>
      <CocktailInfo />
    </main>
  );
};
export default CocktailPage;
