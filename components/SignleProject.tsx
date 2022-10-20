import React from "react";
import { MdOutlineDesignServices, MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";

function SignleProject() {
  return (
    <div className=" flex flex-col justify-center items-center text-start bg-white">
      <div className="relative flex justify-center items-center single-project w-72 h-64  lg:h-80 lg:w-[410px]">
        <div className="arrow-container">
          <CgArrowLongRight className="react-arrow text-5xl" />
        </div>
        <Image
          src="/3d1.jpg"
          layout="fill"
          objectFit="cover"
          className=" rounded-xl"
        />
      </div>

      <p className="text-center pt-4">
        {" "}
        Lorem ipsum, dolor sit amet consectetur
      </p>
    </div>
  );
}

export default SignleProject;
