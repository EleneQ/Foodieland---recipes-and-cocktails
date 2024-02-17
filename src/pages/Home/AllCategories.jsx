import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import { ALL_MEAL_CATEGORIES } from "../../constans/endpoints";
import { useMealRecipes } from "../../context/MealsRecipeContext";
import gradientsArray from "../../constans/gradientsArray";
import { MEALS_BY_CATEGORY, MEALS_BY_LETTER } from "../../constans/endpoints";
import { useCarouselWidth } from "../../hooks/useCarouselWidth";

const AllCategories = ({ selectedCategory, setSelectedCategory }) => {
  const carousel = useRef();
  const { setMeals } = useMealRecipes();

  const {
    loading: loadingCategories,
    error: errorCategories,
    value: { categories } = [],
  } = useFetch(ALL_MEAL_CATEGORIES, {}, []);

  //carousel width
  const width = useCarouselWidth(carousel, [categories]);

  //fetch recipes
  const { loading: loadingMeals, value: { meals } = [] } = useFetch(
    !selectedCategory || selectedCategory === "all"
      ? `${MEALS_BY_LETTER}c`
      : `${MEALS_BY_CATEGORY}${selectedCategory}`,
    {},
    [selectedCategory]
  );

  //set recipes
  useEffect(() => {
    if (!loadingMeals) {
      setMeals(meals);
    }
  }, [setMeals, loadingMeals, meals]);

  //category selection
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

export default AllCategories;
