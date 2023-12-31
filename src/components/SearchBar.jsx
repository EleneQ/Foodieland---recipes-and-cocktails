import { useState } from "react";
import { fetchDataFromApi } from "../utils/fetchDataFromApi";
import { PropTypes } from "prop-types";

const SearchBar = ({ selectedCategory, setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      if (!selectedCategory || selectedCategory === "all") {
        const searhAllRecipesByName = async () => {
          const data = await fetchDataFromApi(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.toUpperCase()}`
          );
          setRecipes(data.meals || []);
        };
        searhAllRecipesByName();
      } else {
        const searchRecipesInCategory = async () => {
          const { meals } = await fetchDataFromApi(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
          );
          setRecipes(
            meals.filter((recipe) =>
              recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
        };
        searchRecipesInCategory();
      }
    }

    setSearchTerm("");
  };

  return (
    <form
      className="max-md:ml-[15%] md:ml-0 mt-9 md:mt-[5rem] mb-7 flex items-center justify-center md:justify-end"
      onSubmit={(e) => submitHandler(e)}
      action="#"
    >
      <input
        className="border-black border-2 rounded-2xl py-[6px] px-4 text-[14px]"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="border-black border-2 rounded-2xl py-[6px] px-2 text-[13px] ml-1">
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default SearchBar;
