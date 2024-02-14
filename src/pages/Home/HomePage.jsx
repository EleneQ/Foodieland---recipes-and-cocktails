import { useState } from "react";
import Hero from "./Hero";
import AllCategories from "./AllCategories";
import MealsShowcase from "./MealsShowcase";
import ChefCTA from "./ChefCTA";
import InstagramCTA from "./InstagramCTA";
import DeliciousRecipesSelection from "./DeliciousRecipesSelection";
import SubscribtionBanner from "../../components/SubscribtionBanner";
import { RecipeProvider } from "../../context/RecipeContext";

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
        <MealsShowcase selectedCategory={selectedCategory} />
        <ChefCTA />
        <InstagramCTA />
        <DeliciousRecipesSelection />
      </RecipeProvider>
      <SubscribtionBanner />
    </main>
  );
};
export default HomePage;
