import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import PropTypes from "prop-types";

const RecipeInfoDetails = ({ category, className }) => {
  //TODO: don't change between renders
  const randPrepTime = Math.floor(Math.random() * (25 - 5 + 1)) + 5;

  return (
    <div className={className}>
      <div className="flex items-center font-medium gap-3 mb-2 text-[13px] md:text-[14px]">
        <FaClock className="text-base" />
        <p className="uppercase flex flex-col">
          Prep time
          <span className="text-gray-400">{`${randPrepTime} Minutes`}</span>
        </p>
      </div>
      <p className="flex items-center text-gray-400 font-medium gap-2 text-[14px]">
        <PiForkKnifeFill className="text-black text-xl" />
        {category}
      </p>
    </div>
  );
};

RecipeInfoDetails.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RecipeInfoDetails;
