import React from "react";
import signinbg from "../../assets/signinbg.jpg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { lsVariables } from "../../config/localStorage";

export const SignInPage = () => {
  function _decodegooglecredentials(cred) {
    let userinfo = jwtDecode(cred.credential);
    localStorage.setItem(lsVariables.user, JSON.stringify(userinfo));
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" w-[80%]  border border-gray-300 p-5 rounded-2xl">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-3xl font-bold ">Sign In to Online Seller </p>
            <p className="text-sm text-gray-400 my-3">
              My online seller web app is a dynamic and user-friendly platform
              that empowers sellers to reach a global audience with ease. With
              its sleek and intuitive interface, it offers a seamless experience
              for both sellers and customers. Our app provides sellers with
              robust tools for product listings, inventory management, and order
              processing. Real-time analytics and reporting features enable
              sellers to make informed decisions, optimizing their sales
              strategy. Mobile responsiveness ensures that sellers can manage
              their business on the go. Our online seller web app is committed
              to fostering growth and success for businesses of all sizes,
              helping them thrive in the digital marketplace.
            </p>
            <div className="flex justify-center  ">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  _decodegooglecredentials(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
          <div>
            <img className="rounded-sm" src={signinbg} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};
