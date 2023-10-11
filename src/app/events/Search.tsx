"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = ({ search, cat }: { search: string; cat: string }) => {
  const [text, setText] = useState(search);
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const searchVal = searchParams.get("search");

  function handleSearch() {
    routeQuery("search", text);
  }
  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;
    // const searchParams = useSearchParams();
    //

    // const search = searchParams.get("search");
    // // const category = searchParams.get("category");
    //

    if (selectedValue === "all") {
      router.push(`/events`);
      // searchParams.set("category", "");
    } else {
      routeQuery("category", selectedValue);
    }
  }
  useEffect(() => {
    if (!search) {
      router.push(`/events`);
    }
  }, [search]);

  // function to route query parameters
  function routeQuery(key: string, val: string) {
    router.push(
      `/events?${key}=${val}${
        category && "category" !== key ? `&category=${category}` : ""
      }${searchVal && "search" !== key ? `&search=${searchVal}` : ""}`
    );
  }

  return (
    <>
      <div>
        <div className="flex ring-1 px-2">
          <input
            value={text}
            placeholder="Search Events..."
            onChange={(e) => setText(e.target.value)}
            className="block w-full rounded-md border-0 outline-none focus:border-0 py-1.5 pl-10 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          <button className="mr-3 border px-4" onClick={handleSearch}>
            Search
          </button>
          <select
            id="pricingType"
            name="pricingType"
            className="w-[20%] h-10 focus:outline-none text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            onChange={handleCategory}
          >
            <option value={"all"}>All</option>
            <option value="Wedding">Wedding</option>
            <option value="Musical">Musical</option>
            <option value="Birthday">Birthday</option>
            <option value="Burial">Burial</option>
            <option value="Other">Others</option>
          </select>
        </div>
      </div>
      <h1 className="text-1xl">
        {search && `Search for "${search}" `}
        {cat && `Search Category for "${cat}"`}
      </h1>
    </>
  );
};

export default Search;
