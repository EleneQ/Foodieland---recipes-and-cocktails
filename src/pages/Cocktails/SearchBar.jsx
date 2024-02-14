import { useState } from "react";
import Button from "../../components/Button";

const SearchBar = ({ setSearchParams }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setSearchParams((prev) => {
      prev.set("query", searchTerm);
      return prev;
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default SearchBar;
