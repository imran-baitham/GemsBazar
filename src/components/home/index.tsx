import React from "react";
import gemstone from "../../Images/gemstone3.jpg";
import { Button } from "../button/button";

const Dreams = () => {
  return (
    <div className="pb-4">
      <img
        className="h-5/6 w-full border border-1 border-black absolute -z-20 top-0 left-0"
        src={gemstone.src}
        alt="fasdfasdf"
      />
      <div className="w-full h-[76vh]">
        <div className="w-full h-full flex flex-col justify-center  backdrop-blur-sm">
          <h1 className="mt-5 text-4xl text-white ml-[8%] leading-[80px] text-6xl font-semibold drop-shadow-lg bold">
            Bring your dreams <br /> to life with locals
          </h1>
          <div className="leading-[100px]">
            <Button xl className="text-white ml-[8%] text-lg font-bold bg-[#0047FF] py-3 px-7 rounded-sm mt-10">
              SELL IT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dreams;
