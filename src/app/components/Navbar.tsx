import React from "react";
import SearchBar from "./SearchBar";
import ShoppingCartButton from "./ShoppingCartButton";
import { auth } from "@/auth";
import UserMenuButton from "./UserMenuButton";
import getUserSession from "../library/functions/GetUserSession";
import Link from "next/link";

const Navbar = async () => {
  const user = await getUserSession();

  return (
    <nav className="w-full bg-[--grey] shadow-[0px_5px_15px_#4e4e4e15] sticky ">
      <div className="flex justify-center mx-[15px]">
        <div className="flex sm:flex-row sm:justify-between w-full">
          {/* <Logo /> */}
          <div className="flex w-full justify-center sm:justify-between">
            <div className="flex items-center">
              <Link href="/">
                <span>MADWOLF</span>
              </Link>
            </div>
            <SearchBar />
            <ShoppingCartButton cart={""} />
            <UserMenuButton user={user} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
