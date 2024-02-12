import { useRef } from "react";
import { GrInfo } from "react-icons/gr";
import PropTypes from "prop-types";

import { playButton } from "../../images";
import { PosterProfile } from "../";
import {
  NutritionInfoCard,
  RecipeInfoDetails,
  SharePrintButtonGroup,
} from "./";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";

const RecipeInfo = ({ recipeInfo, ingredients, measurements }) => {
  const additionalInfo = useRef();
  const [infoExpanded, setInfoExpanded] =
    useOutsideClickHandler(additionalInfo);

  const {
    strMeal: recipeName,
    strCategory: category,
    strMealThumb: recipeImg,
    strYoutube: recipeYoutubeLink,
  } = recipeInfo;

  return (
    <section className="padding-x max-width mt-[3rem] md:mt-[4rem] mb-[2.5rem]">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">{recipeName}</h1>
          <div className="recipe-info-details | flex items-center max-md:justify-between my-5 md:my-[2rem]">
            <PosterProfile />
            <div className="md:hidden relative" ref={additionalInfo}>
              <button
                className="rounded-full shadow-lg shadow-slate-300 p-4 bg-primary-blue-300"
                onClick={() => setInfoExpanded((prev) => !prev)}
              >
                <GrInfo />
              </button>
              <div
                className={`absolute bg-primary-blue-300 p-6 rounded-3xl right-0 top-[3.5rem] z-40 shadow-lg shadow-slate-400 ${
                  infoExpanded ? "max-md:block" : "hidden"
                }`}
              >
                <RecipeInfoDetails className={"mb-5"} category={category} />
                <NutritionInfoCard
                  ingredients={ingredients}
                  measurements={measurements}
                />
              </div>
            </div>

            <RecipeInfoDetails
              className={"recipe-info-details | hidden md:flex items-center"}
              category={category}
            />
          </div>
        </div>
        <SharePrintButtonGroup className={"hidden md:block text-right"} />
      </div>

      <div className="flex gap-3 lg:gap-5 justify-between overflow-hidden items-stretch">
        <div className="relative">
          <img
            className="rounded-2xl md:h-[600px] aspect-[1/0.7] flex-1"
            src={recipeImg}
            alt={recipeName}
          />
          <a
            className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]"
            href={recipeYoutubeLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[70px] aspect-square md:w-[120px]"
              src={playButton}
              alt="play button"
            />
          </a>
        </div>
        <NutritionInfoCard
          className={"hidden md:block"}
          ingredients={ingredients}
          measurements={measurements}
        />
      </div>

      <p className="text-gray-400 text-[15px] mt-5 md:mt-[2.5rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <SharePrintButtonGroup className={"md:hidden mt-4"} />
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
