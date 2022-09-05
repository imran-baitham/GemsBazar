import React from "react";
import logo from "../../Images/logo.png";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";

const footer = [
  {
    foooter: [
      {
        name: "Rooms",
        href: "/",
      },
      {
        name: "Resorts",
        href: "/",
      },
      {
        name: "Campsite",
        href: "/",
      },
      {
        name: "Login",
        href: "/",
      },
    ],
  },
];
function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="bg-[#000000] text-white h-[350px] w-full items-center mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div>
            <Image
              src={logo}
              width={150}
              height={100}
              alt="website logo image"
            />
            <p className="ml-5">
              Bring your dreams <br /> to life with locals
            </p>
          </div>
          <div>
            <h1 className="font-extrabold">Accomodations</h1>
            {footer.map((x) => {
              return (
                <>
                  {x.foooter.map((x) => {
                    return (
                      <>
                        <div className="">
                          <Link href={x.href}>{x.name}</Link>
                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}
            {/* <p>Apartments</p>
            <p>Rooms</p>
            <p>Resorts</p>
            <p>Campsite</p> */}
          </div>
          <div>
            <h1 className="font-extrabold">Vechicle</h1>
            <p>Cars</p>
            <p>Bikes</p>
            <p>Cycles</p>
            <p>Campsite</p>
          </div>
          <div>
            <h1 className="font-extrabold">Accomodations</h1>
            <p>Apartments</p>
            <p>Rooms</p>
            <p>Resorts</p>
            <p>Campsite</p>
          </div>
          <div className="mb-9">
            <h1 className="font-extrabold ">Contact us</h1>
            <p>site feedback</p>
            <p>Report problem</p>
          </div>
          <div className="text-white">
            <h1 className="font-extrabold">Find on us</h1>
            <div className="flex items-center pt-2">
              <AiOutlineInstagram className="h-8 w-8" />
              <p className="ml-2">Instagram</p>
            </div>
            <div className="flex items-center pt-2">
              <BsFacebook className="h-8 w-8 mr-2" />
              <p>Facebook</p>
            </div>
            <div className="flex items-center pt-2">
              <ImLinkedin className="h-8 w-8 mr-2" />
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
