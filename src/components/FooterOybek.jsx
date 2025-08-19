import React from "react";

const FooterOybek = () => {
  return (
    <footer className="bg-[#2e2656] text-white px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">

        {/* Menu */}
        <div>
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">New arrivals</li>
            <li className="hover:underline cursor-pointer">Best sellers</li>
            <li className="hover:underline cursor-pointer">Recently viewed</li>
            <li className="hover:underline cursor-pointer">Popular this week</li>
            <li className="hover:underline cursor-pointer">All products</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Crockery</li>
            <li className="hover:underline cursor-pointer">Furniture</li>
            <li className="hover:underline cursor-pointer">Homeware</li>
            <li className="hover:underline cursor-pointer">Plant pots</li>
            <li className="hover:underline cursor-pointer">Chairs</li>
            <li className="hover:underline cursor-pointer">Crockery</li>
          </ul>
        </div>

        {/* Our company */}
        <div>
          <h4 className="font-semibold mb-3">Our company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Vacancies</li>
            <li className="hover:underline cursor-pointer">Contact us</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Returns policy</li>
          </ul>
        </div>

        {/* Mailing list */}
        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-3">Join our mailing list</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-3 py-2 w-60 text-sm bg-[#3b3464] placeholder-gray-300 text-white outline-none"
            />
            <button className="bg-white text-[#2e2656] px-4 py-2 text-sm font-medium hover:bg-gray-200">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>Copyright 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">Skype</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterOybek;