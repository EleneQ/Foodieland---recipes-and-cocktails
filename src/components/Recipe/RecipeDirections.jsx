import { useState, useEffect } from "react";

const CookingDirections = ({ recipeInfo, processImage }) => {
  const [instructionParts, setInstructionParts] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const { strInstructions: directions } = recipeInfo;

  //divide directions into parts
  useEffect(() => {
    const splitInstructions = () => {
      if (!directions) return;

      const sentences = directions.split(/(?<=[.!?])\s+/);
      const maxSentencesPerPart = 5;

      const parts = [];
      for (let i = 0; i < sentences.length; i += maxSentencesPerPart) {
        const part = sentences.slice(i, i + maxSentencesPerPart).join(" ");
        parts.push(part);
      }
      setInstructionParts(parts);
    };

    splitInstructions();
  }, [directions]);

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
    <section className="max-w-[840px] mt-[4rem] md:mt-[5rem]">
      <h2 className="text-3xl font-bold">Directions</h2>
      <ul>
        {instructionParts.map((part, index) => {
          const isLabelSelected = selectedLabels.includes(index);

          return (
            <li
              key={index}
              className="mt-6 pb-8 border-b-[1px] border-b-[#0000001A]"
            >
              <div className="circular-checkbox-container">
                <input
                  type="checkbox"
                  name={`instruction-${index}`}
                  value={`instruction-${index}`}
                  id={`instruction-${index}`}
                  onChange={() => handleCheckboxChange(index)}
                  checked={selectedLabels.includes(index) || false}
                />
                <label
                  className={`text-lg ${
                    isLabelSelected
                      ? "line-through text-gray-300 font-normal"
                      : "font-semibold"
                  }`}
                  htmlFor={`instruction-${index}`}
                >
                  {`Step ${index + 1}`}
                </label>
              </div>

              <p className="text-gray-400 mt-4">{part}</p>

              {index === 0 && (
                <img
                  className="mt-7 rounded-2xl object-cover max-h-[400px] object-center lg:w-[800px] max-lg:max-w-[100%]"
                  src={processImage}
                  alt="process of creation"
                  loading="lazy"
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CookingDirections;
