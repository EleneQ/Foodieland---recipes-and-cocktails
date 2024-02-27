import { chefSmiling } from "@/images";
import ContactForm from "./ContactForm";

const options = [
  { label: "Advertising", value: "advertising" },
  { label: "Offer", value: "offer" },
  { label: "Complaint", value: "complaint" },
];

const ContactUs = () => {
  return (
    <section className="contact-us | padding-x max-width mt-[4rem] mb-[5rem] md:mt-[5rem]">
      <div className="hidden lg:block bg-primary-blue-gradient rounded-3xl px-8">
        <img
          className="max-w-full"
          style={{ borderRadius: "inherit" }}
          src={chefSmiling}
          alt="a chef smiling"
        />
      </div>
      <div className="contact-us__img-container | flex-1 relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-[3rem]">
          Contact us
        </h2>
        <ContactForm dropdownOptions={options} />
      </div>
    </section>
  );
};
export default ContactUs;
