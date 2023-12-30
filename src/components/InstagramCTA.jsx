import { instagramPosts } from "../constans/data";

const InstagramCTA = () => {
  return (
    <section className="mt-[7rem] bg-gradient-to-b from-transparent via-white to-blue-200">
      <div className="padding-x max-width">
        <div className="max-w-[840px] mx-auto text-center mb-[4.5rem]">
          <h2 className="text-4xl font-bold">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-[#00000099] mt-3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="flex justify-between items-center">
          {instagramPosts.map((post) => (
            <img key={post.id} src={post.img} alt={post.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default InstagramCTA;
