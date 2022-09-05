import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const data = [1, 2, 3, 4, 5];
import imgurl1 from "../../Images";
import Image from "next/image";
/* eslint-disable-next-line */
export interface CarouselProps {}

export function Carousel(props: CarouselProps) {
  return (
    <>
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="flex-1 relative z-0 lg:flex overflow-hidden my-10 sm:block">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none mr-3">
            <div className="md:h-[450px] border border-10 border-black w-full bg-black">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                autoplay={{
                  delay: 9000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="flex text-center p-10"
              >
                {data.map((items) => {
                  return (
                    <SwiperSlide key={items}>
                      <div className="bg-gray-100 h-[440px] w-5/6 m-auto mt-1 select-none">
                        <Image src={imgurl1} alt="products images" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </main>
          <aside className="relative xl:flex xl:flex-col flex-shrink-0 w-96 overflow-y-auto">
            <div className="border border-1 p-5 h-[300px] border border-1 border-black">
              <h1 className="font-black text-black text-3xl leading-[55px] text-left pt-2 pb-3">
                Saller description
              </h1>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Carousel;
