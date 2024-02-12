import { useEffect, useState } from "react";

function useOutsideClickHandler(ref) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return [expanded, setExpanded];
}

export default useOutsideClickHandler;
