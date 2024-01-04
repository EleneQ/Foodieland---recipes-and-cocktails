import { womanCooking } from "../../images";

const ChefQuestions = () => {
  return (
    <section className="chef-questions | max-w-[840px]">
      <ul>
        <li>
          <h2>How did you start out in the food industry?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </li>
        <li>
          <h2>What do you like most about your job?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </li>
        <li>
          <h2>Do you cook at home on your days off?</h2>
          <img src={womanCooking} alt="a woman smiling and stirring a pot" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </li>
        <li>
          <h2>
            What would your advice be to young people looking to get their foot
            in the door?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </li>

        <p className="mb-[3rem] md:mb-[4rem] pl-[1.6rem] text-xl md:text-3xl md:leading-[64px] tracking-[-1.44px] font-semibold bg-gradient-to-r from-[#0000000D] to-[#00000000] p-[2rem]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.”
        </p>

        <li>
          <h2>
            What is the biggest misconception that people have about being a
            professional chef?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ChefQuestions;
