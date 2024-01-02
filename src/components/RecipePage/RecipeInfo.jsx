import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { FiPrinter, FiShare } from "react-icons/fi";
import PropTypes from "prop-types";

import { PosterProfile } from "../";
import { NutritionInfoCard } from "./";

const RecipeInfo = ({ recipeInfo, ingredients, measurements }) => {
  const randPrepTime = Math.floor(Math.random() * (25 - 5 + 1)) + 5;

  const {
    strMeal: recipeName,
    strCategory: category,
    strMealThumb: recipeImg,
    strYoutube: recipeYoutubeLink,
  } = recipeInfo;

  return (
    <section className="padding-x max-width mt-[4rem]">
      <div className="flex items-center justify-between">
        {/* Recipe Details */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">{recipeName}</h1>
          <div className="recipe-info-details | flex items-center my-[2rem]">
            <PosterProfile />
            <div className="flex items-center font-medium gap-3 text-[14px]">
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
        </div>
        {/* Print and Share */}
        <div className="text-right">
          <div className="text-center w-[80px] cursor-pointer inline-block mr-5">
            <span className="bg-primary-blue-300 rounded-full text-lg aspect-square flex-center">
              <FiPrinter />
            </span>
            <p className="uppercase text-[12px] font-medium mt-3">Print</p>
          </div>
          <div className="text-center w-[80px] cursor-pointer inline-block">
            <span className="bg-primary-blue-300 rounded-full text-lg aspect-square flex-center">
              <FiShare />
            </span>
            <p className="uppercase text-[12px] font-medium mt-3">Share</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 justify-between overflow-hidden items-stretch">
          <a
            className="flex-1"
            href={recipeYoutubeLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-2xl h-[600px] aspect-[1/0.7]"
              src={recipeImg}
              alt={recipeName}
            />
          </a>
          <NutritionInfoCard
            ingredients={ingredients}
            measurements={measurements}
          />
        </div>
        <p className="text-gray-400 text-[15px] my-[2.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

RecipeInfo.propTypes = {
  recipeInfo: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strYoutube: PropTypes.string.isRequired,
  }).isRequired,
  ingredients: PropTypes.array.isRequired,
  measurements: PropTypes.array.isRequired,
};

export default RecipeInfo;
