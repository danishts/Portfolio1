// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const linkStyle = ({ isActive }) =>
//     isActive
//       ? "bg-white text-black px-4 py-2 rounded-full transition"
//       : "text-white hover:bg-gray-800 px-4 py-2 rounded-full transition";

//   return (
//     <nav className="w-full bg-black text-white shadow-md px-6 py-4 flex items-center justify-between relative text-[17px] font-montserrat sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold">MyPortfolio</div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-4 items-center font-medium">
//         <li>

//         </li>
//         <li>
//           <NavLink to="/about" className={linkStyle}>
//             About me
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/skills" className={linkStyle}>
//             Skills
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/portfolio" className={linkStyle}>
//             Portfolio
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/contact" className={linkStyle}>
//             Contact me
//           </NavLink>
//         </li>
//       </ul>

//       {/* Hamburger Button */}
//       <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
//         ☰
//       </button>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="absolute top-16 left-0 w-full bg-black shadow-md md:hidden">
//           <ul className="flex flex-col p-4 gap-3 font-medium">
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 About me
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/skills"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Skills
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/portfolio"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Portfolio
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/contact"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Contact me
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const linkStyle = ({ isActive }) =>
//     isActive
//       ? "bg-white text-black px-4 py-2 rounded-full transition"
//       : "text-white hover:bg-gray-800 px-4 py-2 rounded-full transition";

//   return (
//     <nav className="w-full bg-black text-white shadow-md px-6 py-4 flex items-center justify-between relative text-[17px] font-montserrat sticky top-0 z-50">
//       {/* Logo */}
//       <div className="text-2xl font-bold">MyPortfolio</div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-4 items-center font-medium">
//         <li>
//           <NavLink to="/" className={linkStyle}>
//             Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/about" className={linkStyle}>
//             About me
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/skills" className={linkStyle}>
//             Skills
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/portfolio" className={linkStyle}>
//             Portfolio
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/contact" className={linkStyle}>
//             Contact me
//           </NavLink>
//         </li>
//       </ul>

//       {/* Hamburger / Cross Button */}
//       <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
//         {open ? "✕" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="absolute top-16 text-center left-0 w-full bg-black shadow-md md:hidden">
//           <ul className="flex flex-col p-4 gap-3 font-medium">
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/about"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 About me
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/skills"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Skills
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/portfolio"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Portfolio
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/contact"
//                 onClick={() => setOpen(false)}
//                 className={linkStyle}
//               >
//                 Contact me
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
 import { useState } from "react";
import { NavLink } from "react-router-dom";
import Vect from "../assets/Vect.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-white text-black px-4 py-2 rounded-full transition"
      : "text-white hover:bg-gray-800 px-4 py-2 rounded-full transition";

  return (
    <nav className="w-full bg-black text-white shadow-md px-6 py-4 flex items-center justify-between relative text-[17px] font-montserrat sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center ">
        <img src={Vect} alt="Logo" className="h-10 md:h-11 md:hidden w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 items-center font-medium">
        <li>
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={linkStyle}>
            About me
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" className={linkStyle}>
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className={linkStyle}>
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={linkStyle}>
            Contact me
          </NavLink>
        </li>
      </ul>

      {/* Hamburger / Cross Button */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black shadow-md md:hidden">
          <ul className="flex flex-col p-4 gap-3 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                About me
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={linkStyle}
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;