import { useState } from "react";

import CocktailsShowcase from "../components/CocktailsPage/CocktailsShowcase";
import SearchBar from "../components/CocktailsPage/SearchBar";
import {
  EatHealthyCard,
  SubscribtionBanner,
  OtherRecipes,
} from "../components";

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);

  return (
    <main>
      <section className="padding-x max-width text-center my-[2.5rem]">
        <h1 className="text-4xl md:text-5xl font-bold">Cocktails</h1>
        <p className="text-gray-400 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </section>

      <SearchBar setCocktails={setCocktails} />

      <div className="padding-x max-width flex flex-col lg:flex-row md:justify-between gap-[4rem] mt-[4rem]">
        <CocktailsShowcase cocktails={cocktails} setCocktails={setCocktails} />
        <div className="sm:flex items-center justify-between gap-[2rem] lg:block">
          <OtherRecipes sectionTitle="Tasty Recipes" randomize />
          <EatHealthyCard />
        </div>
      </div>

      <SubscribtionBanner />
    </main>
  );
};
export default CocktailsPage;
