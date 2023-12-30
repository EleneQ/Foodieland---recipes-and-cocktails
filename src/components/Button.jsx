import classNames from "classnames";
// import { PropTypes } from "prop-types";

function Button({ children, primary, flexed, className, ...rest }) {
  const classes = classNames(className, "rounded-xl px-5 py-3 text-[13.5px]", {
    "text-white bg-black hover:bg-transparent hover:text-black border-black border-2 hover:font-semibold":
      primary,
    "flex gap-3 items-center": flexed,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, tertiary }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!tertiary);

    if (count > 1) {
      return new Error("Only one of primary, secondary can be true");
    }
  },
};

export default Button;
