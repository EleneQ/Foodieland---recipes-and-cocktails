import { useEffect, useCallback } from "react";

const useFetchEffect = (
  url,
  setData,
  dataExtractor = (data) => data,
  options = {},
  dependencies = []
) => {
  const fetchDataMemorized = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      setData(dataExtractor(data));
    } catch (error) {
      console.error("An error occurred during fetch:", error);
      throw error;
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  useEffect(() => {
    fetchDataMemorized();
  }, [fetchDataMemorized]);

  return fetchDataMemorized;
};

export default useFetchEffect;
