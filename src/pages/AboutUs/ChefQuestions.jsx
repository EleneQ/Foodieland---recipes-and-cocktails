import { womanCooking } from "../../images";

const ChefQuestions = () => {
  return (
    <section className="chef-questions | max-w-[840px]">
      <ul>
        <li>
          <h2>How did you develop your passion for cooking?</h2>
          <p>
            Embarking on a culinary journey, I found my passion for cooking
            through a blend of tradition, experimentation, and a love for
            bringing people together. Exploring diverse cuisines and techniques
            fueled my culinary creativity, leading me to pursue a career in the
            food industry.
          </p>
        </li>
        <li>
          <h2>What inspires you most when creating new dishes?</h2>
          <p>
            Drawing inspiration from nature, culture, and personal experiences,
            I strive to infuse each dish with a unique blend of flavors,
            textures, and aromas. From vibrant farmer&apos;s markets to
            nostalgic family recipes, every element plays a role in crafting
            memorable culinary creations.
          </p>
        </li>
        <li>
          <h2>Do you have a signature dish?</h2>
          <img src={womanCooking} alt="a woman smiling and stirring a pot" />
          <p className="mt-4">
            From my grandmother&apos;s secret recipes to innovative culinary
            experiments, each dish holds a story and a piece of my heart.
            Whether it&apos;s a comforting classic or a daring fusion, I pour my
            passion into every creation, inviting others to savor the journey
            with me.
          </p>
        </li>
        <li>
          <h2>
            What advice would you give to aspiring chefs starting their culinary
            careers?
          </h2>
          <p>
            Aspiring chefs, embark on your culinary adventure with curiosity,
            resilience, and a willingness to learn. Embrace challenges as
            opportunities for growth, hone your craft with dedication, and never
            forget the power of creativity and passion in the kitchen.
          </p>
        </li>

        <p className="mb-[3rem] md:mb-[4rem] pl-[1.6rem] text-xl md:text-3xl md:leading-[64px] tracking-[-1.44px] font-semibold bg-gradient-to-r from-[#0000000D] to-[#00000000] p-[2rem]">
          “Let the aroma of spices and the sizzle of the pan guide your culinary
          journey.”
        </p>

        <li>
          <h2>What are some common myths about being a professional chef?</h2>
          <p>
            The perception of glamour and luxury often overshadows the reality
            of hard work, long hours, and constant innovation required in the
            culinary world. Behind the scenes, chefs navigate intense pressure,
            creative challenges, and the relentless pursuit of excellence.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ChefQuestions;
