export const NUTRITION_URL =
  "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data";

const NUTRITION_HEADERS = {
  "X-RapidAPI-Key": "4f9503c48fmshce4862d55806275p1d73edjsn271a1c9aa37e",
  "X-RapidAPI-Host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
};

export const getNutritionOptions = (ingredients = "") => {
  return {
    url: `${NUTRITION_URL}`,
    params: {
      ingr: ingredients,
      "nutrition-type": "cooking",
    },
    nutritionHeaders: NUTRITION_HEADERS,
  };
};
