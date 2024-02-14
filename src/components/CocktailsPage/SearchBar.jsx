import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "..";
import fetchDataFromApi from "../../utils/fetchDataFromApi";

const SearchBar = ({ setCocktails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    fetchCocktailsByName();
    setSearchTerm("");
  };

  const fetchCocktailsByName = async () => {
    if (searchTerm) {
      const { drinks } = await fetchDataFromApi(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setCocktails(drinks || []);
    }
  };

  return (
    <form
      className="max-w-[550px] mx-auto bg-white p-2 rounded-2xl border-[1px] border-[#0000001A] flex items-center"
      onSubmit={formSubmissionHandler}
    >
      <input
        className="px-4 py-3 rounded-lg flex-1"
        type="text"
        name="searchTerm"
        placeholder="Search for any cocktail..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button className={"ml-2"} primary type="submit">
        Search
      </Button>
    </form>
  );
};

SearchBar.propTypes = {
  setCocktails: PropTypes.func.isRequired,
};

export default SearchBar;
