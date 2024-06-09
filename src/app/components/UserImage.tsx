"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import Image from "next/image";
import profilePicPlaceHolder from "../../../public/placeholder/profile-pic-placeholder.png";

const UserImage = () => {
    const session = useSession()
    const user = session.data?.user

  return (
    <>
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
    </>
  )
}

export default UserImage