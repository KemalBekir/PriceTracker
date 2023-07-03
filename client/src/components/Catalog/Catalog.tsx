import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { ItemProps } from "@/interfaces/interfaces";
import CatalogCard from "../CatalogCard/CatalogCard";
import { useCatalogData } from "@/hooks/useCatalogData";

type Props = {};

const Catalog = (props: Props) => {
  const [data, setData] = useState<ItemProps[]>([]);
  const { data: itemData, loading } = useCatalogData();
  const [isSearching, setSearching] = useState<boolean>(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [domain, setDomain] = useState<string>("");

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Search
        data={data}
        setData={setData}
        isSearching={isSearching}
        setSearching={setSearching}
        // searchParams={searchParams}
        // setSearchParams={setSearchParams}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        domain={domain}
        setDomain={setDomain}
      />
      <div className="mt-2 grid cursor-pointer grid-cols-2 gap-4 md:grid-cols-3">
        {itemData?.map((item) => (
          <CatalogCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
