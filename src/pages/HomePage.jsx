import { useState } from "react";

import {
  Hero,
  AllCategories,
  RecipesShowcase,
  ChefCTA,
  InstagramCTA,
} from "../components";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <Hero />
      <AllCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setRecipes={setRecipes}
      />
      <RecipesShowcase
        selectedCategory={selectedCategory}
        recipes={recipes}
        setRecipes={setRecipes}
      />
      <ChefCTA />
      <InstagramCTA />
    </>
  );
};
export default HomePage;
