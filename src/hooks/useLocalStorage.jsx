import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function useLocalStorage(key, initValue = "") {
  const [value, setValue] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
