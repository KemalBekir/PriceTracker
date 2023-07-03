import { useEffect, useState } from "react";
import { ItemProps } from "@/interfaces/interfaces";
import * as CatalogService from "@/services/catalogService";

export const useCatalogData = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CatalogService.getAll().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [data.length]);

  return { data, loading };
};
