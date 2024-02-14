import { nutritionData } from "../../constans/data";

const NutritionInfoCard = ({ className }) => {
  const { calories, totalWeight, totalDaily, healthLabels } = nutritionData;

  return (
    <div
      className={`bg-primary-blue-300 md:p-6 rounded-2xl w-[230px] sm:w-[250px] md:w-[420px] aspect-square relative max-md:text-center max-md:text-[14px] max-md:mt-3 ${className}`}
    >
      <h4 className="font-bold text-lg mb-1 md:mb-5">Nutrition Information</h4>
      <ul className="ingredient-info">
        <li>
          Calories
          <span>{calories} kcal</span>
        </li>
        <li>
          Total Weight
          <span>{totalWeight}</span>
        </li>
        <li>
          Total Fat
          <span>{totalDaily.Fat.quantity}%</span>
        </li>
        <li>
          Energy
          <span>{totalDaily.Energy_Kcal.quantity}%</span>
        </li>
        <li>
          Fiber
          <span>{totalDaily.Fiber.quantity}%</span>
        </li>
        <li>
          Cholesterol
          <span>{totalDaily.Cholesterol.quantity}%</span>
        </li>
      </ul>
      <p className="capitalize text-gray-400 text-[12px] md:text-[14px] text-center md:absolute bottom-8 right-0 left-0 max-w-[400px] mx-auto max-md:mt-5">
        {healthLabels.map((label, index) => (
          <span key={index}>
            {label}
            {index !== healthLabels.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default NutritionInfoCard;
