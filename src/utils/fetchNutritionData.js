import axios from "axios";

const BASE_URL = "https://edamam-edamam-nutrition-analysis.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "4f9503c48fmshce4862d55806275p1d73edjsn271a1c9aa37e",
  "X-RapidAPI-Host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
};

export const fetchNutritionData = async (ingredients) => {
  const options = {
    url: `${BASE_URL}/api/nutrition-data`,
    params: {
      ingr: ingredients,
      "nutrition-type": "cooking",
    },
    headers,
  };

  try {
    const res = await axios.get(options.url, {
      params: options.params,
      headers,
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.error("Error fetching nutrition data:", error);
    throw error;
  }
};
