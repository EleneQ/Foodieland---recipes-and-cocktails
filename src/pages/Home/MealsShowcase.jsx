import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import SearchBar from "./SearchBar";
import MealCard from "./MealCard";
import { useMealRecipes } from "@/hooks/useMealRFecipes";
import Loading from "@/components/Loading";

const MealsShowcase = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const { meals, mealsError, mealsLoading } = useMealRecipes();

  //pagination
  const indexOfLastPost = currentPage * recipesPerPage;
  const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  const currentRecipes = meals?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);

    scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [meals.length, selectedCategory]);

  return mealsLoading ? (
    <Loading />
  ) : mealsError ? (
    <p>{mealsError}</p>
  ) : (
    <section
      id="meals-showcase"
      className="padding-x max-width mt-[3.5rem] md:mt-[7rem]"
    >
      <div className="text-center max-w-[700px] mx-auto">
        <h2 className="font-semibold text-3xl md:text-4xl pb-2">
          Simple and tasty recipes
        </h2>
        <p className="text-gray-400 text-[14px] md:text-[15px]">
          Take a look at the recipes we offer. If you would like to see specific
          recipes, select one of the categories above and search by name
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
          items={meals}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default MealsShowcase;
