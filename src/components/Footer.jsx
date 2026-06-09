// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat">
//       {/* BACK TO TOP */}
//       <button className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center">
//         BACK TO TOP
//       </button>

//       {/* SOCIAL ICONS */}
//       <div className="flex gap-6 mt-6 text-white    text-xl">
//         <FaFacebookF />
//         <FaTwitter />
//         <FaLinkedinIn />
//         <FaInstagram />
//       </div>

//       {/* COPYRIGHT */}
//       <p className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center">
//         @2020 Tomasz Gajda All Rights Reserved.
//       </p>
//     </div>
//   );
// }

// export default Footer;

// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat">
//       {/* BACK TO TOP */}
//       <button className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center">
//         BACK TO TOP
//       </button>

//       {/* SOCIAL ICONS */}
//       <div className="flex gap-6 mt-6 text-white text-xl">
//         <FaFacebookF />
//         <FaTwitter />

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/danish-saddique-5a3a12232/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 hover:text-blue-400"
//         >
//           <FaLinkedinIn />

//         </a>

//         <FaInstagram />
//       </div>

//       {/* COPYRIGHT */}
//       <p className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center">
//         ©2026 Muhammad Danish. All Rights Reserved.
//       </p>
//     </div>
//   );
// }

// export default Footer;import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const facebookLink = "https://www.facebook.com/danish.saddique.18";
  const linkedinLink =
    "https://www.linkedin.com/in/danish-saddique-5a3a12232/";

  return (
    <div className="w-full bg-[#1A1A1A] flex flex-col items-center py-10 font-montserrat">
      {/* BACK TO TOP */}
      <button className="font-bold text-[15px] text-white tracking-[0.1854em] leading-[100%] text-center">
        BACK TO TOP
      </button>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 mt-6 text-white text-xl">
        {/* Facebook */}
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
        </a>

        {/* Twitter (LinkedIn link) */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
        </a>

        {/* Instagram (LinkedIn link) */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-blue-400 cursor-pointer" />
        </a>
      </div>

    

      {/* COPYRIGHT */}
      <p className="mt-6 font-bold text-[18px] text-white leading-[100%] font-nunito text-center">
        ©2026 Muhammad Danish. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;