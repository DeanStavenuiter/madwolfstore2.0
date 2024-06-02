import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import ShoppingCartButton from "./ShoppingCartButton";
import { auth } from "@/auth";
import UserMenuButton from "./UserMenuButton";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user as any;

  return (
    <nav className="w-full bg-[#282828] shadow-[0px_5px_15px_#4e4e4e15] sticky">
      <div className="flex justify-center mb-[35px] max-w-screen-xl m-[0_auto]">
        <div className="gap-2 flex sm:flex-row sm:justify-between w-full">
          <Logo />
          <div className="flex w-4/5 items-center py-2 justify-between gap-2 sm:justify-end">
            <SearchBar />
            <div className="flex">
              <ShoppingCartButton cart={""} />
              <UserMenuButton user={user} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
