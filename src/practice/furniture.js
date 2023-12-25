import React from "react";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

export default function Furniture() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-psd/retro-living-room-interior_53876-109286.jpg?w=740&t=st=1703071799~exp=1703072399~hmac=bf07f5d565d97763559b97b6ae85ff3765fb18468ecbc820bafd22826923c4b5)] bg-cover w-screen h-screen">
        <div className="flex py-5 ">
          <div className=" w-[500px] h-20 ">
            <p className=" flex items-center justify-center  text-[30px] mt-3 text-white ">
              Furni.
            </p>
          </div>
          <div className=" w-[650px] h-20">
            <ul className="flex items-center mt-6 cursor-pointer text-gray-400  ">
              <li className=" border-2 border-transparent  hover:border-b-orange-500 scale-100 hover:scale-110  hover:text-white ml-[70px] ">
                Home
              </li>
              <li className=" border-2 border-transparent  hover:border-b-orange-500 scale-100 hover:scale-110 hover:text-white  ml-[70px] ">
                About us
              </li>
              <li className=" border-2 border-transparent  hover:border-b-orange-500 scale-100 hover:scale-110  hover:text-white ml-[70px] ">
                Services
              </li>
              <li className=" border-2 border-transparent  hover:border-b-orange-500 scale-100 hover:scale-110  hover:text-white ml-[70px] ">
                Blog
              </li>
              <li className=" border-2 border-transparent  hover:border-b-orange-500 scale-100 hover:scale-110  hover:text-white ml-[70px] ">
                Contact us
              </li>
            </ul>
          </div>
          <div className=" w-[210px] h-20  flex justify-center items-center">
            <div className="mr-4 cursor-pointer  hover:border-b-orange-500 scale-100 hover:scale-110  ">
              <FaRegUser className="text-white w-[20px] h-[20px] " />
            </div>
            <div className="cursor-pointer  hover:border-b-orange-500 scale-100 hover:scale-110 ">
              <BsCart className="text-white w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[400px] ml-[200px] mt-[35px]">
          <p className="text-[50px] font-bold text-white">
            Modern Interior Design Studio
          </p>
          <p className="text-sm text-gray-300 font-thin mt-5">
            {" "}
            A house without furniture is like a barren canvas waiting for
            realising its own beauty. A home sans classy furniture affords no
            comfort to its owners. Besides, it looks dull and cheerless.{" "}
          </p>
          <div className="flex ml-3 mt-7 text-white ">
          <p className=" border  rounded-[50px] py-2 px-7  hover:bg-orange-500 hover:text-black hover:border-transparent">Shop now</p>
          <p className="border  rounded-[50px] ml-7 py-2 px-7  hover:bg-orange-500 hover:text-black hover:border-transparent">Explore</p>
          </div>
        </div>
      </div>
    </>
  );
}
