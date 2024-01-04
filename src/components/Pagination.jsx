import classnames from "classnames";
import PropTypes from "prop-types";

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

  return (
    <nav className={classes}>
      <ul className="flex gap-2 items-center justify-center">
        {pageNumbers.map((pageNum) => (
          <li
            key={pageNum}
            className={`cursor-pointer px-3 py-1 rounded-lg font-semibold ${
              currentPage === pageNum
                ? "text-white bg-black"
                : "border-[1px] border-[#0000001A]"
            }`}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  recipesPerPage: PropTypes.number.isRequired,
  allRecipes: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
