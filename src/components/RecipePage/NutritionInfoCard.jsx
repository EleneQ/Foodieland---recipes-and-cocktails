import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchNutritionData } from "../../utils/fetchNutritionData";
import { dummyNutritionData as dummyData } from "../../constans/data";

const NutritionInfoCard = ({ ingredients, measurements }) => {
  const [nutritionInfo, setNutritionInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const ingredientsString = ingredients
        .map((ingredient, index) => `${measurements[index]} ${ingredient}`)
        .join(", ")
        .toLowerCase();

      const data = await fetchNutritionData(ingredientsString);
      setNutritionInfo(data);
    };
    fetchData();
  }, [ingredients, measurements]);

  const {
    calories,
    totalWeight,
    totalDaily: {
      FAT: totalFat,
      ENERC_KCAL: energy,
      FIBTG: fiber,
      CHOLE: cholesterol,
    },
    healthLabels,
  } = nutritionInfo || dummyData;

  const formatNum = (num) => {
    return parseFloat(num.toFixed(2));
  };

  return (
    <div className="bg-primary-blue-300 p-6 rounded-2xl w-[420px] aspect-square relative">
      <h4 className="font-bold text-lg mb-5">Nutrition Information</h4>
      <ul className="ingredient-info">
        <li>
          Calories
          <span>{`${calories || dummyData.calories}`} kcal</span>
        </li>
        <li>
          Total Weight
          <span>{`${totalWeight || dummyData.totalWeight}g`}</span>
        </li>
        <li>
          Total Fat
          <span>
            {`${formatNum(
              totalFat?.quantity || dummyData.totalDaily.FAT.quantity
            )}%`}
          </span>
        </li>
        <li>
          Energy
          <span>
            {`${formatNum(
              energy?.quantity || dummyData.totalDaily.ENERC_KCAL.quantity
            )}%`}
          </span>
        </li>
        <li>
          Fiber
          <span>
            {`${formatNum(
              fiber?.quantity || dummyData.totalDaily.FIBTG.quantity
            )}%`}
          </span>
        </li>
        <li>
          Cholesterol
          <span>
            {`${formatNum(
              cholesterol?.quantity || dummyData.totalDaily.CHOLE.quantity
            )}%`}
          </span>
        </li>
      </ul>
      <p className="capitalize text-gray-400 text-[14px] text-center absolute bottom-8 right-0 left-0">
        {healthLabels.length
          ? healthLabels.slice(0, 7).map((label, i) => {
              const newLabel = label.replace(/_/g, " ").toLowerCase();
              return i !== 6 ? `${newLabel}, ` : newLabel;
            })
          : dummyData.healthFilters.map((filter, i) =>
              i !== dummyData.healthFilters.length - 1 ? `${filter}, ` : filter
            )}
      </p>
    </div>
  );
};

NutritionInfoCard.propTypes = {
  ingredients: PropTypes.array.isRequired,
  measurements: PropTypes.array.isRequired,
};

export default NutritionInfoCard;
