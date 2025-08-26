import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Aboutimg1 from "../assets/Aboutimg1.png";
import Aboutimg2 from "../assets/Aboutimg2.png";
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaLinkedin, FaSkype } from "react-icons/fa";
import footer from '../assets/footerAbout.jpg'
const HeaderOybek = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <header className="w-full">
        {/* Верхняя часть */}
        <nav className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-[24px] font-bold">
            Avion
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 text-2xl">
            <ul className="flex items-center justify-center gap-[32px] text-[18px]">
              <li className="hover:text-amber-900">About us</li>
              <li className="hover:text-amber-900">Contact</li>
              <li className="hover:text-amber-900">Blog</li>
            </ul>

            <IoMdSearch className="text-2xl cursor-pointer" />
            <Link to="/card3">
                        <MdOutlineLocalGroceryStore className="cursor-pointer" />

            </Link>
            <CgProfile className="cursor-pointer" />
          </div>

          {/* Mobile burger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        <hr className="border-gray-200" />

        {/* Desktop меню */}
        <ul className="hidden md:flex items-center justify-center gap-10 mt-6 mb-10 bg-[#F9F9F9] h-[64px]">
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
          <ul className="flex flex-col items-center gap-4 py-6 md:hidden bg-[#F9F9F9]">
            <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
            <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
            <li className="hover:text-purple-950 cursor-pointer">Tables</li>
            <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
            <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
            <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
            <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
          </ul>
        )}

        <h1 className="text-center text-[24px] sm:text-[36px] text-[#2A254B] px-4 leading-snug">
          A brand built on the love of craftmanship, <br className="hidden sm:block" />
          quality and outstanding customer service
        </h1>
      </header>

      {/* Контент секции */}
      <section>
        <div className="max-w-[1440px] w-full mx-auto px-4 space-y-20 mt-[100px] sm:mt-[165px]">
          {/* Первый блок */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-[#2A254B] text-2xl md:text-[24px] font-medium leading-relaxed">
                From a studio in London to a global brand with <br />
                over 400 outlets
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                When we started Avion, the idea was simple. Make high quality furniture
                affordable and available for the mass market. <br /><br />
                Handmade, and lovingly crafted furniture and homeware is what we live,
                breathe and design so our Chelsea boutique become the hotbed for the
                London interior design community.
              </p>
              <button className="bg-[#F9F9F9] w-[150px] h-[50px] mt-4 hover:border">
                Get in touch
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={Aboutimg1} alt="About" className="max-w-full h-auto object-cover rounded-xl" />
            </div>
          </div>

          {/* Второй блок */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-[#2A254B] text-2xl md:text-[24px] font-medium leading-relaxed">
                Our service isn’t just personal, it’s actually <br />
                hyper personally exquisite
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                When we started Avion, the idea was simple. Make high quality furniture
                affordable and available for the mass market. <br /><br />
                Handmade, and lovingly crafted furniture and homeware is what we live,
                breathe and design so our Chelsea boutique become the hotbed for the
                London interior design community.
              </p>
              <button className="bg-[#F9F9F9] w-[150px] h-[50px] mt-4 hover:border">
                Get in touch
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={Aboutimg2} alt="About" className="max-w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section>
        <div className="main max-w-[1440px] w-full mx-auto px-4">
          <h1 className="text-center text-[#2A254B] text-[24px] mt-[60px] mb-[50px]">What makes our brand different</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 hover:bg-[#f9f9f9] rounded-lg shadow-sm">
              <FaTruckFast className="text-2xl mb-2" />
              <h1 className="text-[20px] text-[#2A254B] mb-[8px]">Next day as standard</h1>
              <p className="text-sm">Order before 3pm and get your order the next day as standard</p>
            </div>
            <div className="p-6 hover:bg-[#f9f9f9] rounded-lg shadow-sm">
              <FaRegCircleCheck className="text-2xl mb-2" />
              <h1 className="text-[20px] text-[#2A254B] mb-[8px]">Made by true artisans</h1>
              <p className="text-sm">Handmade furniture crafted by professionals</p>
            </div>
            <div className="p-6 hover:bg-[#f9f9f9] rounded-lg shadow-sm">
              <CiCreditCard1 className="text-2xl mb-2" />
              <h1 className="text-[20px] text-[#2A254B] mb-[8px]">Unbeatable prices</h1>
              <p className="text-sm">High quality and affordable for everyone</p>
            </div>
            <div className="p-6 hover:bg-[#f9f9f9] rounded-lg shadow-sm">
              <PiPlantLight className="text-2xl mb-2" />
              <h1 className="text-[20px] text-[#2A254B] mb-[8px]">Recycled packaging</h1>
              <p className="text-sm">Eco-friendly materials and sustainable delivery</p>
            </div>
          </div>
        </div>
      </section>

       <footer className="w-full mt-20">
      {/* Подписка */}
      <div className="relative w-full py-16 px-4 text-white overflow-hidden">
  {/* Фоновое изображение */}
  <img
    src={footer}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Затемнение для читаемости текста */}
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  {/* Контент */}
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h2 className="text-2xl md:text-3xl font-semibold">
      Join the club and get the benefits
    </h2>
    <p className="mt-4 text-sm md:text-base">
      Sign up for our newsletter and receive exclusive offers on new ranges,
      sales, pop up stores and more
    </p>

    {/* Список преимуществ */}
    <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
      <span className="flex items-center gap-2">✔ Exclusive offers</span>
      <span className="flex items-center gap-2">✔ Free events</span>
      <span className="flex items-center gap-2">✔ Large discounts</span>
    </div>

    {/* Форма */}
    <div className="flex justify-center mt-6">
      <input
        type="email"
        placeholder="your@email.com"
        className="px-4 py-3 w-64 md:w-96 rounded-l bg-white text-black focus:outline-none"
      />
      <button className="bg-[#2A254B] px-6 py-3 rounded-r hover:bg-[#3a3560] transition">
        Sign up
      </button>
    </div>
  </div>
</div>


      {/* Нижний футер */}
      <div className="bg-[#2A254B] text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          {/* Our company */}
          <div>
            <h3 className="font-semibold mb-4">Our company</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Join mailing list */}
          <div>
            <h3 className="font-semibold mb-4">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 w-full sm:w-56 rounded sm:rounded-l bg-[#3d3760] text-white focus:outline-none"
              />
              <button className="bg-white text-[#2A254B] px-6 py-3 rounded sm:rounded-r hover:bg-gray-200 transition">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">Copyright 2022 Avion LTD</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default HeaderOybek;
