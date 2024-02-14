import { useState } from "react";
import axios from "axios";
import { MEALS_BY_NAME } from "../../constans/endpoints";
import { useMealRecipes } from "../../context/MealsRecipeContext";

const SearchBar = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { recipes, setRecipes } = useMealRecipes();

  const searchAllMealsByName = async () => {
    try {
      const {
        data: { meals },
      } = await axios.get(`${MEALS_BY_NAME}${searchTerm}`);
      setRecipes(meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!selectedCategory || selectedCategory === "all") {
      await searchAllMealsByName();
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

export default SearchBar;
