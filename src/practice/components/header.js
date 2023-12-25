import React from "react";
import IV from "../../assets/IV.png";
import { CiSearch } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import mainbg from "../../assets/background.png";
import Main from "./main";

export default function Header() {
  return (
    <>
      <div className="relative ">
        <div className="absolute flex z-10 ">
          <div>
            <img
              className="w-[78px] h-[60px] ml-[180px] mt-[37px] "
              src={IV}
              alt="..."
            />
          </div>
          <div>
            <div className="flex justify-between text-gray-500 text-base font-medium w-[448px] h-[24px] ml-[308px] mt-[36px] ">
              <p>Organic ingredients</p>
              <p>Best results</p>
              <p>Approved </p>
            </div>
            <div className="w-[540px] h-[24px] ml-[308px] mt-[40px] flex justify-between  text-gray-500 text-base font-medium">
              <p>Book an appointment with us right now 1-800-IV therapy </p>
              <p className="text-zinc-900 text-base font-medium">
                {" "}
                (123-456-7890)
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className=" flex w-[300px] h-[50px] ml-[80px]">
              <div className="flex justify-center items-center h-[50px] w-[130px] hover:cursor-pointer">
                <CiSearch className="h-[30px] w-[30px]" />
                <p className="  text-custom_grey-0 text-xl ml-2">Search</p>
              </div>
              <div className="flex justify-center items-center h-[50px] w-[130px] hover:cursor-pointer">
                <CiLock className="h-[30px] w-[30px] text-thin " />
                <p className="  text-custom_grey-0 text-xl ml-2">Log in</p>
              </div>
            </div>
            <div className="ml-2 border border-black rounded-[50px] px-10 py-5 hover:text-white hover:border-transparent hover:bg-mehndi-0  hover:cursor-pointer ">
              <p className="font-thin">GET IN TOUCH</p>
            </div>
          </div>
        </div>
        <div className="absolute z-9">
          <img src={mainbg} alt="..." />
        </div>
        <Main/>
      </div>
    </>
  );
}
