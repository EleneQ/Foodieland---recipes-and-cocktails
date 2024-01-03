import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../";

const IngredientsList = ({ ingredients, measurements }) => {
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const initialIngredientsNum = 10;

  const handleCheckboxChange = (index) => {
    setSelectedLabels((prevLabels) => {
      if (prevLabels.includes(index)) {
        return prevLabels.filter((label) => label !== index);
      } else {
        return [...prevLabels, index];
      }
    });
  };

  return (
    <section className="flex-1">
      <h2 className="text-3xl font-bold">Ingredients</h2>
      <ul className="capitalize text-[0.95rem]">
        {ingredients.map((ingredient, index) => {
          if (!showAllIngredients && index >= initialIngredientsNum) return;

          const isLabelSelected = selectedLabels.includes(index);

          return (
            <li
              className={`py-[0.8rem] border-b-[1px] border-b-[#0000001A] ${
                isLabelSelected ? "line-through text-gray-300" : ""
              }`}
              key={index}
            >
              <div className="circular-checkbox-container">
                <input
                  type="checkbox"
                  id={`checkbox_${index}`}
                  name={ingredient}
                  value={`${ingredient} ${measurements[index]}`}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`checkbox_${index}`}>
                  {`${ingredient} - ${measurements[index]}`}
                </label>
              </div>
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
