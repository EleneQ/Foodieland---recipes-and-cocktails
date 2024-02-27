import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { chef } from "@/images";

const ChefCTA = () => {
  return (
    <section className="chef-cta | padding-x max-width mt-[5rem] md:mt-[14rem] mb-[6rem]">
      <div className="max-w-[25rem] md:max-w-[508px] pb-[5rem]">
        <h2 className="text-[1.7rem] md:text-4xl font-bold leading-9">
          Everyone can be a chef in their own kitchen
        </h2>
        <p className="text-[#00000099] text-[14px] md:text-base mt-4 md:mt-3">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <Link to="/about">
          <Button primary className="mt-[2rem]">
            Learn More
          </Button>
        </Link>
      </div>
      <div className="chef-cta-img-container">
        <div>
          <img
            src={chef}
            alt="a chef holding a plate and pointing to the food isnide it"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default ChefCTA;
