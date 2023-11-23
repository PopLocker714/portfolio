"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { generateUUID } from "@/utils/react/generateRandomIndex";

export const Slider = () => {
  console.log(generateUUID());

  return (
    <Swiper
      className="h-96"
      // spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-green-500">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-blue-500">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-yellow-500">Slide 4</SwiperSlide>
    </Swiper>
  );
};
