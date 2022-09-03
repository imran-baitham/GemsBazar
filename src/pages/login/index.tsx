import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../Images/logo.png";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import ReactIcon from "../../components/ReactIcon/ReactIcon";

interface FormData {
  email: string;
  password: string;
}

const Index = () => {
  const [login, setLogin] = useState<boolean>(true);

  let router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  // ===============  Fetch user  ==================
  const [user, setUsers] = useState([]);
  const getData = () => fetch("/api/users").then((res) => res.json());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getData().then((people) => setUsers(people));
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let check = user.filter((user: any) => {
      return user.email === data.email && user.password === data.password;
    })[0];
    console.log(check, "ckeck filter");
    if (check) {
      // localStorage.setItem("login", JSON.stringify(login));
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } else {
      alert("user not found");
    }
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
                className="p-6 space-y-4 md:space-y-6 sm:p-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        minLength: 3,
                        maxLength: 35,
                        pattern: /@/i,
                      })}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                    />
                    <div className="block mb-2 text-[13px] text-red-900 pt-1">
                      {errors?.email?.type === "required" && (
                        <div className="flex items-center">
                          <ReactIcon
                            icon="MdErrorOutline"
                            className="w-4 h-4 mr-1"
                          />
                          <p>Email is required</p>
                        </div>
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
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      {...register("password", {
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
                      {errors?.password?.type === "required" && (
                        <div className="flex items-center">
                          <ReactIcon
                            icon="MdErrorOutline"
                            className="w-4 h-4 mr-1"
                          />
                          <p>Password is required</p>
                        </div>
                      )}
                      {errors?.password?.type === "minLength" && (
                        <p>Password more than 6 characters</p>
                      )}
                      {errors?.password?.type === "maxLength" && (
                        <p>Password less than 15 characters</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          name="remember"
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full font-medium text-white bg-[#0047FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <div className="text-sm underline text-right flex justify-end font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </div>
                  <p className="text-sm font-light flex justify-center text-gray-500 dark:text-gray-400">
                    Don’t have an account?
                    <div className="font-bold text-1xl text-[#0047FF] ml-2">
                      <Link href={"/signup"}>Sign Up</Link>
                    </div>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
