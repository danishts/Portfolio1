import React from "react";
import iq from "../assets/iq.png";

function Card() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Image + Overlay Text */}
      <div className="relative  flexi right-48 ">
        <img src={iq} alt="IQ" className="object-cover" />

        {/* Overlay Text */}
        <h1 className="absolute top-4 left-1/2  text-black text-[22px] font-bold leading-[100%] tracking-[0.185em] text-center whitespace-nowrap">
          MAINTENANCE
        </h1>
      </div>

      {/* Paragraph */}
      <div className="mt-6 flex flex-col items-center">
        <p className="text-[14px] font-light leading-[100%] text-center">
          I can design the site based on your needs and suggestions. I can
        </p>

        <span className="text-[14px] font-light leading-[100%] text-center mt-1">
          also design the site from scratch and consult you during the job.
        </span>
      </div>
    </div>
  );
}

export default Card;
