import React from "react";

const FilterPage = () => {
  return (
    <div>
      <form className="flex flex-col md:flex-row gap-3">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPage;
