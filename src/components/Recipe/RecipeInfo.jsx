import { useRef } from "react";
import { GrInfo } from "react-icons/gr";
import { playButton } from "../../images";
import PosterProfile from "../PosterProfile";
import NutritionInfoCard from "./NutritionInfoCard";
import RecipeInfoDetails from "./RecipeDetails";
import SharePrintButtonGroup from "../SharePrintButtonGroup";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";

const RecipeInfo = ({
  ingredients,
  measurements,
  name,
  category,
  videoThumbnail,
  videoLink,
}) => {
  const additionalInfo = useRef();
  const [infoExpanded, setInfoExpanded] =
    useOutsideClickHandler(additionalInfo);

  return (
    <section className="padding-x max-width mt-[3rem] md:mt-[4rem] mb-[2.5rem]">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
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
            className="rounded-2xl md:h-[570px] aspect-[1/0.7] flex-1"
            src={videoThumbnail}
            alt={name}
          />
          <a
            className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]"
            href={videoLink}
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

      <SharePrintButtonGroup className={"md:hidden mt-4"} />
    </section>
  );
};

export default RecipeInfo;
