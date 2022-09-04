import Link from "next/link";
import React from "react";
import { BsCalendarX } from "react-icons/bs";
import { Button } from "../../../components/button/button";

function ManageProducts() {
  let userLoginProduct = true;

  return (
    <div className="px-10">
      <h1 className="font-black text-black text-3xl leading-[55px] text-left">
        Active Auctions
      </h1>
      {userLoginProduct ? (
        <div>
          <ul className="grid grid-cols-1 gap-6">
            <li className="w-full p-2 bg-gray-300 flex justify-between">
              <div className="w-[300px]">
                <img
                  src="https://d.newsweek.com/en/full/1896169/paraiba-tourmaline.png?w=600&q=75&f=66256ed9a23c421fc7ed277fae5f9e23"
                  alt="asdfasdf"
                  className="border-2 w-full h-[100px]"
                />
              </div>
              <div className="w-full p-3">
                <h1 className="font-bold text-2xl">Product tiitle</h1>
                <h1 className="text-xl">Price : 30000</h1>
              </div>
              <div className="w-full flex m-2 justify-end">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="w-full mr-1 flex items-center justify-center font-medium text-white  bg-[#0047FF] hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center"
                  >
                    approve
                  </button>
                  <button className="w-full flex items-center justify-center font-medium text-white  bg-red-400 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center">
                    decline
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="h-96 w-full flex items-center justify-center">
          <div className="p-20">
            <BsCalendarX className="w-24 h-24 m-auto" />
            <h1 className="py-4 text-black text-xl">
              you haven’t added any item yet
            </h1>
            <Button className="m-auto">Add Item</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageProducts;
