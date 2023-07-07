import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: string | {}) => {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);

    return storedData ? JSON.parse(storedData) : defaultValue;
  });

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};
