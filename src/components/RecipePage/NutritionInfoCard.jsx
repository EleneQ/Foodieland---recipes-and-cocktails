import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { fetchNutritionData } from "../../utils/fetchNutritionData";
import { dummyNutritionData as dummyData } from "../../constans/data"; //in case api requests exeed maximum

const NutritionInfoCard = ({ ingredients, measurements, className }) => {
  const [nutritionInfo, setNutritionInfo] = useState();

  const classes = classnames(
    className,
    "bg-primary-blue-300 md:p-6 rounded-2xl w-[230px] sm:w-[250px] md:w-[420px] aspect-square relative max-md:text-center max-md:text-[14px] max-md:mt-3"
  );

  //get nutrition info
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

  const formatLabels = (labels) => {
    const maxLabelAmount = 7;
    const maxSemicollonNum =
      labels.length < maxLabelAmount ? labels.length - 1 : maxLabelAmount - 1;

    return labels.slice(0, maxLabelAmount).map((label, i) => {
      const newLabel = label.replace(/_/g, " ").toLowerCase();
      return i !== maxSemicollonNum ? `${newLabel}, ` : newLabel;
    });
  };

  return (
    <div className={classes}>
      <h4 className="font-bold text-lg mb-1 md:mb-5">Nutrition Information</h4>
      <ul className="ingredient-info">
        <li>
          Calories
          <span>{`${formatNum(calories) || dummyData.calories}`} kcal</span>
        </li>
        <li>
          Total Weight
          <span>{`${formatNum(totalWeight) || dummyData.totalWeight}g`}</span>
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
      <p className="capitalize text-gray-400 text-[12px] md:text-[14px] text-center md:absolute bottom-8 right-0 left-0 max-w-[400px] mx-auto max-md:mt-5">
        {healthLabels.length
          ? formatLabels(healthLabels)
          : formatLabels(dummyData.healthLabels)}
      </p>
    </div>
  );
};

NutritionInfoCard.propTypes = {
  ingredients: PropTypes.array.isRequired,
  measurements: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default NutritionInfoCard;
