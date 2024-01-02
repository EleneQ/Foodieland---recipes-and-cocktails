import { useState } from "react";

import {
  Hero,
  AllCategories,
  RecipesShowcase,
  ChefCTA,
  InstagramCTA,
  DeliciousRecipesSelection,
} from "../components/HomePage";
import { SubscriptionBanner } from "../components";

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
      <SubscriptionBanner />
    </main>
  );
};
export default HomePage;
