import classnames from "classnames";

const Pagination = ({
  className,
  recipesPerPage,
  allRecipes,
  currentPage,
  paginate,
}) => {
  const classes = classnames(className);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationHandler = (pageNum) => {
    paginate(pageNum);
    scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <nav className={classes}>
      <ul className="flex gap-2 items-center justify-center">
        {pageNumbers.map((pageNum) => (
          <li
            key={pageNum}
            className={`cursor-pointer px-3 py-1 rounded-lg font-semibold ${
              currentPage === pageNum ? "text-white bg-black" : ""
            }`}
            onClick={() => paginationHandler(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
