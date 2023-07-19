import { DataProps, ItemProps } from "@/interfaces/interfaces";
import React from "react";
import { Link } from "react-router-dom";

const Card: React.FC<DataProps> = ({ data }) => {
  let index = 0;
  if (!data) {
    //TODO - Add loading state and spinner
    return <div>Loading...</div>;
  }
  if (data) {
    index = data.prices.length - 1;
  }
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-md group-hover:opacity-75 lg:h-80">
        <img
          src={data?.img}
          alt=""
          className="h-64 w-full max-w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/catalog/${data?._id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {data?.itemName.length > 25
                ? data?.itemName.substring(0, 30)
                : data?.itemName}
            </Link>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
          {/* TODO- add interface for prices */}
        </div>
        <p className="text-sm font-medium text-gray-900">
          £{data?.prices[index]?.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
