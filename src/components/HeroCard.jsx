import React from "react";
import itb from "../assets/ITB.png";

function HeroCard() {
  return (
    <div className="w-full bg-[#1D1D1D] flex items-center relative overflow-hidden px-8 md:px-16 py-12">
      {/* TEXT SECTION */}
      <div className="w-full md:w-2/3 text-white z-10">
        <h1 className="text-[30px] md:text-[34px] font-montserrat tracking-[0.2em]">
          IT BERRIES
        </h1>

        <p className="text-[13px] md:text-[14px] mt-5 leading-relaxed text-gray-300 max-w-[700px]">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. lorem sed viverra. In vel urna quis libero viverra
          facilisis ut ac est. elit. Nunc egestas nisi eget enim gravida
          facilisis.
        </p>

        <h2 className="inline-block mt-6 px-4 py-2 text-[14px] border-l-4 border-r-4 border-white tracking-[0.1em]">
          READ MORE
        </h2>
      </div>

      {/* RIGHT IMAGE (BIG FADED BACKGROUND STYLE) */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-end">
        <img
          src={itb}
          alt=""
          className="h-full object-cover opacity-20 md:opacity-30"
        />
      </div>
    </div>
  );
}

export default HeroCard;
