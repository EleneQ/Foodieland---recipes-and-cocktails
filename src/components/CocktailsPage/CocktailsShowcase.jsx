import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Pagination } from "../";

const CocktailsShowcase = ({ cocktails, setCocktails }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);

  //pagination
  const indexOfLastPost = currentPage * recipesPerPage;
  const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  const currentCocktails = cocktails.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);

    scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c";

        const res = await fetch(url);
        const data = await res.json();

        setCocktails(data.drinks || []);
      } catch (error) {
        console.log("An error occurred", error);
        throw error;
      }
    };
    fetchCocktails();
  }, []);

  //convert date to the "DD/MM/YYYY" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };

    return date.toLocaleDateString(undefined, options);
  };

  if (!cocktails.length) return "Loading...";

  return (
    <section className="flex-1">
      <ul>
        {currentCocktails.map((cocktail) => {
          const {
            idDrink,
            strDrink: drinkName,
            strDrinkThumb: img,
            strInstructions: instructions,
            strAlcoholic: alcoholic,
            dateModified: modificationDate,
          } = cocktail;

          const instructionMaxLetterAmount = 120;

          return (
            <li
              className="cocktail-card | mb-6 lg:mb-5 bg-primary-blue-gradient rounded-3xl px-3 pb-5 md:p-0"
              key={idDrink}
            >
              <Link className="self-center" to={`/cocktail/${idDrink}`}>
                <img
                  className="w-full aspect-[1/0.7] rounded-3xl object-cover"
                  src={img}
                  alt={drinkName}
                />
              </Link>
              <div className="mt-3 sm:my-6 max-w-[550px] flex flex-col justify-between gap-2">
                <Link to={`/cocktail/${idDrink}`}>
                  <h3 className="font-semibold text-2xl lg:text-xl">
                    {drinkName}
                  </h3>
                </Link>
                <p className="text-gray-400 max-lg:my-2">
                  {instructions.length > instructionMaxLetterAmount
                    ? `${instructions.slice(0, instructionMaxLetterAmount)}...`
                    : instructions}
                </p>
                <div>
                  <p className="inline-block font-medium border-r-[1px] border-r-[#0000001A] pr-3 lg:pr-5">
                    {alcoholic}
                  </p>
                  <p className="inline-block pl-3 md:pl-5 text-gray-400">
                    {formatDate(modificationDate)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        className={"mt-[2.5rem] text-center"}
        recipesPerPage={recipesPerPage}
        allRecipes={cocktails}
        currentPage={currentPage}
        paginate={paginate}
      />
    </section>
  );
};

CocktailsShowcase.propTypes = {
  cocktails: PropTypes.array.isRequired,
  setCocktails: PropTypes.func.isRequired,
};

export default CocktailsShowcase;
