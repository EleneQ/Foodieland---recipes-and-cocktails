import { healthy } from "../images";

const EatHealthyCard = () => {
  return (
    <div className="eat-healthy-card | text-center max-w-[400px] aspect-square pt-[2.5rem] md:mx-auto mt-[2rem]">
      <p className="text-white font-lobster font-lg">
        Don’t forget to eat healthy food
      </p>
      <img className="md:mt-[-20px]" src={healthy} alt="tuna salad" />
    </div>
  );
};

export default EatHealthyCard;
