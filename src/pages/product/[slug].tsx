import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
// import Category from "../../components/category/category";
import Link from "next/link";
import Skelton from "./datailsSkeleton/datails";

function ProductScreen() {
  const [people, setData] = useState([]);
  const getData = () => fetch("/api/product").then((res) => res.json());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      getData().then((people) => setData(people));
    }, 2000);
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  const person = people.find((x: any) => x.slug === slug);
  if (!person) {
    return <Skelton />;
  }

  return (
    <>
      {/* <Category /> */}
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="flex-1 relative z-0 flex overflow-hidden my-10">
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
                <SwiperSlide>
                  <div className="bg-gray-100 h-[440px] w-5/6 m-auto mt-1 select-none">
                    {/* <Image src={person.productApiUrl} alt="products images" /> */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </main>
          <aside className="relative xl:flex xl:flex-col flex-shrink-0 w-96 overflow-y-auto">
            <div className="border border-1 p-5 h-full">
              <h1 className="font-black text-black text-3xl leading-[55px] text-left pt-2 pb-3">
                Saller description
              </h1>
              <div className="relative flex items-center">
                <div>
                  <img
                    className="h-14 w-14 rounded-full mr-3"
                    src={person.productApiUrl}
                    alt="image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {person.member}
                    </p>
                  </a>
                </div>
              </div>
              <div className="my-5 text-center">
                <Link href={"/chatbox"}>
                  <button className="bg-[#0047FF] absolute bottom-2 left-2 text-white border-1 py-3 px-32 mt-10">
                    Chat with saller
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="flex-1 relative z-0 flex overflow-hidden my-10">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none mr-3 border border-1 border-gray-300 p-5">
            <h1 className="font-bold text-1xl">Details</h1>
            <div className="mt-4 pt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <h1 className="font-bold">{person.charge}</h1>
              <h1>Rs {person.price}</h1>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <h1 className="font-bold">Condition</h1>
              <h1>{person.Condition}</h1>
            </div>

            <div className="mt-5 border border-gray-300 p-6">
              <h1 className="font-bold">Descriptions</h1>
              <h1 className="pt-3">{person.datails}</h1>
            </div>

            <div className="my-10">
              <div className="relative flex items-center">
                <div>
                  <img
                    className="h-12 w-12 rounded-full mr-3"
                    src={person.productApiUrl}
                    alt="image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {"helpful"}
                    </p>
                  </a>
                </div>
              </div>

              <div className="relative flex items-center mt-4">
                <div>
                  <img
                    className="h-12 w-12 rounded-full mr-3"
                    src={person.productApiUrl}
                    alt="image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {"Nice work"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <input
              type={"text"}
              placeholder="Write your review"
              className={"mt-14 w-full border border-gray-300 p-4 outline-none"}
            />
          </main>
          <aside className="relative xl:flex xl:flex-col flex-shrink-0 w-96 overflow-y-auto">
            <div className="border border-1 h-96">
              <div className="relative flex items-center">
                <div className="flex-1 min-w-0">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103408.16812933404!2d74.30191438079711!3d35.910131013989314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3642543b1%3A0x40fd0ca3ca17282b!2sGilgit!5e0!3m2!1sen!2s!4v1661798028243!5m2!1sen!2s" width="100%" height="380" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
