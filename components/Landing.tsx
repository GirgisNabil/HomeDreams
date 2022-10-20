import React from "react";
import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <div className="flex space-y-2 py-16 md:space-y-4 lg:pb-12  h-[95vh] mt-9">
      <div className="flex gap-10 flex-col-reverse justify-end md:flex-row md:justify-around md:gap-0 md:items-center w-screen ">
        <div className="px-5 gap-8 flex flex-col text-center md:text-start md:pl-16">
          <h1 className="text-3xl md:text-4xl lg:text-7xl">
            Your Home <span className="text-amber-300">our</span> Dream
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl pl-4">
            Working just to make you whishes come true
          </p>
          <div className="flex gap-4 justify-evenly mx-2 md:gap-10 md:justify-start ">
            <Link href="/Projects">
              <div className="cursor-pointer font-bold  px-12 py-2 rounded-md  bg-amber-300 text-white hover:bg-amber-200 transition-all duration-300 md:px-20 md:py-3 md:text-xl  ">
                Gallery
              </div>
            </Link>
            <Link href="/Services">
              <div className="cursor-pointer font-bold  px-12 py-2 rounded-md border-2 border-amber-300  md:text-xl md:px-20 md:py-3">
                Services
              </div>
            </Link>
          </div>
        </div>
        <div className="animation-gg">
          <img src="/3d5.png" width={"1000px"} min-width={"300px"} />
          {/* 
          <Image
            src="/3d5.png"
            width="1000px"
            height="1000px"
            objectFit="contain"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
