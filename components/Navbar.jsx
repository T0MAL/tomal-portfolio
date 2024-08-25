"use client";

import { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
    setIsOpen(!isOpen);
  };

  return (
    <header className=" sticky top-0 bg-primary-color w-screen border-b border-black">
      <nav className="flex justify-between items-center w-full px-28 py-4">
        <div className="font-bold">TOMAL</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <Link href="#home" scroll={false} onClick={()=>scrollToSection("home")}>
            Home
          </Link>
          <Link href="#about" scroll={false} onClick={()=>scrollToSection("about")}>
            About
          </Link>
          <Link href="#skill" scroll={false} onClick={()=>scrollToSection("skill")}>
            Skill
          </Link>
          <Link href="#project" scroll={false} onClick={()=>scrollToSection("project")}>
            Project
          </Link>
          <Link href="#contact" scroll={false} onClick={()=>scrollToSection("contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="focus:outline-none">
            {isOpen ? <FiX /> : <FiAlignJustify />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-500 border-t border-black">
          <div className="flex flex-col items-start gap-4 px-10 py-4">
          <Link href="#home" scroll={false} onClick={()=>scrollToSection("home")}>
            Home
          </Link>
          <Link href="#about" scroll={false} onClick={()=>scrollToSection("about")}>
            About
          </Link>
          <Link href="#skill" scroll={false} onClick={()=>scrollToSection("skill")}>
            Skill
          </Link>
          <Link href="#project" scroll={false} onClick={()=>scrollToSection("project")}>
            Project
          </Link>
          <Link href="#contact" scroll={false} onClick={()=>scrollToSection("contact")}>
            Contact
          </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;