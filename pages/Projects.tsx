import { KeyObject } from "crypto";
import React, { useState, useEffect } from "react";
import { Interface } from "readline";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import jwt from "jsonwebtoken";

import Auth from "../components/utils/Auth";
function Projects() {
  // Auth();
  interface img {
    id: Number;
    src: string;
  }

  // const [images, setImages] = useState([
  //   { id: 1, src: "/1.jpg" },
  //   { id: 2, src: "/2.jpg" },
  //   { id: 3, src: "/3.jpg" },
  //   { id: 4, src: "/4.jpg" },
  //   { id: 5, src: "/5.jpg" },
  //   { id: 6, src: "/6.jpg" },
  //   { id: 7, src: "/7.jpg" },
  //   { id: 8, src: "/8.jpg" },
  //   { id: 9, src: "/9.jpg" },
  //   { id: 10, src: "/8.jpg" },
  //   { id: 11, src: "/9.jpg" },
  //   { id: 12, src: "/8.jpg" },
  //   { id: 13, src: "/9.jpg" },
  //   { id: 14, src: "/1.jpg" },
  //   { id: 15, src: "/2.jpg" },
  //   { id: 16, src: "/3.jpg" },
  //   { id: 17, src: "/4.jpg" },
  //   { id: 18, src: "/5.jpg" },
  //   { id: 19, src: "/6.jpg" },
  //   { id: 20, src: "/7.jpg" },
  //   { id: 21, src: "/8.jpg" },
  //   { id: 22, src: "/9.jpg" },
  //   { id: 23, src: "/8.jpg" },
  //   { id: 24, src: "/9.jpg" },
  //   { id: 25, src: "/8.jpg" },
  //   { id: 26, src: "/9.jpg" },
  // ]);

  const [visible, setVisible] = useState(9);
  const [finished, setFinished] = useState(false);

  let images: Array<img> = [
    { id: 1, src: "/1.jpg" },
    { id: 2, src: "/2.jpg" },
    { id: 3, src: "/3.jpg" },
    { id: 4, src: "/4.jpg" },
    { id: 5, src: "/5.jpg" },
    { id: 6, src: "/6.jpg" },
    { id: 7, src: "/7.jpg" },
    { id: 8, src: "/8.jpg" },
    { id: 9, src: "/9.jpg" },
    { id: 10, src: "/8.jpg" },
    { id: 11, src: "/9.jpg" },
    { id: 12, src: "/8.jpg" },
    { id: 13, src: "/9.jpg" },
    { id: 14, src: "/1.jpg" },
    { id: 15, src: "/2.jpg" },
    { id: 16, src: "/3.jpg" },
    { id: 17, src: "/4.jpg" },
    { id: 18, src: "/5.jpg" },
    { id: 19, src: "/6.jpg" },
    { id: 20, src: "/7.jpg" },
    { id: 21, src: "/8.jpg" },
    { id: 22, src: "/9.jpg" },
    { id: 23, src: "/8.jpg" },
    { id: 24, src: "/9.jpg" },
    { id: 25, src: "/8.jpg" },
    { id: 26, src: "/9.jpg" },
  ];

  const loadMore = () => {
    if (visible >= images.length) {
      setFinished(true);
    } else {
      setVisible((prev) => prev + 9);
    }
  };

  return (
    <div className="py-36 lg:py-56 px-4 lg:px-96">
      <SectionHeader
        header="Explore the projects"
        paragraph="projects Lorem ipsum dolor, sit 
        amet consectetur adipisicing elit. Beatae, possimus nihil 
        expedita adipisci quia voluptates omnis maxime unde fugit nostrum cum, eius inventore magni ex"
      />

      <main className="lg:pt-28 flex flex-col  justify-center">
        <div className="p-2 pb-4 lg:hidden border-b-2 mb-8 border-black">
          All
        </div>
        <div className="gallery  h-full min-h-max">
          {images.slice(0, visible).map((e, i) => {
            return (
              <div
                className="image-card relative space-y-2 pb-6 rounded-2xl"
                key={i}
              >
                <Image
                  src={e.src}
                  layout="responsive"
                  width={50}
                  height={50}
                  objectFit="cover"
                  className="relative rounded-2xl image transition-all"
                />
                <h1 className="text-xl pt-3 font-medium">Case Study</h1>
                <p className="text-sm text-gray-500 font-medium">architure</p>
              </div>
            );
          })}
        </div>
        {finished === true && (
          <div className="mx-auto mt-8">No More Photos To Be Loded !</div>
        )}
        <button
          className="text-xl font-medium mt-10 p-4 mx-auto transition-all duration-500 hover:bg-gray-300 rounded-md"
          onClick={loadMore}
        >
          Load More +
        </button>
      </main>
    </div>
  );
}

export default Projects;
