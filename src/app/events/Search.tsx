"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = ({ search }: { search: string }) => {
  const [text, setText] = useState(search);
  const router = useRouter();
  //   console.log(text);
  function handleSearch() {
    router.push(`/events?search=${text}`);
  }
  useEffect(() => {
    if (!search) {
      router.push(`/events`);
    }
  }, [search]);

  return (
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
        >
          <option value="All">All</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
