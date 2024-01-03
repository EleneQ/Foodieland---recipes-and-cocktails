import { useState, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import PropTypes from "prop-types";

import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

function Dropdown({ options, labelValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useOutsideClickHandler(divEl, () => setIsOpen(false));

  const handleOptionClick = (option) => {
    setIsOpen(false);

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <li
        className="hover:bg-white rounded-lg cursor-pointer px-4 py-2 w-full"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </li>
    );
  });

  return (
    <div ref={divEl} className="dropdown | relative">
      <div
        className="dropdown__label | flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {labelValue || "Select..."}
        {isOpen ? (
          <GoChevronDown className="text-lg" />
        ) : (
          <GoChevronLeft className="text-lg" />
        )}
      </div>
      {isOpen && (
        <ul className="dropdown__options | absolute z-10 bg-primary-blue-300 w-full mt-2">
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  labelValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
