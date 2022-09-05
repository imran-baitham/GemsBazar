/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Category from "../../components/category/category";
import Header from "../../components/header/header";
import { app, database, storage } from "../../../firebaseConfig";
import { useForm, SubmitHandler } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { async } from "@firebase/util";
interface FormData {
  productTitle: string;
  discription: string;
  category: string;
  location: string;
  price: number;
  status: string;
  phoneNumber: string;
  images: Array<any>;
  userId: string;
}

function From() {
  const UserId = localStorage.getItem("token");
  console.log(UserId, "json id");
  const initialDetails = {
    productTitle: "",
    discription: "",
    category: "Gemstones",
    location: "",
    price: 0,
    status: "Avaliable",
    phoneNumber: 0,
    images: [],
    userId: UserId,
  };

  const [productDetails, setProductDetails] = useState(initialDetails);
  const [images, setImages] = useState(Array<any>);
  const [imageUrls, setImageUrls] = useState(Array<string>);
  const handleChange = (e: any) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
    console.log(productDetails);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const databaseRef = collection(database, "NewProduct");
  const onSubmit: SubmitHandler<FormData> = async () => {
    console.log("submit clicked");
    addDoc(databaseRef, { productDetails })
      .then((Response) => console.log(Response, "success"))
      .catch((err) => console.log(err, "errr"));
  };

  // ==========================================
  // = function for post products with images =
  // ==========================================
  const HandleSubmitProduct = async () => {
    await images.forEach((i) => {
      const imageRef = ref(storage, `images/${i?.name}`);

      uploadBytes(imageRef, i)
        .then((res) => {
          const array = [res.ref];
          array.forEach((item) => {
            getDownloadURL(item)
              .then((url) => {
                setImageUrls((prev) => [...prev, url]);
                console.log(url, "get url successfully");
              })
              .catch(() => alert("faild to getting URL"));
          });
        })
        .catch((Res) => console.log(Res, "ERROR TO UPLOAD IMAGE", images));
    });
  };
  const postProduct = async () => {
    await addDoc(databaseRef, { productDetails, imageUrls })
      .then((res) => {
        console.log(res, "added product sucessfully");
      })
      .catch((err) => console.log(err, "errr"));
  };
  if (
    images.length === imageUrls.length &&
    images.length >= 1 &&
    productDetails.productTitle !== ""
  ) {
    postProduct();
    productDetails.productTitle = "";
  }

  const imageTypes = ["image/jpg", "image/png", "image/PNG", "image/jpeg"];
  const handleProductImage = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const selectedFile = e.target.files[i];
      setImages((prev) => [...prev, selectedFile]);
    }
    // setImage(selectedFile)

    // if (selectedFile) {
    //   if (imageTypes.includes(selectedFile.type)) {
    //     setImage(selectedFile)
    //   } else {
    //     alert('please select valid image format')
    //   }
    // } else {
    //   alert('Please Select an Image')
    // }
  };

  return (
    <>
      <Header />
      <Category />
      <div className="mt-10 sm:mt-0">
        <div className="md:flex md:flex flex-col justify-center aligin-center md:gap-6">
          <div className="md:col-span-1 p-14">
            <h2 className="font-bold text-4xl my-14 text-center">
              POST YOUR AD
            </h2>
            <form
              className="w-[83vw] m-auto justify-center aligin-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="overflow-hidden sm:rounded-sm border border-1 border-gray-800">
                <div className="px-10 pt-5">
                  <h3 className="text-2xl font-bold leading-6 m-4 text-black">
                    POST YOUR AD
                  </h3>
                  <p className="m-4  text-sm text-gray-600">
                    Accomodations / Room{" "}
                    <a className="border-b-[2px]">Change</a>
                  </p>
                </div>
                <hr className="mt-10 border border-1 border-gray-800" />
                <div className="p-14">
                  <div className="ml-6">
                    <h2>INCLUDE SOME DETAILS</h2>
                  </div>
                  <div className="px-4 py-5 bg-white sm:p-6 p-14">
                    <div className="">
                      <div className="">
                        <label className="text-sm font-extrabold text-gray-700">
                          Add title
                        </label>
                        <input
                          className="mt-1 p-4 outline-none ring-black border-black-500  w-full border rounded-md"
                          {...register("productTitle", {
                            required: true,
                            minLength: 3,
                            maxLength: 35,
                            pattern: /@/i,
                          })}
                          value={productDetails.productTitle}
                          onChange={(e) => handleChange(e)}
                          type="text"
                          placeholder="Enter Prooduct Title"
                        />
                        <p className="text-sm mt-2 font-medium text-gray-700">
                          Title should contain at least 5 alphanumeric
                          characters. Please edit the field
                        </p>
                      </div>
                      <div className=" mt-6">
                        <h2 className="mb-2">Description</h2>
                        <textarea
                          rows={10}
                          {...register("discription", {
                            required: true,
                            minLength: 3,
                            maxLength: 35,
                            pattern: /@/i,
                          })}
                          value={productDetails.discription}
                          onChange={(e) => handleChange(e)}
                          placeholder="Write your description"
                          className="mt-1 p-4 ring-black outline-none border-black-500  w-full border rounded-md"
                        />
                        <p className="text-sm font-medium text-gray-700">
                          Include condition, features and reason for Rent out
                        </p>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm mt-5 mb-2 font-extrabold text-gray-700">
                          Category
                        </label>
                        <select
                          id="country"
                          {...register("category", {
                            required: true,
                            minLength: 3,
                            maxLength: 35,
                            pattern: /@/i,
                          })}
                          value={productDetails.category}
                          onChange={(e) => handleChange(e)}
                          placeholder="Category name"
                          className="mt-1 p-4 bg-white outline-none ring-black border-black-500  w-full border rounded-md"
                        >
                          <option>Gemstones</option>
                          <option>Jewwllery</option>
                          <option>Antiques</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-8 border border-1 border-gray-700" />
                <div className="p-[80px]">
                  <div>
                    <h2 className="font-extrabold">Select a price</h2>
                    <label className="text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      id="price"
                      {...register("price", {
                        required: true,
                        pattern: /@/i,
                      })}
                      value={productDetails.price}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 p-4 outline-none  ring-black border-black-500  w-full border rounded-md"
                    />
                    <p className="text-sm mt-2 font-medium text-gray-700">
                      Title should contain at least 5 alphanumeric characters.
                      Please edit the field
                    </p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-extrabold mt-8 text-gray-900 dark:text-gray-300">
                      Upload your photos
                    </label>
                    <div className="flex justify-center items-center w-full mb-4">
                      <label className="flex flex-col justify-center items-center w-full h-52 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          onChange={(e) => handleProductImage(e)}
                          multiple
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-extrabold mb-3">Your Location</h2>
                    <label className="text-sm   font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      {...register("location", {
                        required: true,
                        pattern: /@/i,
                      })}
                      value={productDetails.location}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your location"
                      className="mt-1 p-4 outline-none ring-black border-black-500 mb-4 w-full border rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm mt-5 mb-2 font-extrabold text-gray-700">
                      Available or Sold
                    </label>
                    <select
                      id="status"
                      {...register("status", {
                        required: true,
                        pattern: /@/i,
                      })}
                      value={productDetails.status}
                      onChange={(e) => handleChange(e)}
                      className="mt-1 p-4 bg-white outline-none ring-black border-black-500  w-full border rounded-md"
                    >
                      <option>Available</option>
                      <option>Sold</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm   font-medium text-gray-700">
                      Mobile phone number
                    </label>
                    <input
                      type="number"
                      id="pnumber"
                      {...register("phoneNumber", {
                        required: true,
                        pattern: /@/i,
                      })}
                      value={productDetails.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      placeholder="+92 | Mobile number"
                      className="mt-1 p-4 outline-none ring-black border-black-500 mb-4  w-full border rounded-md"
                    />
                    <p className="text-sm mb-8 font-medium text-gray-700">
                      Show my phone number in ads
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 text-center mb-[170px]">
                  <button
                    type="submit"
                    className="py-4 px-12 text-white font-bold bg-[#0047FF] "
                    onClick={() => HandleSubmitProduct()}
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default From;
