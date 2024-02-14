import { useState } from "react";
import Hero from "./Hero";
import AllCategories from "./AllCategories";
import MealsShowcase from "./MealsShowcase";
import ChefCTA from "./ChefCTA";
import InstagramCTA from "./InstagramCTA";
import DeliciousRecipesSelection from "./DeliciousRecipesSelection";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import { MealsRecipeProvider } from "../../context/MealsRecipeContext";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main>
      <Hero />

      <MealsRecipeProvider>
        <AllCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <MealsShowcase selectedCategory={selectedCategory} />

        <ChefCTA />

        <InstagramCTA />
        
        <DeliciousRecipesSelection />
      </MealsRecipeProvider>

      <SubscriptionBanner />
    </main>
  );
};
export default HomePage;
