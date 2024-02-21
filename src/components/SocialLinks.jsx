import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = ({ style, className }) => {
  return (
    <ul style={style} className={`flex gap-[2rem] items-center ${className}`}>
      <li className="social-link">
        <FaFacebookF />
      </li>
      <li className="social-link">
        <FaTwitter />
      </li>
      <li className="social-link">
        <FaInstagram />
      </li>
    </ul>
  );
};

export default SocialLinks;
