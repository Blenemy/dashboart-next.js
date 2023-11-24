import { useState, useEffect } from "react";

const CARDS_STORAGE_KEY = "cards";

function useLocalStorage(initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(CARDS_STORAGE_KEY);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        CARDS_STORAGE_KEY,
        JSON.stringify(storedValue)
      );
    }
  }, [CARDS_STORAGE_KEY, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
