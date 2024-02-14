import { useState } from "react";
import Button from "./Button";

const SubscriptionBanner = () => {
  const [email, setEmail] = useState();

  const submitionHandler = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="subscribtion-banner | max-w-[85rem] mx-auto rounded-[2rem] mt-[5rem] md:mt-[7rem] bg-[#E7F9FD] mb-10">
      <div className="py-[4rem] max-w-[620px] mx-auto text-center max-md:px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-5">
          Deliciousness to your inbox
        </h2>
        <p className="text-[#00000099] mb-5 md:mb-[3.5rem] max-md:text-[14px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <form
          className="md:bg-white p-2 rounded-xl inline-flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between max-md:mb-[2rem]"
          onSubmit={(e) => submitionHandler(e)}
          action="#"
        >
          <input
            className="px-3 py-3 md:py-2 rounded-lg"
            type="email"
            name="subscription-email"
            value={email}
            placeholder="Your email address..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button primary>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
