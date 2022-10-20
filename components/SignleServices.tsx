import React from "react";
import { MdOutlineDesignServices, MdOutlineNavigateNext } from "react-icons/md";

function SignleServices() {
  return (
    <div className="flex flex-col justify-center rounded-lg border-2 border-black p-5 pl-6 lg:p-10 text-start lg:pl-10 bg-white min-w-max ">
      <div className="flex gap-5 pb-7 justify-center items-center">
        <MdOutlineDesignServices className="text-4xl lg:text-5xl text-amber-300" />
        <p className=" text-m md:text-2xl"> lorem and ...</p>
      </div>
      <p className="text-xs md:text-base">
        asdasdsadasdsssadasd <br />
        <br />
        sdsadsadsadsadasdasd <br />
        asdasdsadasd asdasd
        <br />
        <br />
        sdsadsadsadsad asdasd
        <br />
        asdasdsadasd asdasd
        <br />
        sdsadsadsadsad <br />
      </p>
      <div className="flex mt-5 justify-between items-center text-sm gap-4">
        <button className="bg-amber-300 p-2 lg:px-4 lg:py-2 ">Read more</button>
        <p> 9 500 P/m2</p>
      </div>
    </div>
  );
}

export default SignleServices;
