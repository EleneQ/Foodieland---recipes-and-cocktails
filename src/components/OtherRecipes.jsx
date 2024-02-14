import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useFetchEffect from "../hooks/useFetchEffect";

const OtherRecipes = ({ sectionTitle, randomize = false }) => {
  const [recipes, setRecipes] = useState([]);

  //fetch recipes
  useFetchEffect(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      randomize ? getRandLetter() : "d"
    }`,
    setRecipes,
    (data) => data.meals || []
  );

  function getRandLetter() {
    const alphabet = "fgsjklmnprstvw";
    const randIndex = Math.floor(Math.random() * alphabet.length);

    return alphabet[randIndex];
  }

  if (!recipes.length) return <Loading />;

  return (
    <section className="mt-[2rem] md:mt-[1.5rem]">
      <h2 className="mb-5 md:mb-10 text-3xl font-semibold">{sectionTitle}</h2>
      <ul>
        {recipes.slice(0, 3).map((recipe) => {
          const {
            idMeal,
            strMeal: name,
            strMealThumb: img,
            strCategory: category,
          } = recipe;

          return (
            <Link to={`/recipe/${idMeal}`} key={idMeal}>
              <li
                className="flex gap-3 mb-5 items-center"
                onClick={() => scrollTo({ top: 230, behavior: "smooth" })}
              >
                <img
                  className="rounded-3xl min-w-[130px] max-w-[170px] aspect-[1/0.75]"
                  src={img}
                  alt={name}
                />
                <div>
                  <h4 className="font-bold text-lg">
                    {name.length > 17 ? `${name.slice(0, 17)}...` : name}
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
