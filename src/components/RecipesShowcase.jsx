import { useState } from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { MdAreaChart } from "react-icons/md";
import { PropTypes } from "prop-types";

import { Pagination, SearchBar } from "./";

const RecipesShowcase = ({ selectedCategory, recipes, setRecipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  //set initial recipes
  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     let url = "";
  //     if (!selectedCategory || selectedCategory === "all") {
  //       url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
  //     } else {
  //       url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
  //     }

  //     try {
  //       const res = await fetch(url);
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       setRecipes(data.meals || []);
  //     } catch (error) {
  //       console.error("Error fetching recipes:", error.message);
  //     }
  //   };
  //   fetchRecipes();
  // }, [selectedCategory]);

  //search based on searchterm
  // useEffect(() => {
  //   if (!selectedCategory || selectedCategory === "all") {
  //     const searhRecipes = async () => {
  //       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.toUpperCase()}`;
  //       const res = await fetch(url);
  //       const data = await res.json();

  //       setRecipes(data.meals || []);
  //     };
  //     searhRecipes();
  //   } else {
  //     setRecipes((prevRecipes) =>
  //       prevRecipes.filter((recipe) => recipe.strMeal === searchTerm)
  //     );
  //   }
  // }, [searchTerm]);

  // if (!recipes.length) return "Loading...";

  //pagination
  const indexOfLastPost = currentPage * recipesPerPage;
  const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <section className="px-[5rem] max-w-[100rem] mx-auto mt-[7rem]">
      <div className="text-center max-w-[700px] mx-auto mb-[5rem]">
        <h2 className="font-semibold text-4xl pb-2">
          Simple and tasty recipes
        </h2>
        <p className="text-[#00000099] text-[15px]">
          Take a look at the recipes we offer. If you would like to see specific
          recipes, select one of the categories above or seach by name
        </p>
      </div>

      <SearchBar selectedCategory={selectedCategory} setRecipes={setRecipes} />

      {/* recipes showcase */}
      <div>
        <ul className="recipe-grid">
          {currentPosts.map((recipe) => {
            const {
              idMeal,
              strMeal: name,
              strMealThumb: img,
              strCategory: category,
              strArea: area,
            } = recipe;

            const randomMinutes =
              Math.floor(Math.random() * (40 - 20 + 1)) + 20;

            return (
              <li
                className="w-[24rem] rounded-3xl px-3 pb-3 bg-gradient-to-b from-transparent via-white to-blue-200 cursor-pointer"
                key={idMeal}
                onClick={() => {}}
              >
                <img
                  className="max-h-[250px] mx-auto aspect-[1/0.7] object-cover"
                  style={{ borderRadius: "inherit" }}
                  src={img}
                  alt={name}
                />
                <h3 className="capitalize mt-3 font-semibold text-[23px]">
                  {name.length > 35 ? `${name.slice(0, 35)}...` : name}
                </h3>
                <div className="flex gap-10 my-3">
                  {area ? (
                    <p className="flex items-center gap-1 text-[14px] text-[#00000099] font-medium">
                      <MdAreaChart className="text-black text-lg" />
                      {area}
                    </p>
                  ) : (
                    <p className="flex items-center gap-1 text-[14px] text-[#00000099] font-medium">
                      <FaClock className="text-black text-lg" />
                      {`${randomMinutes} Minutes`}
                    </p>
                  )}
                  <p className="flex items-center gap-1 text-[14px] text-[#00000099] font-medium">
                    <PiForkKnifeFill className="text-black text-lg" />
                    {category || selectedCategory}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination
          className={"mt-6"}
          recipesPerPage={recipesPerPage}
          allRecipes={recipes}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

RecipesShowcase.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default RecipesShowcase;
