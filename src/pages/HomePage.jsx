import { useState } from "react";

import {
  Hero,
  AllCategories,
  RecipesShowcase,
  ChefCTA,
  InstagramCTA,
  DeliciousRecipesSelection,
} from "../components/HomePage";
import { SubscribtionBanner } from "../components";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [recipes, setRecipes] = useState([]);

  return (
    <main>
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
      <DeliciousRecipesSelection />
      <SubscribtionBanner />
    </main>
  );
};
export default HomePage;
