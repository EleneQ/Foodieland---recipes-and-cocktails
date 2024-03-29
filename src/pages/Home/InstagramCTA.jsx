import { FaInstagram } from "react-icons/fa";
import { instagramPosts } from "@/constans/data";
import Button from "@/components/Button";

const InstagramCTA = () => {
  return (
    <section className="mt-[7rem] pb-9 md:pb-[3rem] bg-primary-blue-gradient">
      <div className="padding-x max-width">
        <div className="max-w-[840px] mx-auto text-center mb-[2.5rem] md:mb-[4.5rem]">
          <h2 className="text-[1.7rem] md:text-4xl font-bold">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-gray-400 mt-3 text-[14px] md:text-base">
            We believe in sharing the joy of cooking with the world. That&apos;s
            why we showcase our delicious recipes on Instagram every single day.
            Follow us to embark on a delicious journey and make each day a
            little more special.
          </p>
        </div>
        <div className="hidden sm:grid grid-cols-4 justify-between sm:gap-[1rem] items-center max-sm:justify-center">
          {instagramPosts.map((post) => (
            <img
              className="max-w-full"
              key={post.id}
              src={post.img}
              alt={post.alt}
            />
          ))}
        </div>
        <Button className={"mx-auto sm:mt-[3.5rem]"} primary flexed>
          Visit Our Instagram
          <FaInstagram className="text-base" />
        </Button>
      </div>
    </section>
  );
};
export default InstagramCTA;
