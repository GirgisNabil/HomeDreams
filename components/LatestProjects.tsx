import SignleProject from "../components/SignleProject";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

function LatestProjects() {
  return (
    <div className="flex flex-col w-screen px-3  md:p-10 py-24 justify-center lg:pt-20  lg:pb-36">
      <div className="flex flex-col items-center justify-center text-center space-y-10 pb-10 md:pb-20 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl relative overflow-hidden py-4 latest-projects">
          Latest Projects
        </h1>
        <p className="text-base md:text-2xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        </p>
      </div>
      <div className="space-y-0.5 md:space-y-2 md-w ">
        <div className="md:group md:-ml-2 display flex justify-center items-center  ">
          <button className="arrow left p-1  md:p-3 mr-2 lg:mr-10"></button>

          <Swiper
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1350: {
                slidesPerView: 3,
              },
              1700: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
          >
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
            <SwiperSlide>
              <SignleProject />
            </SwiperSlide>
          </Swiper>

          <button className="arrow right p-1 md:p-3 ml-2 lg:ml-10"></button>
        </div>
      </div>
    </div>
  );
}

export default LatestProjects;
