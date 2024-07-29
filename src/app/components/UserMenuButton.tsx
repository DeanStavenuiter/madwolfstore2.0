"use client";

import Image from "next/image";
import profilePicPlaceHolder from "../../../public/placeholder/profile-pic-placeholder.png";
import Link from "next/link";
import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { LogOut, Settings, User } from "lucide-react";

const UserMenuButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="dropdown dropdown-end flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            {user ? (
              <Image
                src={user?.image || profilePicPlaceHolder}
                alt="Profile picture"
                width={35}
                height={35}
                className="w-[35px] rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="left-[-30px] top-[10px] relative">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />{" "}
          {user?.role === "wolf" && (
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link href={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
          )}
          {user ? (
            <>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <SignOut />
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem>
              <SignIn />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Toaster /> */}
    </div>
  );
};

export default UserMenuButton;
