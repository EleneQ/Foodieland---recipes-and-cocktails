import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchDataFromApi } from "../../utils/fetchDataFromApi";

const OtherRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetchDataFromApi(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=d"
      );
      setRecipes(data.meals || []);
    };
    fetchRecipes();
  }, []);

  if (!recipes.length) return "Loading...";

  return (
    <section>
      <h2 className="mb-10 text-3xl font-semibold">Other Recipes</h2>
      <ul>
        {recipes.slice(0, 3).map((recipe) => {
          const {
            idMeal,
            strMeal: name,
            strMealThumb: img,
            strCategory: category,
          } = recipe;

          return (
            <Link to={`/${idMeal}`} key={idMeal}>
              <li className="flex gap-3 mb-5 items-center">
                <img
                  className="rounded-3xl max-w-[170px] aspect-[1/0.75]"
                  src={img}
                  alt={name}
                />
                <div>
                  <h4 className="font-bold text-lg">
                    {name.length > 20 ? `${name.slice(0, 35)}...` : name}
                  </h4>
                  <p className="text-[15px]">{category}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default OtherRecipes;
