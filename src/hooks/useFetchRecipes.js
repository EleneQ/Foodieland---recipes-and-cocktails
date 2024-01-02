import { useEffect } from "react";

import { fetchDataFromApi } from "../utils/fetchDataFromApi";

function useFetchRecipes(setData, url, dependencies) {
  useEffect(() => {
    const fetchRecipes = async () => {
      const { meals } = await fetchDataFromApi(url);
      setData(meals || []);
    };
    fetchRecipes();
  }, [dependencies]);
}

export default useFetchRecipes;
