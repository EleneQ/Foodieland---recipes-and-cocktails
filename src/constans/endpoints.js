//recipes urls
export const MEALS_BASE_URL = "https://www.themealdb.com/api/json/v1/1";
export const ALL_MEAL_CATEGORIES = `${MEALS_BASE_URL}/categories.php`;
export const MEALS_BY_LETTER = `${MEALS_BASE_URL}/search.php?f=`;
export const MEAL_DETAILS = `${MEALS_BASE_URL}/lookup.php?i=`;
export const MEALS_BY_NAME = `${MEALS_BASE_URL}/search.php?s=`;
export const MEALS_BY_CATEGORY = `${MEALS_BASE_URL}/filter.php?c=`;

//cocktail urls
export const COCKTAIL_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";
export const COCKTAIL_DETAILS = `${COCKTAIL_BASE_URL}/lookup.php?i=`;
export const COCKTAILS_BY_NAME = `${COCKTAIL_BASE_URL}/search.php?s=`;
export const COCKTAILS_BY_LETTER = `${COCKTAIL_BASE_URL}/search.php?f=`;
