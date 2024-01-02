import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { womanCooking } from "../../images";

const CookingDirections = ({ recipeInfo }) => {
  const { strInstructions: directions } = recipeInfo;
  const [instructionsParts, setInstructionsParts] = useState([]);

  //divide directions into parts
  useEffect(() => {
    const splitInstructions = () => {
      if (!directions) return;

      const sentences = directions.split(/(?<=[.!?])\s+/);
      const maxSentencesPerPart = 5;

      // Create parts with a maximum of 'maxSentencesPerPart' sentences each
      const parts = [];
      for (let i = 0; i < sentences.length; i += maxSentencesPerPart) {
        const part = sentences.slice(i, i + maxSentencesPerPart).join(" ");
        parts.push(part);
      }
      setInstructionsParts(parts);
    };

    splitInstructions();
  }, [directions]);

  return (
    <section className="padding-x max-w-[840px]">
      <h2 className="text-3xl font-bold">Directions</h2>
      <ul>
        {instructionsParts.map((part, index) => (
          <li
            key={index}
            className="mt-6 pb-8 border-b-[1px] border-b-[#0000001A]"
          >
            <label
              className="font-semibold text-lg"
              htmlFor={`instruction-${index}`}
            >
              <input
                type="checkbox"
                name={`instruction-${index}`}
                value={`instruction-${index}`}
                id={`instruction-${index}`}
              />{" "}
              {`Step ${index + 1}`}
            </label>

            <p className="text-gray-400 mt-4">{part}</p>

            {index === 0 && (
              <img
                className="mt-7"
                src={womanCooking}
                alt="a woman smiling and stirring a pot"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

CookingDirections.propTypes = {
  recipeInfo: PropTypes.shape({
    strInstructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default CookingDirections;
