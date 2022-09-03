import React, { useState } from "react";
import img from "../../Images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface FormData {
  username: string;
  email: string;
  password: string;
}

function Index() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/login");
  };

  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center my-14">
                <Image src={img} alt="image" />
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    {...register("username", {
                      required: true,
                      minLength: 3,
                      maxLength: 35,
                    })}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type={"text"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter yout FullName"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 pt-1">
                    {errors?.username?.type === "required" && (
                      <p>username is required</p>
                    )}
                    {errors?.username?.type === "minLength" && (
                      <p>username more than 6 characters</p>
                    )}
                    {errors?.username?.type === "maxLength" && (
                      <p>username less than 15 characters</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email or Number
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      minLength: 3,
                      maxLength: 35,
                      pattern: /@/i,
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your Phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 pt-1">
                    {errors?.email?.type === "required" && (
                      <p>Email is required</p>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <p>Couldn’t find your Google Account</p>
                    )}
                    {errors?.email?.type === "minLength" && (
                      <p>Email more than 6 characters</p>
                    )}
                    {errors?.email?.type === "maxLength" && (
                      <p>Email less than 15 characters</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 pt-1">
                    {errors?.password?.type === "required" && (
                      <p>Password is required</p>
                    )}
                    {errors?.password?.type === "minLength" && (
                      <p>Password more than 6 characters</p>
                    )}
                    {errors?.password?.type === "maxLength" && (
                      <p>Password less than 15 characters</p>
                    )}
                  </div>
                </div>
                {/* <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    {...register("Confirm", {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                    })}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div className="block mb-2 text-[13px] text-red-900 pt-1">
                    {errors?.Confirm?.type === "required" && (
                      <p>Confirm is required</p>
                    )}
                    {errors?.Confirm?.type === "minLength" && (
                      <p>Confirm more than 6 characters</p>
                    )}
                    {errors?.Confirm?.type === "maxLength" && (
                      <p>Confirm less than 15 characters</p>
                    )}
                  </div>
                </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center font-medium text-white  bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light flex justify-center  text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <div className="font-bold text-1xl text-[#0047FF] ml-2">
                    <Link href={"/login"}>Log In</Link>
                  </div>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
