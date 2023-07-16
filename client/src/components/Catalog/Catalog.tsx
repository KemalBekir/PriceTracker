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

      <div className="mt-2 grid cursor-pointer min-h-full mx-3 grid-cols-2 gap-4 md:grid-cols-3">
        {currentItems.map((item) => (
          <CatalogCard key={item._id} data={item} />
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
