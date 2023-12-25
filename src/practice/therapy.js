import React from "react";
import mainbg from "../assets/background.png";
import FirstLine from "./components/firstline";
import Header from "./components/header";
import star from "../assets/star.png";

export default function Therapy() {
  return (
    <>
      <FirstLine />
      <Header />
      <div className="w-[100%] h-[950px]  bg-black mt-[500px] ">
        <div className="flex">
          <img src={star} alt="..." className=" mt-[380px] ml-[480px] " />
        </div>
        <div className="w-[50%] h-[360px] ml-[25%] mt-[75px]">
          <div className="flex justify-center text-custom_grey-0 text-sm">
            <p>WHO WE ARE</p>
          </div>
          <div className=" justify-center text-center mt-2 text-xl text-white">
            <p>
              At <b>Accelerate Mobile IV Therapy,</b> we understand that the
              world of IV hydration can be complex and overwhelming. That's why
              we're here - to simplify, guide, and provide. Founded by dedicated
              healthcare professionals, our mission is to offer not just IV
              therapy, but a tailored experience that caters to your unique
              needs. With us, you're not just getting an <b>IV drip;</b> you're
              getting a solution crafted especially for you by medical experts.
            </p>
            <div className=" mt-10 flex justify-center ">
              <p className="w-[200px] border-[3px] px-5 py-2 rounded-full hover:bg-white hover:cursor-pointer hover:text-black">
                READ MORE
              </p>
            </div>
          </div>
          <img src={star} alt="..." className="ml-[1000px]" />
        </div>
      </div>
      <div className="w-[screen] h-[700px]">
        <div className=" w-[80%] h-[400px] bg-red-600 ml-[10%] mt-[5%] flex justify-center items-center">
         <div className="w-[20%] h-[350px] bg-slate-400 mr-[5%]"></div> 
         <div className="w-[20%] h-[400px] bg-slate-400 mr-[5%]"></div> 
         <div className="w-[20%] h-[400px] bg-slate-400 mr-[5%]"></div> 
         <div className="w-[20%] h-[400px] bg-slate-400 mr-[5%]"></div> 
         
        </div>
      </div>
    </>
  );
}
