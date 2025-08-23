import React from "react";
import chair from "../assets/chair.png";
import { RiCaravanFill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const SectionOybek = () => {
  return (
    <div className="w-full">
      {/* Главный блок */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-[#2A254B] text-white">
        {/* Текст */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug sm:text-center">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <Link to="/productListing " className="mt-6 inline-block text-lg underline">
                        View collection
          </Link>
          
          <p className="mt-12 text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        {/* Картинка (будет скрыта на телефоне) */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={chair} alt="chair" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Блок с иконками */}
      <div className="max-w-6xl mx-auto px-4 my-16">
        <h1 className="text-[#2A254B] text-2xl text-center">
          What makes our brand different
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 shadow hover:shadow-lg rounded-lg">
            <RiCaravanFill className="text-3xl" />
            <h3 className="font-bold mt-2">Next day as standard</h3>
            <p className="text-sm mt-2">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="p-4 shadow hover:shadow-lg rounded-lg">
            <FcApproval className="text-3xl" />
            <h3 className="font-bold mt-2">Made by true artisans</h3>
            <p className="text-sm mt-2">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          <div className="p-4 shadow hover:shadow-lg rounded-lg">
            <CiCreditCard1 className="text-3xl" />
            <h3 className="font-bold mt-2">Unbeatable prices</h3>
            <p className="text-sm mt-2">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div className="p-4 shadow hover:shadow-lg rounded-lg">
            <PiPlantThin className="text-3xl" />
            <h3 className="font-bold mt-2">Recycled packaging</h3>
            <p className="text-sm mt-2">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOybek;
