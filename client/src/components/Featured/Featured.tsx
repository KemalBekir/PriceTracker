import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import * as CatalogService from "@/services/catalogService";
import { ItemProps } from "@/interfaces/interfaces";
import useLoadingState from "@/hooks/useLoadingState";
import Spinner from "../Spinner/Spinner";

type Props = {};

const Featured = (props: Props) => {
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const [data, setData] = useState<ItemProps[]>([]);

  useEffect(() => {
    startLoading();

    CatalogService.getAll()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        // Handle the error
      })
      .finally(() => {
        stopLoading();
      });
  }, []);

  const limitedData = data.slice(-4); // Limit to 4 items

  return (
    <>
      {isLoading && <Spinner />}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Latest products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {limitedData.map((item) => (
              <div className="w-full" key={item._id}>
                <Card data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
