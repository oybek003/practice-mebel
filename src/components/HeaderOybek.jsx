import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const HeaderOybek = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Верхняя часть */}
      <nav className="flex items-center justify-between px-6 py-4">
        <IoMdSearch className="text-2xl cursor-pointer" />

        <h1 className="text-[24px] font-bold">Avion</h1>

        {/* Desktop icons */}
        <div className="hidden md:flex items-center gap-6 text-2xl">
          <Link to="/card3">
            <MdOutlineLocalGroceryStore className="cursor-pointer" />
          </Link>

          <CgProfile className="cursor-pointer" />
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <hr className="border-gray-200" />

      {/* Desktop меню */}
      <ul className="hidden md:flex items-center justify-center gap-10 mt-6 mb-10">
        <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
        <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
        <li className="hover:text-purple-950 cursor-pointer">Tables</li>
        <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
        <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
        <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
        <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
      </ul>

      {/* Mobile меню */}
      {open && (
        <ul className="flex flex-col items-center gap-6 mt-4 mb-6 md:hidden">
          <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
          <li className="hover:text-purple-95 0 cursor-pointer">Ceramics</li>
          <li className="hover:text-purple-950 cursor-pointer">Tables</li>
          <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
          <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
          <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
          <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
        </ul>
      )}
    </header>
  );
};

export default HeaderOybek;
