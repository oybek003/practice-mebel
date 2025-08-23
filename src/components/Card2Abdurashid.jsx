import React from 'react'
import Card from '../pages/Card3Abdurashid'

let hello = function() {
  alert("Регистрация прошла успешно");
};

const Card2 = () => {
  return (
    <div>
    <div className='bg-[#F9F9F9] pt-[100px] mt-[100px] pb-[100px]'>
        <div className='w-[900px] h-[400px] text-center pt-[100px] bg-white m-auto'>
          <h1 className='text-4xl pb-[20px]'>Join the club and get the benefits</h1>
          <p className='pb-[20px]'>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
          <div className='pt-[10px]'>
            <input type="text" placeholder='your@email.com' className='placeholder:pl-[10px] bg-[#F9F9F9] w-[200px] h-[30px] rounded-l-2xl border-2'/>
            <button className='w-[80px] h-[30px] bg-[#2A254B] text-white border-2 border-black rounded-r-2xl' onClick={hello}>Sign up</button>
          </div>
        </div>
    </div>
    <footer className="bg-[#26233A] text-[#D7D4E4] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="space-y-4">
            <div className="text-2xl tracking-wide font-semibold">Avion</div>
            <address className="not-italic leading-7 text-[#BEBBD1]">
              <div>21 New York Street</div>
              <div>New York City</div>
              <div>United States of America</div>
              <div>432 34</div>
            </address>
          </div>

          <div>
            <div className="mb-3 font-medium text-[#BEBBD1]">Social links</div>
            <div className="flex items-center gap-4">
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
              <a aria-label="Skype" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
              <a aria-label="Pinterest" href="#" className="p-2 rounded-full hover:opacity-80 transition-opacity">

              </a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-medium text-[#BEBBD1]">Menu</div>
            <ul className="space-y-2 text-[#D7D4E4]">
              <li><a href="#" className="hover:opacity-80">New arrivals</a></li>
              <li><a href="#" className="hover:opacity-80">Best sellers</a></li>
              <li><a href="#" className="hover:opacity-80">Recently viewed</a></li>
              <li><a href="#" className="hover:opacity-80">Popular this week</a></li>
              <li><a href="#" className="hover:opacity-80">All products</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-medium text-[#BEBBD1]">Categories</div>
            <ul className="space-y-2 text-[#D7D4E4]">
              <li><a href="#" className="hover:opacity-80">Crockery</a></li>
              <li><a href="#" className="hover:opacity-80">Furniture</a></li>
              <li><a href="#" className="hover:opacity-80">Homeware</a></li>
              <li><a href="#" className="hover:opacity-80">Plant pots</a></li>
              <li><a href="#" className="hover:opacity-80">Chairs</a></li>
              <li><a href="#" className="hover:opacity-80">Crockery</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-medium text-[#BEBBD1]">Our company</div>
            <ul className="space-y-2 text-[#D7D4E4]">
              <li><a href="#" className="hover:opacity-80">About us</a></li>
              <li><a href="#" className="hover:opacity-80">Vacancies</a></li>
              <li><a href="#" className="hover:opacity-80">Contact us</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy</a></li>
              <li><a href="#" className="hover:opacity-80">Returns policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <p className="text-xs text-[#BEBBD1]">Copyright 2022 Avion LTD</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Card2
