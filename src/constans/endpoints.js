//recipes urls
export const MEAL_BASE_URL = `https://www.themealdb.com/api/json/v1/${
  import.meta.env.VITE_MEAL_API_KEY
}`;
export const ALL_MEAL_CATEGORIES = `${MEAL_BASE_URL}/categories.php`;
export const MEALS_BY_LETTER = `${MEAL_BASE_URL}/search.php?f=`;
export const MEAL_DETAILS = `${MEAL_BASE_URL}/lookup.php?i=`;
export const MEALS_BY_NAME = `${MEAL_BASE_URL}/search.php?s=`;
export const MEALS_BY_CATEGORY = `${MEAL_BASE_URL}/filter.php?c=`;

//cocktail urls
export const COCKTAIL_BASE_URL = `https://www.thecocktaildb.com/api/json/v1/${
  import.meta.env.VITE_COCKTAIL_API_KEY
}`;
export const COCKTAIL_DETAILS = `${COCKTAIL_BASE_URL}/lookup.php?i=`;
export const COCKTAILS_BY_NAME = `${COCKTAIL_BASE_URL}/search.php?s=`;
export const COCKTAILS_BY_LETTER = `${COCKTAIL_BASE_URL}/search.php?f=`;
