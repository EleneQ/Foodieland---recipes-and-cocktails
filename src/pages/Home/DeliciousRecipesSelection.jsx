import AdditionalRecipes from "@/components/AdditionalRecipes";

const DeliciousRecipesSelection = () => {
  return (
    <section className="padding-x max-width mt-[7rem]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-[2.5rem] gap-5 md:gap-[4rem] max-md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-[450px]">
          Try these delicious recipes to make your day
        </h2>
        <p className="max-w-[620px] text-gray-400 max-md:text-[14px]">
          Explore our collection of delectable recipes crafted to enhance your
          culinary journey. From savory delights to sweets, there&lsquo;s a dish
          for every palate.
        </p>
      </div>

      <AdditionalRecipes letterToSearchBy="k" maxRecipeAmount={8} />
    </section>
  );
};

export default DeliciousRecipesSelection;
