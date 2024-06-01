import { useState } from "react";

const useLoadingState = (initialState = true) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, startLoading, stopLoading };
};

export default useLoadingState;
