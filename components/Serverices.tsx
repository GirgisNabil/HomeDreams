import { useRef, useState } from "react";
import SignleServices from "../components/SignleServices";
import { Carousel } from "@trendyol-js/react-carousel";
import Swiper from "react-id-swiper";
import "swiper/swiper.min.css";
import { MdOutlineNavigateNext, MdOutlineArrowBackIos } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

function Serverices() {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col w-screen px-3  md:p-10 py-24 bg-amber-300 justify-center lg:pt-20  lg:pb-36">
      <div className="flex flex-col items-center justify-center text-center space-y-10 pb-10 md:pb-20 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl relative our-Serverices overflow-hidden py-4">
          Our Services
        </h1>
        <p className="text-base md:text-2xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        </p>
      </div>
      <div className="space-y-0.5 md:space-y-2 md-w">
        <div className="md:group md:-ml-2 display flex justify-center items-center ">
          <button
            onClick={() => handleClick("left")}
            className="arrow left p-1  md:p-3 mr-2 lg:mr-10"
          ></button>

          <div
            ref={rowRef}
            className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2  lg:w-[60vw]"
          >
            <SignleServices />
            <SignleServices />
            <SignleServices />
            <SignleServices />
            <SignleServices />
            <SignleServices />
          </div>

          <button
            onClick={() => handleClick("right")}
            className="arrow right p-1 md:p-3 ml-2 lg:ml-10"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Serverices;
