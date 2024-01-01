import { useState } from "react";

import {
  Hero,
  AllCategories,
  RecipesShowcase,
  ChefCTA,
  InstagramCTA,
  DeliciousRecipesSelection,
  SubscriptionBanner,
} from "../components/HomePage";

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
      <DeliciousRecipesSelection />
      <SubscriptionBanner />
    </>
  );
};
export default HomePage;
