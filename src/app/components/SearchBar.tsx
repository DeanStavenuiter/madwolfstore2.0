import React from "react";

const SearchBar = () => {
  return (
    <form action={""}>
      <div className="relative md:form-control hidden lg:flex items-center">
        <svg
          className="pointer-events-none absolute left-0 z-10 my-3.5 ms-4 stroke-current opacity-60"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          type="text"
          name="searchQuery"
          placeholder="Search..."
          className="input input-bordered w-full flex items-center min-w-[100px] pl-12 bg-[var(--grey)] h-[40px] rounded-[20px]"
        />
        {/* <div className="dropdown dropdown-end">
          <div className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow">
            <div className="card-body"></div>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default SearchBar;
