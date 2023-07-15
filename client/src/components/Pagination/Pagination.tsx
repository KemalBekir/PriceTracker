type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
};

import React from "react";

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];
  console.log(totalItems);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-wrap justify-center gap-3 p-6 py-12">
      <ul className="flex gap-2">
        {pageNumbers.map((pageIndex) => (
          <li key={pageIndex}>
            <div className="ml-1 flex">
              <button className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg`} onClick={() => paginate(pageIndex)}>{pageIndex}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
