import ContactUs from "./ContactUs";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import AdditionalRecipes from "../../components/AdditionalRecipes"

const ContactUsPage = () => {
  return (
    <main>
      <ContactUs />
      <SubscriptionBanner />
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
