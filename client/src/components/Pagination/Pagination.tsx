import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  active: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = React.memo(
  ({ onClick, disabled, active, children }) => {
    return (
      <button
        className={`flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-lg text-sm font-normal shadow-[0_4px_10px_rgba(0,0,0,0.03)] drop-shadow-md transition-colors
          ${
            active
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }
          ${disabled ? "cursor-not-allowed" : ""}
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  useEffect(() => {
    setCurrentPageIndex(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    if (currentPageIndex !== pageNumber) {
      setCurrentPageIndex(pageNumber);
      paginate(pageNumber);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPageIndex > 1) {
      const previousPage = currentPageIndex - 1;
      setCurrentPageIndex(previousPage);
      paginate(previousPage);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < totalPages) {
      const nextPage = currentPageIndex + 1;
      setCurrentPageIndex(nextPage);
      paginate(nextPage);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 p-6 py-12">
      <ul className="flex gap-2">
        <li>
          <Button
            onClick={goToPreviousPage}
            active={false}
            disabled={currentPageIndex === 1}
          >
            <FaChevronLeft />
          </Button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageIndex) => (
            <li key={pageIndex}>
              <Button
                onClick={() => handlePageChange(pageIndex)}
                disabled={currentPageIndex === pageIndex}
                active={currentPageIndex === pageIndex}
              >
                {pageIndex}
              </Button>
            </li>
          )
        )}
        <li>
          <Button
            onClick={goToNextPage}
            active={false}
            disabled={currentPageIndex === totalPages}
          >
            <FaChevronRight />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
