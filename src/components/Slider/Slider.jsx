import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-flip";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
      effect={"flip"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Your Path to a Bumper Harvest Starts Here.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/zhdgqpXP/fertilizing.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Nourish and Protect: Growth Powered by Precision.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/svQjYfY0/bbanner-3.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Grown Where Nature Meets Perfection.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/DfYX63nj/math.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Precision Grown. Predictably Perfect Harvests.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/Tx4dR1sZ/wheat.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Flavourful Variety, Straight From the Farm.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/S42p4jvJ/allvege.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Performance That Delivers, Rain or Shine.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/rfvGQQK3/pure.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Precision Farming. Perfect Produce. Every Time.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/Ldh0qLqf/vegitables.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[500px]">
          <h2 className="text-xl md:text-3xl font-bold inset-0 absolute flex justify-center text-[#f9ca24] mt-12 z-10">
            Powered by Technology. Rooted in Care.
          </h2>
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={"https://i.ibb.co.com/QFC0Tt1t/brokli.jpg"}
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
