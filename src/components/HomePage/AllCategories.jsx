import { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import useFetchEffect from "../../hooks/useFetchEffect";
import useFetch from "../../hooks/useFetch";
import { Loading } from "../";
import { ALL_RECIPE_CATEGORIES } from "../../constans/endpoints";
import { useRecipes } from "../../context/RecipeContext";
import gradientsArray from "../../constans/gradientsArray";

const AllCategories = ({ selectedCategory, setSelectedCategory }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const { setRecipes } = useRecipes();

  const {
    loading: loadingCategories,
    error: errorCategories,
    value: { categories } = [],
  } = useFetch(ALL_RECIPE_CATEGORIES, {}, []);

  //carousel width
  useLayoutEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [categories]);

  //fetch recipes
  useFetchEffect(
    !selectedCategory || selectedCategory === "all"
      ? "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
    setRecipes,
    (data) => data.meals || [],
    {},
    [selectedCategory]
  );

  const categorySelectionHandler = (categoryName) => {
    if (selectedCategory.toLowerCase() === categoryName.toLowerCase()) {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(categoryName);
    }

    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <section className="padding-x max-width">
      {loadingCategories ? (
        <Loading />
      ) : errorCategories ? (
        <p>{errorCategories}</p>
      ) : (
        <>
          <h2 className="font-bold text-3xl md:text-4xl mb-10 md:mb-[4rem]">
            Categories
          </h2>
          <motion.div
            ref={carousel}
            className="carousel | cursor-pointer overflow-hidden"
          >
            <motion.ul
              className="inner-carousel | inline-flex items-center gap-6 md:gap-10 rounded-2xl select-none"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {categories.map((category, i) => {
                const gradientIndex = i % gradientsArray.length;

                const {
                  idCategory,
                  strCategoryThumb: img,
                  strCategory: categoryName,
                } = category;

                return (
                  <motion.li
                    key={idCategory}
                    className={`flex flex-col items-center justify-center gap-3 md:gap-[1.5rem] text-[15px] md:text-[17px] font-bold px-5 pb-3 w-[7.8rem] md:w-[9rem] ${
                      selectedCategory.toLowerCase() ===
                      categoryName.toLowerCase()
                        ? "border-b-4 border-t-4 border-black"
                        : ""
                    }`}
                    style={{
                      borderRadius: "inherit",
                      backgroundImage: gradientsArray[gradientIndex] || "",
                    }}
                    //TODO: not be able to click when dragging
                    onClick={() => categorySelectionHandler(categoryName)}
                  >
                    <img
                      className="rounded-full w-[70px] h-[60px]"
                      src={img}
                      alt={categoryName}
                    />
                    {categoryName}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </>
      )}
    </section>
  );
};

AllCategories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default AllCategories;
