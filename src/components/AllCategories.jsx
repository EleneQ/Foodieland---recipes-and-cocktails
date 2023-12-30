import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

import { fetchDataFromApi } from "../utils/fetchDataFromApi";

const gradientsArray = [
  "linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.1) 100%)",
  "linear-gradient(180deg, rgba(108, 198, 63, 0.00) 0%, rgba(108, 198, 63, 0.1) 100%)",
  "linear-gradient(180deg, rgba(204, 38, 27, 0.00) 0%, rgba(204, 38, 27, 0.1) 100%)",
  "linear-gradient(180deg, rgba(240, 158, 0, 0.00) 0%, rgba(240, 158, 0, 0.1) 100%)",
  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)",
  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)",
];

const AllCategories = ({
  selectedCategory,
  setSelectedCategory,
  setRecipes,
}) => {
  const [categories, setCategories] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  //fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await fetchDataFromApi(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      setCategories(categories);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };
    fetchCategories();
  }, []);

  //fetch recipes based on category
  useEffect(() => {
    const fetchRecipes = async () => {
      let url = "";
      if (!selectedCategory || selectedCategory === "all") {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
      }

      const data = await fetchDataFromApi(url);
      setRecipes(data.meals || []);
    };
    fetchRecipes();
  }, [selectedCategory]);

  if (!categories.length) return "Loading...";

  const categorySelectionHandler = (categoryName) => {
    setSelectedCategory(categoryName);

    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-[3rem] px-[5rem] max-w-[100rem] mx-auto">
      <h2 className="font-bold text-4xl mb-[4rem]">Categories</h2>
      <motion.div
        ref={carousel}
        className="carousel | cursor-pointer overflow-hidden"
      >
        <motion.ul
          className="inner-carousel | inline-flex items-center gap-10 rounded-2xl select-none"
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
                className="flex flex-col items-center justify-center gap-[1.5rem] text-[17px] font-bold px-5 pb-3 w-[9rem]"
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
    </section>
  );
};

AllCategories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default AllCategories;
