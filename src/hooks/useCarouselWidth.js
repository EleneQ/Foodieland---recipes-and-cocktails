import { useEffect, useState } from "react";

export const useCarouselWidth = (ref, categories) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, [categories, ref]);

  return width;
};
