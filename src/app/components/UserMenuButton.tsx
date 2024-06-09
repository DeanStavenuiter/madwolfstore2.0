"use client";

import Image from "next/image";
import profilePicPlaceHolder from "../../../public/placeholder/profile-pic-placeholder.png";
import Link from "next/link";
import React from "react";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { useSession } from "next-auth/react";

const UserMenuButton = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost m-0">
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
      </label>
      <ul
        tabIndex={0}
        className="bg-[--grey] menu dropdown-content rounded-[5px] menu-sm z-30 mt-3 w-[135px] shadow"
      >
        {user?.role === "wolf" && (
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        )}
        <li>
          {user ? (
            <>
              <Link href={"/profile"}>Profile</Link>
              <div className="separator-line" />
              <SignOut />
            </>
          ) : (
            <SignIn />
          )}
        </li>
      </ul>
      {/* <Toaster /> */}
    </div>
  );
};

export default UserMenuButton;
