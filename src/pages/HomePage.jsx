import { useState } from "react";
import Hero from "../components/HomePage/Hero";
import AllCategories from "../components/HomePage/AllCategories";
import RecipesShowcase from "../components/HomePage/RecipesShowcase";
import ChefCTA from "../components/HomePage/ChefCTA";
import InstagramCTA from "../components/HomePage/InstagramCTA";
import DeliciousRecipesSelection from "../components/HomePage/DeliciousRecipesSelection";
import { SubscribtionBanner } from "../components";
import { RecipeProvider } from "../context/RecipeContext";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main>
      <Hero />

      <RecipeProvider>
        <AllCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RecipesShowcase selectedCategory={selectedCategory} />
        <ChefCTA />
        <InstagramCTA />
        <DeliciousRecipesSelection />
      </RecipeProvider>
      <SubscribtionBanner />
    </main>
  );
};
export default HomePage;
