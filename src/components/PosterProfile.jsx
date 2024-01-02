import { profile } from "../images";
import classnames from "classnames";
import PropTypes from "prop-types";

const PosterProfile = ({ className }) => {
  const classes = classnames(className, "flex gap-3 items-center");

  return (
    <div className={classes}>
      <img
        className="w-[45px]"
        src={profile}
        alt="picture of recipe poster"
      />
      <div>
        <p className="font-bold">John Smith</p>
        <p className="text-[14px] text-gray-400 font-medium">15 March 2022</p>
      </div>
    </div>
  );
};

PosterProfile.propTypes = {
  className: PropTypes.string,
};

export default PosterProfile;
