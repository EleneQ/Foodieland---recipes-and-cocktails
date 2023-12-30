import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { navLinks } from "../constans/data";

const SocialLinks = () => (
  <ul className="flex gap-[2rem] items-center justify-center">
    <li className="cursor-pointer">
      <FaFacebookF />
    </li>
    <li className="cursor-pointer">
      <FaTwitter />
    </li>
    <li className="cursor-pointer">
      <FaInstagram />
    </li>
  </ul>
);

const Navbar = () => {
  return (
    <header className="padding-x max-width flex justify-between items-center border-b-[1px] border-b-[#0000001A] py-7">
      <Link to="/" className="font-lobster text-lg">
        Foodieland<span className="text-[#FF7426]">.</span>
      </Link>
      <nav>
        <ul className="flex gap-[3rem] font-medium text-[14px]">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={navLink.link}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks />
    </header>
  );
};
export default Navbar;
