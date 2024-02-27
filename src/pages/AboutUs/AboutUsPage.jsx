import AboutUsHero from "./AboutUsHero";
import ChefQuestions from "./ChefQuestions";
import SocialLinks from "@/components/SocialLinks";
import SubscriptionBanner from "@/components/SubscriptionBanner";
import AdditionalRecipes from "@/components/AdditionalRecipes";

const AboutUsPage = () => {
  return (
    <main>
      <AboutUsHero />

      <div className="padding-x max-w-[80rem] mx-auto md:flex gap-[4rem] justify-between mt-[3rem] md:mt-[4rem]">
        <ChefQuestions />
        <div>
          <p className="mb-4 text-[14px] uppercase">Share this on:</p>
          <SocialLinks className={"md:flex-col md:min-w-[120px] mx-auto"} />
        </div>
      </div>

      <SubscriptionBanner />

      <section className="padding-x max-width mt-[5rem] mb-[5rem] md:mb-[6rem]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-[2rem] md:mb-[3rem]">
          Check out these incredible recipes
        </h2>
        <AdditionalRecipes letterToSearchBy="j" maxRecipeAmount={4} />
      </section>
    </main>
  );
};

export default AboutUsPage;
