import { useState } from "react";

import Button from "../../components/Button";
import axios from "axios";
import { COCKTAILS_BY_NAME } from "../../constans/endpoints";

const SearchBar = ({ setCocktails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchAllCocktailsByName = async () => {
    try {
      const {
        data: { drinks },
      } = await axios.get(`${COCKTAILS_BY_NAME}${searchTerm}`);
      setCocktails(drinks || []);
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    searchAllCocktailsByName();
    setSearchTerm("");
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

export default SearchBar;
