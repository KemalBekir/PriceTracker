import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as CatalogService from "@/services/catalogService";
import { ItemProps } from "@/interfaces/interfaces";
import useLoadingState from "@/hooks/useLoadingState";
import Spinner from "../Spinner/Spinner";

const Details = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const [data, setData] = useState<ItemProps | null>(null);
  const { itemId } = useParams<string>();

  useEffect(() => {
    if (itemId) {
      startLoading();
      CatalogService.getById(itemId)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          //TODO - Handle Error
        })
        .finally(() => {
          stopLoading();
        });
    } else {
      throw new Error("Item not found in database");
    }
  }, [itemId]);

  return (
    <>
      {isLoading && <Spinner />}
      <section className="body-font overflow-hidden bg-white text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
              src={data?.img}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 className="title-font text-sm tracking-widest text-gray-500">
                BRAND NAME
              </h2>
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
                {data?.itemName}
              </h1>
              <div className="mb-4 flex"></div>
              <p className="leading-relaxed">{data?.itemName}</p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-200 pb-5"></div>
              <div className="flex">
                <span className="title-font text-2xl font-medium text-gray-900">
                  £{data?.prices[0].price}
                </span>
                <a
                  href={data?.url}
                  className="ml-auto flex rounded border-0 bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none"
                >
                  Link
                </a>
                <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
