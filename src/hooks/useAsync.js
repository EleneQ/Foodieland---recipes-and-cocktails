import { useCallback, useEffect, useState } from "react";

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemorized = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);

    try {
      const result = await callback();
      setValue(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);

  return { loading, error, value };
}
