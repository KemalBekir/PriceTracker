import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { ItemProps } from "@/interfaces/interfaces";
import CatalogCard from "../CatalogCard/CatalogCard";
import * as CatalogService from "@/services/catalogService";
import useLoadingState from "@/hooks/useLoadingState";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";

type Props = {};

const Catalog: React.FC<Props> = (props: Props) => {
  const { isLoading, startLoading, stopLoading } = useLoadingState();

  const [data, setData] = useState<ItemProps[]>([]);
  const [isSearching, setSearching] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    startLoading();
    CatalogService.getAll()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        // TODO: Handle Error
      })
      .finally(() => {
        stopLoading();
      });
  }, []);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {isLoading && <Spinner />}
      <Search
        data={data}
        setData={setData}
        isSearching={isSearching}
        setSearching={setSearching}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        domain={domain}
        setDomain={setDomain}
      />

      <div className="mx-3 mt-2 grid min-h-full cursor-pointer lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
        {currentItems.map((item) => (
          <div className="w-full" key={item.id}>
            <CatalogCard data={item} />
          </div>
        ))}
      </div>

      {data.length > itemsPerPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default Catalog;
