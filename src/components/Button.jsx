import classNames from "classnames";
import { PropTypes } from "prop-types";

function Button({ children, primary, flexed, className, ...rest }) {
  const classes = classNames(className, "rounded-xl px-5 py-3 text-[13.5px]", {
    "text-white bg-black hover:bg-transparent hover:text-black border-black border-2 hover:font-semibold":
      primary,
    "flex gap-2 md:gap-3 items-center": flexed,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  flexed: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
