import { useState } from "react";
import Pagination from "../../components/Pagination";
import SearchBar from "./SearchBar";
import MealCard from "./MealCard";
import { useMealRecipes } from "../../context/MealsRecipeContext";

const MealsShowcase = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const { recipes } = useMealRecipes();

  //pagination
  const indexOfLastPost = currentPage * recipesPerPage;
  const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);

    scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <section className="padding-x max-width mt-[3.5rem] md:mt-[7rem]">
      <div className="text-center max-w-[700px] mx-auto">
        <h2 className="font-semibold text-3xl md:text-4xl pb-2">
          Simple and tasty recipes
        </h2>
        <p className="text-gray-400 text-[14px] md:text-[15px]">
          Take a look at the recipes we offer. If you would like to see specific
          recipes, select one of the categories above or seach by name
        </p>
      </div>

      <SearchBar selectedCategory={selectedCategory} />

      {/* recipes showcase */}
      <div>
        <ul className="recipe-grid">
          {currentRecipes.map((recipe) => (
            <MealCard
              className={"px-3 pb-3 bg-primary-blue-gradient"}
              key={recipe.idMeal}
              recipe={recipe}
              selectedCategory={selectedCategory}
            />
          ))}
        </ul>

        <Pagination
          className={"mt-6"}
          itemsPerPage={recipesPerPage}
          items={recipes}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default MealsShowcase;
