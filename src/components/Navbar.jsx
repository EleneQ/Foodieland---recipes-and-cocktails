import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { navLinks } from "../constans/data";
import { SocialLinks } from "./";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="padding-x max-width flex justify-between items-center border-b-[1px] border-b-[#0000001A] py-7">
      <Link to="/" className="font-lobster text-lg">
        Foodieland<span className="text-[#FF7426]">.</span>
      </Link>

      {/* hamburger menu */}
      <button
        className={`mobile-menu md:hidden ${expanded ? "active" : ""}`}
        aria-controls="primary-navigation"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <div className="hamburger"></div>
      </button>

      {/* desktop */}
      <div
        className={`primary-nav | max-md:fixed top-0 left-0 bottom-0 right-[4.5rem] max-md:bg-white z-50 flex flex-col items-center justify-center gap-[6rem] ${
          expanded ? "translate-x-0" : "max-md:-translate-x-[400%]"
        }`}
      >
        <nav>
          <ul className="flex gap-[3rem] font-medium text-[14px] flex-col md:flex-row max-md:justify-center items-center h-full">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setExpanded(false)}>
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
        <SocialLinks className={"md:hidden"} />
      </div>

      <SocialLinks className={"hidden md:flex"} />
    </header>
  );
};
export default Navbar;
