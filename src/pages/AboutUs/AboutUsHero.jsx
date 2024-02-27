import { ourChefCooking } from "@/images";

const AboutUsHero = () => {
  return (
    <section className="padding-x max-width mt-[3rem] md:mt-[4rem] text-center">
      <h1 className="text-4xl md:text-6xl font-bold capitalize">
        The story of our chef
      </h1>
      <p className="my-5 md:mt-[2rem] mb-[2rem] md:mb-[3rem] max-w-[85%] mx-auto text-gray-400 max-md:text-[14px]">
        Dive into a gastronomic adventure and discover the culinary narrative of
        our esteemed chef. With a passion for flavor and a dedication to
        quality, our chef crafts each recipe with care and creativity.
      </p>
      <img
        className="rounded-3xl w-full object-cover max-md:h-[200px]"
        src={ourChefCooking}
        alt="our chef smiling and cooking"
      />
    </section>
  );
};
export default AboutUsHero;
