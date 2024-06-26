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
    <Link to={`/catalog/${data?.id}`}>
      <div className="group relative drop-shadow-md">
        <div className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
        <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-md group-hover:opacity-75 lg:h-80">
          <div className="p-2" style={{ paddingTop: "100%" }}>
            <img
              src={data?.img}
              alt="Card Image"
              className="absolute top-0 left-0 h-full w-full rounded-lg object-contain object-center"
            />
          </div>
        </div>
        <div className="absolute bottom-3 left-5 rounded-full bg-white px-6 py-2 text-sm text-black opacity-0 transition duration-500 hover:bg-black hover:text-white group-hover:opacity-100">
          <span className="font-bold">£{data?.prices[index].price}</span>
        </div>
        <div className="absolute bottom-3 right-5 rounded-full bg-white px-6 py-2 text-sm text-black opacity-0 transition duration-500 hover:bg-black hover:text-white group-hover:opacity-100">
          <Link to={`/catalog/${data?.id}`} className="font-bold">
            details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
