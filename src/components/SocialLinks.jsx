import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import classnames from "classnames";
import { PropTypes } from "prop-types";

const SocialLinks = ({ style, className }) => {
  const classes = classnames(
    className,
    "flex gap-[2rem] items-center"
  );

  return (
    <ul style={style} className={classes}>
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
};

SocialLinks.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SocialLinks;
