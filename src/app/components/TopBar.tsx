import React from "react";

const TopBar = () => {
  return (
    <div className="h-[35px] bg-[#3a3a3a] w-full">
      <div className="max-w-screen-xl h-full flex justify-center items-center m-[0_auto]">
        <ul className="text-[13px] flex justify-evenly w-full">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="15"
            >
              <path
                d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                fill="#4CA701"
              />
            </svg>
            <span>Handmade designs</span>
          </li>
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="15"
            >
              <path
                d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                fill="#4CA701"
              />
            </svg>
            <span>free shipping over €100 (NL)</span>
          </li>
          <li className="sm:flex items-center gap-1 hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="15"
            >
              <path
                d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                fill="#4CA701"
              />
            </svg>
            <span>100% cotton t-shirts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
