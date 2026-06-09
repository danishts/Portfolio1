// import React from "react";

// import ima from "../assets/ima.png";
// import vect from "../assets/Vect.png";
// import { Outlet } from "react-router-dom";

// function Home() {
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden bg-black">
//       {/* RIGHT SECTION (IMAGE FIRST ON MOBILE) */}
//       <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black flex flex-col justify-end items-center p-6 lg:p-10">
//         <img
//           src={ima}
//           alt="Profile"
//           className="max-w-[220px] lg:max-w-full h-auto object-contain"
//         />
//       </div>

//       {/* LEFT HERO SECTION */}
//       <div
//         className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex items-center justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//         }}
//       >
//         {/* LOGO */}
//         <img
//           src={vect}
//           alt="Logo"
//           className="absolute top-6 left-6 lg:top-8 lg:left-36 w-10 lg:w-11 h-auto"
//         />

//         {/* HERO TEXT */}
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

//           {/* SOCIAL ICONS */}
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

//       <div className="h-[313px] bg-[#1D1D1D]"> homq</div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import itb from "../assets/ITB.png";

// import ima from "../assets/ima.png";
// import vect from "../assets/Vect.png";
// import { Outlet } from "react-router-dom";

// function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-black overflow-hidden">
//       {/* TOP SECTION */}
//       <div className="flex flex-col lg:flex-row flex-1">
//         <img
//           src={vect}
//           alt="Logo"
//           className="absolute top-6  left-6 lg:top-8 lg:left-36 w-10 lg:w-11 h-auto"
//         />{" "}
//         {/* LEFT SECTION */}
//         <div
//           className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex items-center justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
//           style={{
//             clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//           }}
//         >
//           {/* LOGO */}

//           {/* TEXT */}
//           <div className="flex flex-col items-start px-6 lg:px-0">
//             <p className="text-[28px] lg:text-[40px] raleway text-black">
//               Hi, I am
//             </p>

//             <h1 className="text-[38px] lg:text-[60px] raleway font-bold text-black leading-tight">
//               Tomasz Gajda
//             </h1>

//             <p className="text-[18px] lg:text-[25px] raleway text-[#909090]">
//               Front-end Developer / UI Designer
//             </p>

//             {/* ICONS */}
//             <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8">
//               <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center"></div>
//               <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center"></div>
//               <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#C4C4C4] rounded flex items-center justify-center"></div>
//             </div>
//           </div>
//         </div>
//         {/* RIGHT SECTION */}
//         <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black flex justify-end items-center p-6 lg:p-10">
//           <img
//             src={ima}
//             alt="Profile"
//             className="max-w-[220px] lg:max-w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="bg-[#1D1D1D] text-white px-6 py-10 md:p-16 h-auto">
//         <h1 className="text-[30px] montserrat md:text-[32px] font-montserrat">
//           IT BERRIES
//         </h1>

//         <p className=" text-[15px] open-sans md:text-base leading-relaxed">
//           Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
//           varius finibus. Sed ornare sit amet
//         </p>

//         <p className=" text-[15px] open-sans md:text-base leading-relaxed">
//           lorem sed viverra. In vel urna quis libero viverra facilisis ut ac
//           est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue,
//           in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper
//           a, dictum sit amet
//         </p>
//         <p className=" text-[15px] open-sans md:text-base leading-relaxed">
//           elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque
//           laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae
//           elementum tempor, accumsan nec eros.
//         </p>

//         <h2 className="inline-block mt-6 px-4 py-2 Montserrat text-[15px] md:text-[15px] border-l-4 border-r-4 border-white">
//           READ MORE
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default Home;

//dad

import React from "react";
import itb from "../assets/ITB.png";

