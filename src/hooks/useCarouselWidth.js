import { useEffect, useState } from "react";

export const useCarouselWidth = (carouselRef, moreDeps = []) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselRef, ...moreDeps]);

  return width;
};
