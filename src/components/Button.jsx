import classNames from "classnames";

function Button({ children, primary, flexed, className, ...rest }) {
  const classes = classNames(
    className,
    "rounded-xl px-5 py-3 text-[13.5px] transition-all duration-100",
    {
      "text-white bg-black hover:bg-transparent hover:text-black border-black border-2 hover:font-semibold":
        primary,
      "flex gap-2 md:gap-3 items-center": flexed,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
