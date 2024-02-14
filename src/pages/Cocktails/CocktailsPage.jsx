import { useState } from "react";
import CocktailsShowcase from "../Cocktails/CocktailsShowcase";
import SearchBar from "./SearchBar";
import EatHealthyCard from "../../components/EatHealthyCard";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import OtherRecipes from "../../components/OtherRecipes";
import { useSearchParams } from "react-router-dom";

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: "", p: 1 });

  return (
    <main>
      <section className="padding-x max-width text-center my-[2.5rem]">
        <h1 className="text-4xl md:text-5xl font-bold">Cocktails</h1>
        <p className="text-gray-400 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </section>

      <SearchBar setSearchParams={setSearchParams} />

      <div className="padding-x max-width flex flex-col lg:flex-row md:justify-between gap-[4rem] mt-[4rem]">
        <CocktailsShowcase
          cocktails={cocktails}
          setCocktails={setCocktails}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        <div className="sm:flex items-center justify-between gap-[2rem] lg:block">
          <OtherRecipes sectionTitle="Tasty Recipes" randomize />
          <EatHealthyCard />
        </div>
      </div>

      <SubscriptionBanner />
    </main>
  );
};
export default CocktailsPage;
