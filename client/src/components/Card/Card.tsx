import React from "react";

interface FeaturedItemProps  {
    _id: string,
    url: string,
    itemName: string,
    price: number,
    // prices: number[],
    img: string
};

const Card:React.FC<FeaturedItemProps> = ({_id,url,itemName,price,img}) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 drop-shadow-md">
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
             {itemName}
            </a>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
          {/* TODO- add interace for prices */}
        </div>
        <p className="text-sm font-medium text-gray-900">£{price}</p>
      </div>
    </div>
  );
};

export default Card;
