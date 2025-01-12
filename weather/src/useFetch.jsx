// useFetch.js
import { useState, useEffect } from "react";

const cache = {}; // Simple in-memory cache

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Reset error and loading state
      setError(null);
      setLoading(true);

      // Check if data is already cached
      if (cache[url]) {
        setData(cache[url]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();

        // Cache the result
        cache[url] = result;
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }

    // Optional cleanup function
    return () => {
      setData(null);
      setError(null);
      setLoading(true);
    };
  }, [url, options]);

  return { data, error, loading };
};

export default useFetch;
