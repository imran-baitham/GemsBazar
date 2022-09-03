import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Cars", href: "#" },
  { name: "Motorcycle", href: "#" },
  { name: "lands and Plots", href: "#" },
  { name: "Apartments", href: "#" },
  { name: "Cameras", href: "#" },
];

const navigationList = [
  { name: "Motorcycle", href: "#" },
  { name: "house", href: "#" },
  { name: "lands and Plots", href: "#" },
  { name: "Apartments", href: "#" },
  { name: "Cameras", href: "#" },
];
const Vechicle = [
  { name: "Cars", href: "#" },
  { name: "Motorcycle", href: "#" },
  { name: "house", href: "#" },
  { name: "Cameras", href: "#" },
];
const Tour = [
  { name: "Cars", href: "#" },
  { name: "Motorcycle", href: "#" },
  { name: "house", href: "#" },
  { name: "lands and Plots", href: "#" },
  { name: "Apartments", href: "#" },
];

function Category(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-auto w-5/6 m-auto text-white">
      <header className="bg-[#F4F4F4] text-black mt-10">
        <nav aria-label="Top">
          <div className="w-full flex items-center justify-between border-none">
            <div className="flex items-center">
              <button
                className="font-semibold px-4 py-3 w-64 text-left flex items-center justify-between focus:bg-gray-200"
                onClick={() => setShow(!show)}
              >
                All Products <BsChevronDown />
              </button>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-black"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-black hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      {show && (
        <div className="font-black text-black text-left absolute left-50 -bottom-30 z-40 bg-[#F4F4F4] mt-2">
          <div className="m-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl">Accomodations</h2>
              <ul>
                <li className="">
                  {navigationList.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base block font-medium text-black leading-[28px]"
                    >
                      {link.name}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">Vechicle</h2>
              <ul>
                <li className="">
                  {Tour.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base block font-medium text-black leading-[28px]"
                    >
                      {link.name}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">Vechicle</h2>
              <ul>
                <li className="">
                  {navigationList.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base block font-medium text-black leading-[28px]"
                    >
                      {link.name}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">Tour</h2>
              <ul>
                <li className="">
                  {Vechicle.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base block font-medium text-black leading-[28px]"
                    >
                      {link.name}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
