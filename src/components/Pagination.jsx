const Pagination = ({
  className,
  itemsPerPage,
  items,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null;
  }

  return (
    <nav className={className}>
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

export default Pagination;
