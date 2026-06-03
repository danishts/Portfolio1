// // import React from "react";

// // function About() {
// //   return (
// //     <div className="flex min-h-screen overflow-hidden bg-black">
// //       {/* Left Slanted Section */}
// //       <div
// //         className="w-[55%] bg-[#d9d9d9] flex items-center justify-center"
// //         style={{
// //           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
// //         }}
// //       >
// //         <h1 className="text-5xl font-bold raleway">About Me</h1>
// //       </div>

// //       {/* Right Section */}
// //       <div className="w-[45%] bg-black flex items-center justify-center p-10">
// //         <p className="text-white text-lg max-w-md">
// //           Yahan aap apna introduction likhein. Aap ka experience, skills aur
// //           background explain karein.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // // export default About;
// // import React from "react";

// // import ima from "../assets/ima.png";
// // import vect from "../assets/Vect.png"; // 👈 add this
// // import { Outlet } from "react-router-dom";

// // function About() {
// //   return (
// //     <div className="flex min-h-screen overflow-hidden bg-black">
// //       {/* Left Slanted Section */}
// //       {/* Left Slanted Section */}
// //       <div
// //         className="w-[55%] bg-[#d9d9d9] flex items-center justify-center relative"
// //         style={{
// //           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
// //         }}
// //       >
// //         {/* Top Left Logo */}
// //         <img
// //           src={vect}
// //           alt="Logo"
// //           className="absolute top-8 left-36 w-11 h-auto"
// //         />

// //         {/* Text Block */}
// //         <div className="flex flex-col items-start">
// //           <p className="text-[40px] raleway font-normal text-black">Hi, I am</p>

// //           <h1 className="text-[60px] raleway font-bold text-black leading-none">
// //             Tomasz Gajda
// //           </h1>

// //           <p className="text-[25px] raleway text-[#909090]">
// //             Front-end Developer / UI Designer
// //                   </p>

// //               </div>

// //       </div>

// //       {/* Right Section */}
// //       <div className="w-[45%] bg-black flex flex-col justify-between p-10">
// //         <div>
// //           <Outlet />
// //         </div>

// //         <div className="flex justify-center">
// //           <img
// //             src={ima}
// //             alt="Profile"
// //             className="max-w-full h-auto object-contain"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default About;

// // //ya ha
// import React from "react";

// import ima from "../assets/ima.png";
// import vect from "../assets/Vect.png";
// import { Outlet } from "react-router-dom";

// function About() {
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden bg-black">
//       {/* RIGHT SECTION (IMAGE FIRST ON MOBILE) */}
//       <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black flex flex-col justify-center items-center p-6 lg:p-10">
//         <img
//           src={ima}
//           alt="Profile"
//           className="max-w-[220px] lg:max-w-full h-auto object-contain"
//         />

//         <div className="mt-6">
//           <Outlet />
//         </div>
//       </div>

//       {/* LEFT SECTION (TEXT SECOND ON MOBILE) */}
//       <div
//         className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex items-center justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         {/* Logo */}
//         <img
//           src={vect}
//           alt="Logo"
//           className="absolute top-6 left-6 lg:top-8 lg:left-36 w-10 lg:w-11 h-auto"
//         />

//         {/* Text Block */}
//         <div className="flex flex-col items-start px-6 lg:px-0">
//           <p className="text-[28px] lg:text-[40px] raleway font-normal text-black">
//             Hi, I am
//           </p>

//           <h1 className="text-[38px] lg:text-[60px] raleway font-bold text-black leading-tight">
//             Tomasz Gajda
//           </h1>

//           <p className="text-[18px] lg:text-[25px] raleway text-[#909090]">
//             Front-end Developer / UI Designer
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8">
//             <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center">
//               <a href="#">
//                 <svg
//                   className="w-4 h-4 lg:w-5 lg:h-5 text-black"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.942.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                 </svg>
//               </a>
//             </div>

//             <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center">
//               <a href="#">
//                 <svg
//                   className="w-4 h-4 lg:w-5 lg:h-5 text-black"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.765c1.396-2.586 7-2.777 7 2.476v5.759z" />
//                 </svg>
//               </a>
//             </div>

//             <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center">
//               <a href="#">
//                 <svg
//                   className="w-4 h-4 lg:w-5 lg:h-5 text-black"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 12.713l-11.985-7.713v15h23.97v-15l-11.985 7.713zm11.985-9.713h-23.97l11.985 7.713 11.985-7.713z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";
import separatorBlack from "../assets/separatorBlack.png";
import Card from "../components/Card";

function About() {
  return (
    <div className="flex flex-col items-center bg-[#E6E6E6] min-h-screen px-4 py-10">
      {/* Heading */}
      <h1 className="w-full max-w-[404px] border-[6px] md:border-[8px] border-black flex justify-center items-center font-bold text-[22px] md:text-[30px] tracking-[0.25em] md:tracking-[0.35em] py-4 text-center">
        ABOUT ME
      </h1>

      {/* Text */}
      <p className="text-[14px] md:text-[15px] mt-10 text-[#050505] leading-[1.6] text-center max-w-2xl">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem
      </p>

      <p className="text-[14px] md:text-[15px] text-[#050505] leading-[1.6] text-center mt-2 max-w-2xl">
        sed viverra. In vel urna quis libero viverra facilisis ut ac est.
      </p>

      {/* Explore */}
      <h2 className="mt-6 px-4 py-2 text-[14px] md:text-[15px] font-semibold border-l-4 border-r-4 border-black">
        EXPLORE
      </h2>

      {/* Separator */}
      <img
        src={separatorBlack}
        alt="separator"
        className="mt-16 md:mt-24 w-[120px] md:w-[170px]"
      />

      {/* Cards Layout */}
      <div className="mt-10 w-full flex flex-col items-center gap-10">
        {/* Top row - 2 cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
          <Card />
          <Card className='left-'/>
        </div>

        {/* Bottom - 1 centered card */}
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
      <img
        src={separatorBlack}
        alt="separator"
        className="mt-16 md:mt-24 w-[120px] md:w-[170px]"
      />
    </div>
  );
}

export default About;