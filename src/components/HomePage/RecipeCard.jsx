import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { MdAreaChart } from "react-icons/md";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, selectedCategory, className }) => {
  const randomMinutes = Math.floor(Math.random() * (50 - 25 + 1)) + 25;

  const {
    idMeal,
    strMeal: name,
    strMealThumb: img,
    strCategory: category,
    strArea: area,
  } = recipe;

  return (
    <Link to={`/recipe/${idMeal}`} className="h-[100%]">
      <li
        className={`rounded-3xl cursor-pointer max-md:max-w-[25rem] max-md:mx-auto ${className}`}
        onClick={() => scrollTo({ top: 230, behavior: "smooth" })}
      >
        <img
          className="max-h-[250px] mx-auto aspect-[1/0.7] object-cover"
          style={{ borderRadius: "inherit" }}
          src={img}
          alt={name}
        />
        <h3 className="capitalize mt-3 font-semibold text-[20px] md:text-[23px] leading-[1.1em]">
          {name.length > 35 ? `${name.slice(0, 35)}...` : name}
        </h3>
        <div className="flex gap-10 my-3">
          {area ? (
            <p className="flex items-center gap-1 text-[14px] text-gray-400 font-medium">
              <MdAreaChart className="text-black text-lg" />
              {area}
            </p>
          ) : (
            <p className="flex items-center gap-1 text-[14px] text-gray-400 font-medium">
              <FaClock className="text-black text-lg" />
              {`${randomMinutes} Minutes`}
            </p>
          )}
          <p className="flex items-center gap-1 text-[14px] text-gray-400 font-medium">
            <PiForkKnifeFill className="text-black text-lg" />
            {category || selectedCategory}
          </p>
        </div>
      </li>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string,
  className: PropTypes.string,
};

export default RecipeCard;
