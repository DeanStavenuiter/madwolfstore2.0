import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center rounded-[20px] h-[40px]">
      <Link href="/">
        <div className="relative flex items-center gap-3 text-xl justify-start tracking-tighter">
          <div className="bg-[--grey]  w-[85px] h-[85px] sm:w-[112px]  sm:h-[112px] absolute rounded-[100px] left-4 top-[-19px] flex justify-center items-center">
            <Image
              src={"/logo/logo_wit.png"}
              height={100}
              width={100}
              alt="Madwolf logo"
              priority
              className="my-3.5 w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] sm:rounded-[100px] "
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
