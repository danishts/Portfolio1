// import React from 'react'

// function Skills() {
//   return (
//     <div className='flex justify-center flex-col'>
//       <h1 className="w-full max-w-[404px] border-[6px] md:border-[8px] border-black flex justify-center items-center font-bold text-[22px] md:text-[30px] tracking-[0.25em] md:tracking-[0.35em] py-4 text-center">
//         SKILLS
//       </h1>

//     </div>
//   );
// }

// export default Skills

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiNodedotjs, SiMysql, SiMongodb, SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div className="min-h-screen bg-[#d9d9d9] flex flex-col items-center py-10 px-4 font-montserrat">
      {/* TITLE */}
      <h1 className="w-full max-w-[404px] border-[6px] md:border-[8px] border-black flex justify-center items-center font-bold text-[22px] md:text-[30px] tracking-[0.25em] md:tracking-[0.35em] py-4 text-center">
        SKILLS
      </h1>
      {/* <div className="w-full bg-amber-600">
    
      <h2 className="font-bold mt-8 bg-amber-300 text-[22px]  md:text-[30px] tracking-[0.18em] ">
        USING NOW:
      </h2>
      </div> */}
      <div className="w-full">
        <h2 className="font-bold mt-8 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          USING NOW:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mt-6 mb-10">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            HTML5
          </p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            CSS3
          </p>
        </div>

        {/* SASS */}
        <div className="flex flex-col items-center">
          <FaSass className="text-pink-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            SASS
          </p>
        </div>

        {/* JS */}
        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-400 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            JAVASCRIPT
          </p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <FaReact className="text-cyan-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            REACT
          </p>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-purple-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            BOOTSTRAP
          </p>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-orange-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            GIT
          </p>
        </div>

        {/* Figma */}
        <div className="flex flex-col items-center">
          <FaFigma className="text-pink-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            FIGMA
          </p>
        </div>
      </div>

      {/* LEARNING */}
      {/* <h2 className="font-bold text-[22px] md:text-[30px] tracking-[0.18em] text-center">
        LEARNING:
      </h2> */}
      <div className="w-full">
        <h2 className="font-bold mt-8 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          LEARNING:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mt-6 mb-10">
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-green-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            NODEJS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMysql className="text-blue-700 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            MYSQL
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            MONGODB
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            TYPESCRIPT
          </p>
        </div>
      </div>

      {/* OTHER SKILLS */}
      {/* <h2 className="font-bold text-[22px] text-left md:text-[30px] tracking-[0.18em] text-center">
        OTHER SKILLS:
      </h2> */}
      <div className="w-full">
        <h2 className="font-bold mt-8 text-[22px] md:text-[30px] tracking-[0.18em] text-center lg:pl-[470px] lg:text-left">
          OTHER SKILLS:
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center mt-6">
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-green-600 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            NODEJS
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMysql className="text-blue-700 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            MYSQL
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            MONGODB
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500 w-14 h-14 md:w-20 md:h-20" />
          <p className="text-[14px] md:text-[24px] mt-2 tracking-[0.135em]">
            TYPESCRIPT
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;