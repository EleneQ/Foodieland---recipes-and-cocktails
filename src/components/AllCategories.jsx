import { useState, useEffect, useRef } from "react";

const gradientsArray = [
  "linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.1) 100%)",
  "linear-gradient(180deg, rgba(108, 198, 63, 0.00) 0%, rgba(108, 198, 63, 0.1) 100%)",
  "linear-gradient(180deg, rgba(204, 38, 27, 0.00) 0%, rgba(204, 38, 27, 0.1) 100%)",
  "linear-gradient(180deg, rgba(240, 158, 0, 0.00) 0%, rgba(240, 158, 0, 0.1) 100%)",
  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)",
  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)",
];

const AllCategories = () => {
  const slider = useRef();
  const [categories, setCategories] = useState([]);
  //slider states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(false);
  const [startScrollLeft, setStartScrollLeft] = useState(false);

  //api call
  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };
    fetchCategories();
  }, []);

  const dragStartHandler = (e) => {
    setIsDragging(true);

    setStartX(e.pageX);
    setStartScrollLeft(slider.current.scrollLeft);
  };

  const draggingHandler = (e) => {
    if (!isDragging) return;
    slider.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStopHandler = () => {
    setIsDragging(false);
  };

  //slider
  useEffect(() => {
    document.addEventListener("mouseup", dragStopHandler);
    return () => {
      document.removeEventListener("mouseup", dragStopHandler);
    };
  }, []);

  if (!categories.length) return "Loading...";

  return (
    <section className="mb-[3rem] px-[5rem] max-w-[100rem] mx-auto">
      <h2 className="font-bold text-4xl mb-[4rem]">Categories</h2>
      <ul
        ref={slider}
        className={`flex gap-10 rounded-2xl select-none ${
          isDragging ? "cursor-grabbing" : "cursor-pointer"
        }`}
        onMouseDown={dragStartHandler}
        onMouseMove={draggingHandler}
      >
        {categories.map((category, i) => {
          const gradientIndex = i % gradientsArray.length;

          return (
            <li
              key={category.idCategory}
              className="cursor-pointer flex flex-col items-center justify-center gap-[1.5rem] text-[17px] font-bold px-5 pb-3"
              style={{
                borderRadius: "inherit",
                backgroundImage: gradientsArray[gradientIndex] || "",
              }}
              onClick={() => {}}
            >
              <img
                className="rounded-full w-[70px] h-[70px]"
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />
              {category.strCategory}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AllCategories;
