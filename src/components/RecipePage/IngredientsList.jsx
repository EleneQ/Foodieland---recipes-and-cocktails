import PropTypes from "prop-types";

const IngredientsList = ({ recipeInfo }) => {
  const ingredients = [];
  const measurements = [];

  const extractIngredientsMesurements = () => {
    for (let i = 1; i <= Object.values(recipeInfo).length; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measurementKey = `strMeasure${i}`;

      if (recipeInfo[ingredientKey]) {
        ingredients.push(recipeInfo[ingredientKey]);
        measurements.push(recipeInfo[measurementKey]);
      } else break;
    }
  };
  extractIngredientsMesurements();

  return (
    <section className="flex-1">
      <h2 className="text-3xl font-semibold mb-[1.5rem]">Ingredients</h2>
      <ul className="capitalize text-[0.95rem]">
        {ingredients.map((ingredient, index) => (
          <li
            className="py-[0.8rem] border-b-[1px] border-b-[#0000001A]"
            key={index}
          >
            <label htmlFor={ingredient}>
              <input
                className="align-middle"
                type="checkbox"
                id={ingredient}
                name={ingredient}
                value={`${ingredient} ${measurements[index]}`}
              />{" "}
              {`${ingredient} - ${measurements[index]}`}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

IngredientsList.propTypes = {
  recipeInfo: PropTypes.object.isRequired,
};

export default IngredientsList;
