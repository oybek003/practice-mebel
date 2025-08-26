import React from 'react'
import { Link } from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import img from '../assets/6.png';
import img1 from '../assets/7.png';


const Card3Abdurashid = () => {
  return (
    <div>
            <header className="w-full">
        <nav className="flex items-center justify-between px-6 py-4">
          <IoMdSearch className="text-2xl cursor-pointer" />

          <Link to="/">
                        <h1 className="text-[24px] font-bold">Avion</h1>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-2xl">
            <Link to="/" className="text-blue-600 hover:underline"><MdOutlineLocalGroceryStore className="text-black"/></Link>            
            <CgProfile className="cursor-pointer" />
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        <hr className="border-gray-200" />

        <ul className="hidden md:flex items-center justify-center gap-10 mt-6 mb-10">
          <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
          <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
          <li className="hover:text-purple-950 cursor-pointer">Tables</li>
          <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
          <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
          <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
          <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
        </ul>

        {open && (
          <ul className="flex flex-col items-center gap-6 mt-4 mb-6 md:hidden">
            <li className="hover:text-purple-950 cursor-pointer">Plant pots</li>
            <li className="hover:text-purple-950 cursor-pointer">Ceramics</li>
            <li className="hover:text-purple-950 cursor-pointer">Tables</li>
            <li className="hover:text-purple-950 cursor-pointer">Chairs</li>
            <li className="hover:text-purple-950 cursor-pointer">Crockery</li>
            <li className="hover:text-purple-950 cursor-pointer">Tableware</li>
            <li className="hover:text-purple-950 cursor-pointer">Cutlery</li>
          </ul>
        )}
      </header>




    <div className='pl-[20px]'>
      <h1 className='text-4xl'>Your shopping cart</h1>
      <div className='flex pt-[50px] pl-[40px] gap-140'>
        <p>Product</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
    </div>
    <hr />
    <div>
      <div className='flex w-[1500px] h-[160px] pb-[20px] m-auto hover:shadow-2xl hover:shadow-black rounded-2xl hover:transition-all transition-all'>
      <img src={img} alt="" className='ml-[50px] mt-[20px] border-1 rounded-2xl'/>    
      <div>
      <h2 className='pl-[20px] pt-[30px] text-[20px] font-medium'>Graystone vase</h2>
      <p className='pl-[20px] pb-[10px] pt-[10px]'>A timeless ceramic vase with <br /> a tri color grey glaze.</p>
      <p className='pl-[20px]'>£85</p>        
      </div> 
        <div className='pl-[330px] pt-[70px]'>
          <p>1</p>
        </div>   
        <div className='pl-[580px] pt-[70px]'>
          <p>£85</p>
        </div>
      </div>

      <div className='flex w-[1500px] h-[160px] pb-[20px] m-auto hover:shadow-2xl hover:shadow-black rounded-2xl hover:transition-all transition-all'>
      <img src={img1} alt="" className='ml-[50px] mt-[20px] border-1 rounded-2xl'/>    
      <div>
      <h2 className='pl-[20px] pt-[30px] text-[20px] font-medium'>Basic white vase</h2>
      <p className='pl-[20px] pb-[10px] pt-[10px]'>Beautiful and simple this is <br /> one for the classics</p>
      <p className='pl-[20px]'>£125</p>        
      </div> 
        <div className='pl-[330px] pt-[70px]'>
          <p>1</p>
        </div>   
        <div className='pl-[580px] pt-[70px]'>
          <p>£125</p>
        </div>
      </div>
    </div>

    <div className='mt-[70px] text-end mr-[50px]'>
      <h2 className='text-2xl'>Subtotal £210</h2>
      <p className='pb-[10px] pt-[10px]'>Taxes and shipping are calculated at checkout</p>
      <button className='w-[150px] h-[50px] bg-[#2A254B] text-white rounded-2xl hover:bg-white hover:text-[#2A254B] hover:border-2 hover:font-medium mb-[20px] hover:transition-all transition-all'>Go to checkout</button>
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

export default Card3Abdurashid
