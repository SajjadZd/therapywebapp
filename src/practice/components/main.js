import React from "react";
import mainbackg from "../../assets/mainbg.png";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Main() {
  return (
    <>
      <div className="h-[660px] w-[80%] ml-[10%] absolute z-11 mt-[150px]">
        <div className="flex justify-center items-center w-[100%] h-[80px] bg-mehndi-0">
          <div className="w-[60%] h-[40px]">
            <ul className="flex text-white justify-between mt-2 ">
              <li className="hover:cursor-pointer">HOME</li>
              <li className="hover:cursor-pointer">ABOUT US</li>
              <li className="hover:cursor-pointer">SERVICES</li>
              <li className="hover:cursor-pointer">CONSULTANT</li>
              <li className="hover:cursor-pointer">REVIEWS</li>
            </ul>
          </div>
        </div>
        <div className="relative ">
          <div className="absolute z-0">
            <img className="w-[100%] h-[100%] " src={mainbackg} alt="..." />
          </div>
          <div className="w-[100%] h-[570px] absolute z-1 flex items-end">
            <div className=" w-[100%] h-[70px] flex justify-between ">
              <div className="w-[80px] h-[80px] bg-white   rounded-tr-full hover:text-white hover:bg-mehndi-0 hover:cursor-pointer ">
                <IoIosArrowRoundBack className="w-[60px] h-[60px] mt-4" />
              </div>
              <div className="w-[80px] h-[80px] bg-white rounded-tl-full hover:text-white hover:bg-mehndi-0 hover:cursor-pointer">
                <IoIosArrowRoundBack className="w-[60px] h-[60px] mt-4 ml-4 rotate-180" />
              </div>
            </div>
          </div>
          <div className="absolute z-2 w-[450px] h-[350px] mt-[100px] ml-[150px] ">
            <div className="font-ppWoodland font-thin text-[40px] uppercase p-0 m-0">
              <p>Revitalize with </p>
              <p>Accelerate Mobile </p>
              <p>IV Therapy</p>
            </div>
            <p className="w-[390px] mt-4 font-sans text-lg">
              Experience personalized hydration and wellness, delivered right to
              your doorstep
            </p>
            <div className="border border-black w-[350px] p-5 py-3 rounded-[50px] flex items-center justify-center mt-10 hover:border-transparent  hover:bg-mehndi-0 hover:text-white hover:cursor-pointer">
              <p>BOOK YOUR IV SESSION NOW</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
