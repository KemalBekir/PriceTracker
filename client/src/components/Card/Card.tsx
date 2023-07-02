import { ItemProps } from "@/interfaces/interfaces";
import React from "react";

const Card: React.FC<ItemProps> = ({ _id, url, itemName, prices, img }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-md group-hover:opacity-75 lg:h-80">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/catalog/${_id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {itemName.length > 25 ? itemName.substring(0, 30) : itemName}
            </a>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
          {/* TODO- add interface for prices */}
        </div>
        <p className="text-sm font-medium text-gray-900">
          £{prices[length - 1]?.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
