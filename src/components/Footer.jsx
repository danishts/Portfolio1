import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat">
      {/* BACK TO TOP */}
      <button className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center">
        BACK TO TOP
      </button>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 mt-6 text-white    text-xl">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </div>

      {/* COPYRIGHT */}
      <p className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center">
        @2020 Tomasz Gajda All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
