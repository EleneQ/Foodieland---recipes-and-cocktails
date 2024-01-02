import { healthy } from "../images";

const EatHealthyCard = () => {
  return (
    <div className="eat-healthy-card | text-center max-w-[400px] aspect-square pt-[3rem] mx-auto mt-[3rem]">
      <p className="text-white font-lobster">
        Don’t forget to eat healthy food
      </p>
      <img src={healthy} alt="tuna salad" />
    </div>
  );
};

export default EatHealthyCard;
