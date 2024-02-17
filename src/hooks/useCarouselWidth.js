import { useEffect, useState } from "react";

export const useCarouselWidth = (carouselRef, moreDeps = []) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselRef, ...moreDeps]);

  return width;
};
