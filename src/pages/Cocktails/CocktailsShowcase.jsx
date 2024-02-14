import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import formatDate from "../../utils/formatDate";
import useFetch from "../../hooks/useFetch";
import { COCKTAILS_BY_NAME } from "../../constans/endpoints";

const CocktailsShowcase = ({
  cocktails,
  setCocktails,
  searchParams,
  setSearchParams,
}) => {
  const [cocktailsPerPage] = useState(6);

  // Pagination
  const currentPage = parseFloat(searchParams.get("p"));
  const indexOfLastPost = currentPage * cocktailsPerPage;
  const indexOfFirstPost = indexOfLastPost - cocktailsPerPage;
  const currentCocktails =
    cocktails?.slice(indexOfFirstPost, indexOfLastPost) || [];

  const paginate = (pageNum) => {
    setSearchParams((prev) => {
      prev.set("p", pageNum);
      return prev;
    });

    scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  //get back to page 1
  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("p", 1);
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cocktails.length]);

  //fetch cocktails
  const {
    loading: loadingCocktails,
    error,
    value: { drinks } = [],
  } = useFetch(`${COCKTAILS_BY_NAME}${searchParams.get("query")}`, {}, [
    searchParams,
    setCocktails,
  ]);

  //set cocktails
  useEffect(() => {
    if (!loadingCocktails) {
      setCocktails(drinks);
    }
  }, [setCocktails, loadingCocktails, drinks]);

  return (
    <section className="flex-1">
      {loadingCocktails ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
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
                        ? `${instructions.slice(
                            0,
                            instructionMaxLetterAmount
                          )}...`
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
            itemsPerPage={cocktailsPerPage}
            items={cocktails}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </section>
  );
};

export default CocktailsShowcase;
