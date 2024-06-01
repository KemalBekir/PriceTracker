import { ItemProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

export const useDataLoading = (data: ItemProps | null) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setIndex(data.prices.length - 1);
    } else {
      setLoading(true);
    }
  }, [data]);

  return { loading, index };
};
