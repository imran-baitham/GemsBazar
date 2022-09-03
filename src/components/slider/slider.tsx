import React from "react";
import orangeimage from "../../Images/slider.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="bg-gray-200 w-full w-2/3 h-52 my-20 rounded-md"
    >
      <SwiperSlide>
        <div className="flex items-center justify-around">
          <Image
            width={1250}
            height={210}
            src={orangeimage.src}
            alt="image slider"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
