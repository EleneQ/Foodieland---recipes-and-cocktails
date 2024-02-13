import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { RECIPE_BASE_URL } from "../../constans/endpoints";
import { useRecipes } from "../../context/RecipeContext";

const SearchBar = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { recipes, setRecipes } = useRecipes();

  const searchAllRecipesByName = async () => {
    try {
      const {
        data: { meals },
      } = await axios.get(
        `${RECIPE_BASE_URL}/search.php?s=${searchTerm.toUpperCase()}`
      );
      setRecipes(meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!selectedCategory || selectedCategory === "all") {
      await searchAllRecipesByName();
    } else {
      setRecipes(
        recipes.filter((recipe) =>
          recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setSearchTerm("");
  };

  return (
    <form
      className="ml-[15%] sm:ml-[5%] md:ml-0 mt-5 md:mt-[4rem] mb-7 flex items-center justify-center md:justify-end"
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
  recipes: PropTypes.array.isRequired,
};

export default SearchBar;
