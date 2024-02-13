import ContactUs from "../components/ContactUs/ContactUs";
import { SubscribtionBanner, AdditionalRecipes } from "../components";

const ContactUsPage = () => {
  return (
    <main>
      <ContactUs />
      <SubscribtionBanner />
      <section className="padding-x max-width mt-[6rem] mb-[7rem]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-[3rem]">
          Check out these great recipes
        </h2>
        <AdditionalRecipes letterToSearchBy="h" maxRecipeAmount={4} />
      </section>
    </main>
  );
};

export default ContactUsPage;
