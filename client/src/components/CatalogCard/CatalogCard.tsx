import { useDataLoading } from "@/hooks/useDataLoading";
import { DataProps } from "@/interfaces/interfaces";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const CatalogCard: React.FC<DataProps> = ({ data }) => {
  const { loading, index } = useDataLoading(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  //   <div>
  //     <img
  //       className="h-auto  cursor-pointer rounded-lg"
  //       src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
  //       alt=""
  //     />
  //   </div>;

  return (
    <Link to={`/catalog/649e127713f9ea00dfad82ca`}>
      <div className="group relative drop-shadow-md">
        <div className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
        <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-md group-hover:opacity-75 lg:h-80">
          <img
            src={data?.img}
            alt="Card Image"
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>
        <div className="absolute bottom-3 left-5 rounded-full bg-black px-6 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-bold">£{data?.prices[index].price}</span>
        </div>
        <div className="absolute bottom-3 right-5 rounded-full bg-black px-6 py-2 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-bold">details</span>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
