import { useEffect, useRef } from "react";
import hand from "../images/Hero/hand.png";

const Sticker = () => {
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
    <div className="hidden xl:block rounded-full p-7 aspect-square absolute bg-black top-10 left-[50%] -translate-x-[70%]">
      <p ref={rotatingText} className="rotating-text">
        Handpicked recipes
      </p>
      <img className="p-1 bg-white rounded-full w-[60px]" src={hand} alt="" />
    </div>
  );
}
export default Sticker