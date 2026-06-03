import { Routes, Route } from "react-router-dom";


import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";


export default function AppRoutes() {
  return (
    <Routes>
      
      {/* Layout wrap */}
      <Route element={<MainLayout />}>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <  Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}