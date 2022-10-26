import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";

function Services() {
  const [show, setShow] = useState<Number>(0);

  const myJson = [
    {
      img: "/3d1.jpg",
      name: "service 1",
      par: "this is the paragraph of service 1",
    },
    {
      img: "/8.jpg",
      name: "service 2",
      par: "this is the paragraph of service 2",
    },
    {
      img: "/gg.jpg",
      name: "service 3",
      par: "this is the paragraph of service 3",
    },
    {
      img: "/4.jpg",
      name: "service 4",
      par: "this is the paragraph of service 4",
    },
    {
      img: "/1.jpg",
      name: "service 5",
      par: "this is the paragraph of service 5",
    },
    {
      img: "/land2.jpg",
      name: "service 6",
      par: "this is the paragraph of service 6",
    },
    {
      img: "/3.jpg",
      name: "service 7",
      par: "this is the paragraph of service 7",
    },
  ];
  return (
    <div className="pt-56 lg:px-96 ">
      <SectionHeader
        header="Explore Our Services"
        paragraph=" projects
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, possimus nihil 
expedita adipisci quia voluptates omnis maxime unde fugit nostrum cum, eius inventore magni ex"
      />
      <main className="flex flex-col lg:flex-row py-28 gap-7 justify-center ">
        <div className="services-menu lg:w-1/4">
          {myJson.map((element, index) => {
            return (
              <p onClick={() => setShow(index)} key={index}>
                {element.name}
              </p>
            );
          })}
        </div>

        <div className="lg:w-3/4">
          {myJson
            .filter((e, index) => show === index)
            .map((e) => {
              return (
                <div className="">
                  <div className="relative w-[100%] h-[250px] md:h-[300px] xl:h-[450px]">
                    <Image
                      src={e.img}
                      layout="fill"
                      width={100}
                      height={40}
                      objectFit="cover"
                    />
                  </div>
                  <p className="relative">{e.par}</p>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export default Services;
