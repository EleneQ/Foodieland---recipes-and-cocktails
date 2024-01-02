import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../";

const IngredientsList = ({ ingredients, measurements }) => {
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const initialIngredientsNum = 10;

  return (
    <section className="flex-1">
      <h2 className="text-3xl font-bold mb-[1.5rem]">Ingredients</h2>
      <ul className="capitalize text-[0.95rem]">
        {ingredients.map((ingredient, index) => {
          if (!showAllIngredients && index >= initialIngredientsNum) return;

          return (
            <li
              className="py-[0.8rem] border-b-[1px] border-b-[#0000001A]"
              key={index}
            >
              <label htmlFor={`checkbox_${index}`}>
                <input
                  className="align-middle"
                  type="checkbox"
                  id={`checkbox_${index}`}
                  name={ingredient}
                  value={`${ingredient} ${measurements[index]}`}
                />{" "}
                {`${ingredient} - ${measurements[index]}`}
              </label>
            </li>
          );
        })}
      </ul>
      {ingredients.length > initialIngredientsNum && (
        <Button
          className={"mt-5 mb-[5rem]"}
          onClick={() => setShowAllIngredients((prev) => !prev)}
          primary
        >
          {showAllIngredients ? "Show Less" : "Show All"}
        </Button>
      )}
    </section>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  measurements: PropTypes.array.isRequired,
};

export default IngredientsList;
