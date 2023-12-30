import { useRef, useEffect } from "react";
import { FaClock, FaPlayCircle } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import scroll from "../images/Hero/scroll.png";
import profile from "../images/Hero/profile.png";
import chicken from "../images/Hero/chicken.png";
import hand from "../images/Hero/hand.png";

const Hero = () => {
  const rotatingText = useRef();

  useEffect(() => {
    rotatingText.current.innerHTML = rotatingText.current.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <section className="px-[1rem] xl:px-0 flex justify-between mt-[2rem] mb-[6rem]  lg:h-[620px] overflow-hidden relative">
      {/* left side */}
      <div className="hidden xl:block h-full w-[40px] bg-[#E7F9FD] rounded-se-3xl rounded-ee-3xl"></div>

      {/* text */}
      <div className="hero__container | bg-[#E7FAFE] max-w-[85rem] mx-auto rounded-[2rem]">
        <div className="px-[3rem] py-[2.5rem]">
          <div className="flex gap-3 items-center px-4 py-2 bg-white font-semibold text-[14px] max-w-[10rem] rounded-3xl shadow-lg">
            <img src={scroll} alt="scroll" />
            <p>Hot Recipes</p>
          </div>
          <div className="mt-[2.5rem] mb-[7.5rem]">
            <h2 className="text-5xl max-w-[520px] font-semibold leading-[1.3em]">
              Spicy delicious chicken wings
            </h2>
            <p className="text-[#00000099] my-7">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="flex gap-5 text-[14px] mt-9">
              <p className="bg-[#0000000D] rounded-2xl px-4 py-1 flex items-center gap-2">
                <FaClock />
                30 Minutes
              </p>
              <p className="bg-[#0000000D] rounded-2xl px-4 py-1 flex items-center gap-2">
                <PiForkKnifeFill className="text-lg" />
                Chicken
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <img
                className="rounded-full w-[50px] aspect-square"
                src={profile}
                alt="picture of recipe poster"
              />
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-[14px]">15 March 2022</p>
              </div>
            </div>
            <button className="bg-black px-5 py-3 rounded-lg text-white flex gap-4 items-center text-[14px]">
              View Recipes
              <FaPlayCircle className="text-lg" />
            </button>
          </div>
        </div>

        {/* sticker */}
        <div className="rounded-full p-7 aspect-square absolute bg-black top-10 left-[50%] -translate-x-[70%]">
          <p ref={rotatingText} className="rotating-text">
            Handpicked recipes
          </p>
          <img
            className="p-1 bg-white rounded-full w-[60px]"
            src={hand}
            alt=""
          />
        </div>

        {/* chicken */}
        <div style={{ borderRadius: "0 2rem 2rem 0" }}>
          <img
            className="object-cover w-full h-full"
            style={{ borderRadius: "inherit" }}
            src={chicken}
            alt="chicken"
          />
        </div>
      </div>

      {/* right side */}
      <div className="hidden xl:block h-full w-[40px] bg-[#E7F9FD] rounded-ss-3xl rounded-es-3xl"></div>
    </section>
  );
};
export default Hero;
