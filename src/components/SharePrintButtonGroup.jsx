import { FiPrinter, FiShare } from "react-icons/fi";
import PropTypes from "prop-types";

const SharePrintButtonGroup = ({ className }) => {
  return (
    <div className={className}>
      <button
        className={`text-center w-[40px] md:w-[60px] cursor-pointer inline-block mr-5`}
      >
        <span className="bg-primary-blue-300 rounded-full text-lg aspect-square flex-center">
          <FiPrinter />
        </span>
        <p className="uppercase text-[12px] font-medium mt-1 md:mt-2">Print</p>
      </button>
      <button
        className={`text-center w-[40px] md:w-[60px] cursor-pointer inline-block`}
      >
        <span className="bg-primary-blue-300 rounded-full text-lg aspect-square flex-center">
          <FiShare />
        </span>
        <p className="uppercase text-[12px] font-medium mt-1 md:mt-2">Share</p>
      </button>
    </div>
  );
};

SharePrintButtonGroup.propTypes = {
  className: PropTypes.string,
};

export default SharePrintButtonGroup;
