"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { generateUUID } from "@/utils/react/generateRandomIndex";
import Image from "next/image";

export const Slider = (props: {
  images: string[];
  imagesSize: { width: number; height: number };
  className?: string;
}) => {
  return (
    <Swiper className={props.className} slidesPerView={1}>
      {props.images.map((image) => (
        <SwiperSlide key={generateUUID()}>
          {
            <Image
              priority
              fetchPriority="high"
              src={image}
              width={props.imagesSize.width}
              height={props.imagesSize.height}
              alt=""
            />
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
