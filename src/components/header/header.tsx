import React, { Fragment, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../utils/string";
import logo from "../../Images/logo.png";
import Image from "next/image";
import { Button } from "../button/button";
import ReactIcon from "../ReactIcon/ReactIcon";
import Link from "next/link";

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [userLogin, setUserLogin] = useState<any>();
  const [login, setTodos] = useState<boolean>();

  useEffect(() => {
    setUserLogin(localStorage.getItem("user"));
    if (userLogin) {
      setTodos(true);
    } else setTodos(false);
  }, [userLogin]);
  const handleOut = () => {
    localStorage.removeItem("user");
    setTodos(false)
  };
  return (
    <nav className="" aria-label="Top">
      <div className="w-full h-auto w-5/6 m-auto rounded-md">
        <div className="w-full flex items-center justify-between h-2/3">
          <Link href="/">
            <Image src={logo} height={80} width={130} className={"cursor-pointer"} alt="image"/>
          </Link>
          <div className="w-full flex items-center justify-end">
            {/* first input */}
            <div className="hidden lg:block">
              <div className="relative text-gray-700 focus-within:text-gray-900">
                <div className="absolute left-1 top-2 flex items-center">
                  <ReactIcon icon="HiLocationMarker" className="h-5 w-5 mr-8" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-7 pr-3 py-2 border border-black rounded-sm leading-5 outline-0 placeholder-gray-400 text-gray-900 sm:text-sm bg-gray-300"
                  placeholder="Search Location..."
                  type="search"
                />
              </div>
            </div>
            {/* second input */}
            <div className="w-2/4 px-2 lg:px-6 hidden lg:block">
              <div className="relative text-gray-700 focus-within:text-gray-900">
                <div className="absolute inset-y-0 right-36 pr-2 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 mr-8"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-3/4 pl-4 pr-3 py-2 border border-black rounded-sm leading-5 outline-0 placeholder-gray-400 text-gray-900 sm:text-sm bg-gray-300"
                  placeholder="Find  cars , hotels ,house more...."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div>
            {login ? (
              <Menu as="div" className="ml-3 mr-3 relative flex-shrink-0">
                <div>
                  <Menu.Button className="flex rounded-full">
                    <img
                      className="h-10 w-14 rounded-full"
                      src="https://p.kindpng.com/picc/s/24-248325_profile-picture-circle-png-transparent-png.png"
                      alt=""
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          View Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          My Upload
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href={"/login"}>
                          <div
                            onClick={handleOut}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                          >
                            Log out
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              ""
            )}
          </div>
          {login ? (
            <Link href={"/addproduct"}>
            <Button className="w-32">Add Product</Button>
            </Link>
          ) : (
            <div className="flex">
              <Link href={"/login"}>
                <Button className="w-28">login</Button>
              </Link>
              <Link href={"/signup"}>
                <Button className="w-28 ml-2">signup</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