import ima from "../assets/ima.png";
import vect from "../assets/Vect.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import HeroCard from "../components/HeroCard";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* TOP HERO SECTION */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* LOGO */}
        <img
          src={vect}
          alt="Logo"
          className="absolute top-6 left-6 lg:top-8 lg:left-36 w-10 lg:w-11 h-auto"
        />

        {/* LEFT SECTION */}
        <div
          className="order-2 lg:order-1 w-full lg:w-[55%] bg-[#d9d9d9] flex items-center justify-start pl-6 lg:pl-24 relative py-10 lg:py-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        >
          <div className="flex flex-col items-start px-6 lg:px-0">
            <p className="text-[28px] lg:text-[40px] raleway text-black">
              Hi, I am
            </p>

            <h1 className="text-[38px] lg:text-[60px] raleway font-bold text-black leading-tight">
              Tomasz Gajda
            </h1>

            <p className="text-[18px] lg:text-[25px] raleway text-[#909090]">
              Front-end Developer / UI Designer
            </p>

            {/* ICONS */}
            {/* <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8">
              <div className="w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-[#C4C4C4] rounded">
                {" "}
                <FaGithub className="text-2xl cursor-pointer hover:scale-110 transition" />
              </div>
              <div className="w-9 h-9 lg:w-10 flex justify-center items-center lg:h-10 bg-[#C4C4C4] rounded">
                {" "}
                <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 transition" />
              </div>
              <div className="w-9 h-9 lg:w-10 flex justify-center items-center lg:h-10 bg-[#C4C4C4] rounded">
                {" "}
                <FaEnvelope className="text-2xl cursor-pointer hover:scale-110 transition" />
              </div>
            </div> */}

            <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8">
              {/* GitHub */}
              <a
                href="https://github.com/danishts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-[#C4C4C4] rounded">
                  <FaGithub className="text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/danish-saddique-5a3a12232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 lg:w-10 flex justify-center items-center lg:h-10 bg-[#C4C4C4] rounded">
                  <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
              </a>

             
              {/* Email */}
              <a href="mailto:danishsaddique519@gmail.com">
                <div className="w-9 h-9 lg:w-10 flex justify-center items-center lg:h-10 bg-[#C4C4C4] rounded">
                  <FaEnvelope className="text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        {/* <div className="order-1 lg:order-2  w-full lg:w-[45%] bg-black flex justify-end items-center p-6 lg:p-10">
          <img
            src={ima}
            alt="Profile"
            className="max-w-[220px] lg:max-w-full mt-11 h-auto object-contain"
          />
        </div> */}
        <div className="order-1 lg:order-2 w-full lg:w-[45%] bg-black flex justify-end items-center p-6 lg:p-10 relative">
          {/* IMAGE */}
          <img
            src={ima}
            alt="Profile"
            className="max-w-[220px] lg:max-w-full mt-11 h-auto object-contain"
          />

          {/* 🔥 ROUTE MENU OVER IMAGE */}
          <div className="absolute top-10 left-11 flex flex-row gap-6 text-white font-semibold text-[14px] tracking-widest">
            <a href="#about" className="hover:text-gray-300">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-gray-300">
              SKILLS
            </a>
            <a href="#portfolio" className="hover:text-gray-300">
              PORTFOLIO
            </a>
            <a href="#contact" className="hover:text-gray-300">
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      {/* <div className="bg-[#1D1D1D] text-white px-6 py-10 md:p-16 h-auto">
        <h1 className="text-[30px] md:text-[32px] font-montserrat">
          IT BERRIES
        </h1>

        <p className="text-[15px] open-sans leading-relaxed">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus.
        </p>

        <p className="text-[15px] open-sans leading-relaxed">
          lorem sed viverra. In vel urna quis libero viverra facilisis ut ac
          est.
        </p>

        <p className="text-[15px] open-sans leading-relaxed">
          elit. Nunc egestas nisi eget enim gravida facilisis.
        </p>

        <h2 className="inline-block mt-6 px-4 py-2 text-[15px] border-l-4 border-r-4 border-white">
          READ MORE
        </h2>
      </div> */}
      <HeroCard />
      {/* 🔥 SECTIONS BELOW HERO */}
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;