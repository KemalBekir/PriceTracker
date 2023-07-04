import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { ItemProps } from "@/interfaces/interfaces";
import CatalogCard from "../CatalogCard/CatalogCard";
import * as CatalogService from "@/services/catalogService";
import useLoadingState from "@/hooks/useLoadingState";
import Spinner from "../Spinner/Spinner";

type Props = {};

const Catalog = (props: Props) => {
  const { isLoading, startLoading, stopLoading } = useLoadingState();

  const [data, setData] = useState<ItemProps[]>([]);
  const [isSearching, setSearching] = useState<boolean>(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [domain, setDomain] = useState<string>("");

  useEffect(() => {
    startLoading();
    CatalogService.getAll()
      .then((result) => setData(result))
      .catch((error) => {
        //TODO - Handle Error
      })
      .finally(() => {
        stopLoading();
      });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
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
        {data?.map((item) => (
          <CatalogCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
