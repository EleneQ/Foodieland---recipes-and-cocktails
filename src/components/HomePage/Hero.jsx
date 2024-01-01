import { FaClock, FaPlayCircle } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { scroll, profile, chicken, sticker } from "../../images";

import { Button } from "..";

const Hero = () => {
  return (
    <section className="flex justify-between gap-[2.5rem] mt-[2rem] mb-[4rem] md:mb-[6rem] lg:h-hero-height-lg overflow-hidden relative">
      {/* left side */}
      <div className="hidden xl:block h-[560px] my-auto w-[40px] bg-primary-blue-300 rounded-se-3xl rounded-ee-3xl"></div>

      {/* text section */}
      <div className="hero__container | bg-primary-blue-300 rounded-[2rem] max-width">
        <div className="px-[1.5rem] sm:px-[5rem] sm:py-[4rem] md:px-[3rem] pt-[2.5rem] pb-[3rem]">
          <div className="flex gap-3 items-center px-3 md:px-4 py-[6px] md:py-2 bg-white font-semibold text-[13px] md:text-[14px] max-w-[10rem] rounded-3xl shadow-lg">
            <img src={scroll} alt="scroll" />
            <p>Hot Recipes</p>
          </div>

          {/* text */}
          <div className="mt-[2.5rem] sm:text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-[25rem] md:max-w-[520px] sm:mx-auto md:mx-0 font-semibold leading-[1.3em]">
              Spicy delicious chicken wings
            </h2>
            <p className="text-gray-400 text-[13px] sm:text-[14.5px] md:text-base my-7 max-w-[30rem] md:max-w-none mx-auto">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="flex sm:justify-center md:justify-normal gap-5 text-[14px] mt-9">
              <p className="bg-gray-500 rounded-2xl px-4 py-1 flex items-center gap-2">
                <FaClock />
                30 Minutes
              </p>
              <p className="bg-gray-500 rounded-2xl px-4 py-1 flex items-center gap-2">
                <PiForkKnifeFill className="text-lg" />
                Chicken
              </p>
            </div>
          </div>

          {/* profile pic and button */}
          <div className="flex flex-col gap-4 md:gap-2 sm:flex-row md:items-center justify-between mt-[3rem] sm:mt-[5rem] lg:mt-[7.5rem]">
            <div className="flex gap-3 items-center">
              <img
                className="rounded-full w-[45px] md:w-[50px] aspect-square"
                src={profile}
                alt="picture of recipe poster"
              />
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-[14px]">15 March 2022</p>
              </div>
            </div>
            <Button
              className={
                "px-2 py-[8px] md:px-5 md:py-3 max-w-[10rem] md:max-w-none"
              }
              primary
              flexed
            >
              View Recipes
              <FaPlayCircle className="text-lg" />
            </Button>
          </div>
        </div>

        <img
          className="absolute hidden md:block left-[50%] lg:-translate-x-[65%] top-[3rem] max-xl:max-w-[100px]"
          src={sticker}
        />

        {/* chicken pic */}
        <div
          className="hidden md:block lg:h-hero-height-lg"
          style={{ borderRadius: "0 2rem 2rem 0" }}
        >
          <img
            className="object-cover w-full h-full"
            style={{ borderRadius: "inherit" }}
            src={chicken}
            alt="chicken"
          />
        </div>
      </div>

      {/* right side */}
      <div className="hidden xl:block h-[560px] my-auto w-[40px] bg-primary-blue-300 rounded-ss-3xl rounded-es-3xl"></div>
    </section>
  );
};
export default Hero;
