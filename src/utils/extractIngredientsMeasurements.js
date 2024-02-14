export const extractIngredientsMeasurements = (recipeInfo) => {
  const ingredients = [];
  const measurements = [];

  for (let i = 1; i <= Object.values(recipeInfo).length; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measurementKey = `strMeasure${i}`;

    if (recipeInfo[ingredientKey]) {
      ingredients.push(recipeInfo[ingredientKey]);
      measurements.push(recipeInfo[measurementKey]);
    } else break;
  }

  return { ingredients, measurements };
};
