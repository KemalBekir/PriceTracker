import React, { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as catalogService from "@/services/catalogService";

interface SearchProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  isSearching: boolean;
  setSearching: React.Dispatch<React.SetStateAction<boolean>>;
  // searchParams: URLSearchParams;
  // setSearchParams: (searchParams: URLSearchParams) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({
  data,
  setData,
  isSearching,
  setSearching,
  // searchParams,
  // setSearchParams,
  searchTerm,
  setSearchTerm,
  domain,
  setDomain,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name") || "";

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const url: string = e.target.value;
    const domainRegex: RegExp =
      /^(?:https?:\/\/)?(?:www\.)?([^./]+\.[^./]+\.[^./]+)\/?/i;
    const matches: RegExpMatchArray | null = url.match(domainRegex);

    if (url) {
      if (matches) {
        setDomain(matches[1]);
      }
      const newParams = new URLSearchParams({ name: url });
      setSearchParams(newParams);
      setSearchTerm(url);
    } else {
      setSearchParams(new URLSearchParams());
      setSearchTerm("");
      setSearching(false);
    }
  };

  const submitSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
    if (query) {
      setTimeout(() => {
        catalogService
          .scrape(searchTerm, domain)
          .then((result) => setData(result));
        setSearching(true);
        setSearchTerm(""); // Reset the search term
      }, 600);
    } else if (searchTerm.length === 0) {
      catalogService.getAll().then((result) => {
        setData(result);
      });
    }
  };

  return (
    <form
      className="m-auto my-4 w-[60%] items-center"
      method="get"
      onSubmit={submitSearch}
    >
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border bg-white p-4 pl-10 text-lg text-gray-900"
          placeholder="Find amazon product"
          name="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          required
        />
        <button
          type="submit"
          className="absolute bottom-2.5 right-2.5 cursor-pointer rounded-full bg-black px-4 py-2 text-lg font-medium text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;