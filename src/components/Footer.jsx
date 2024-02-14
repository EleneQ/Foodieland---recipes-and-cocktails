import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../constans/data";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="padding-x max-width max-md:text-center">
      <Link to="/" className="font-lobster text-lg">
        Foodieland<span className="text-[#FF7426]">.</span>
      </Link>
      <div className="flex flex-col md:flex-row max-md:gap-4 md:justify-between items-center border-b-[1px] border-b-[#0000001A] pt-3 pb-8">
        <p className="text-gray-400 md:font-[14px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit
        </p>
        <nav>
          <ul className="flex gap-5 md:gap-[3rem] font-medium text-[14px]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive ? "text-accent-pink-500" : "text-black"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-grid | my-[2rem]">
        <p
          className="text-[14px] text-gray-400 text-center"
          style={{ gridArea: "text" }}
        >
          © 2020 Flowbase. Powered by{" "}
          <span className="text-[#FF7426]">Webflow</span>
        </p>
        <SocialLinks
          className={"max-md:mt-3 justify-center md:justify-end"}
          style={{ gridArea: "links" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
