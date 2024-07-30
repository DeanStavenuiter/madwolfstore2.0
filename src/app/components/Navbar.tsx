import React from "react";
import SearchBar from "./SearchBar";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import Link from "next/link";
import MW from "./MW";

const Navbar = () => {
  
  return (
    <nav className="w-full bg-[--grey] shadow-[0px_5px_15px_#4e4e4e15] sticky border-solid border-b-[0.5px] border-b-[#414244] px-5 xl:px-[unset]">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl">
          <div className="flex sm:flex-row sm:justify-between w-full">
            <div className="flex w-full justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <MW width={100.25} height={25}/>
                </Link>
              </div>
              <div className="sm:flex items-centerz hidden ">
                <SearchBar />
              </div>
              <div className="flex justify-center items-center">
                <ShoppingCartButton cart={""} />
                <UserMenuButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
