import { useContext, useState } from "react";
import { CounterProvider, CounterContext } from "../context/CounterContext";
import Card from '../components/CardAbdurashid';
import Card1 from '../components/Card1Abdurashid';
import Card2 from '../components/Card2Abdurashid';
// import Card3 from '../pages/Card3Abdurashid';
import img from "../assets/1.png";
import { Link } from "react-router-dom" 
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";

const Content = () => {
  const { count, setCount } = useContext(CounterContext);
  const [open, setOpen] = useState(false);

  return (
    <>


      <header className="w-full">
        <nav className="flex items-center justify-between px-6 py-4">
          <IoMdSearch className="text-2xl cursor-pointer" />

          <h1 className="text-[24px] font-bold">Avion</h1>

          <div className="hidden md:flex items-center gap-6 text-2xl">
            <Link to="/shop" className="text-blue-600 hover:underline"><MdOutlineLocalGroceryStore className="text-black"/></Link>            
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

      <div className="flex">
        <div>
          <img src={img} alt="" className="pt-[20px]" />
        </div>
        <div>
          <h1 className="text-4xl pb-[20px] pt-[170px] pl-[100px] font-medium">
            The Dandy Chair <br /> £250
          </h1>

          <p className="pb-[20px] text-xl pl-[100px]">The Dandy Chair</p>
          <p className="pb-[20px] pl-[100px]">
            A timeless design, with premium materials features as one of our most <br />
            popular and iconic pieces. The dandy chair is perfect for any stylish <br />
            living space with beech legs and lambskin leather upholstery.
          </p>

          <ul className="pl-[100px]">
            <li>• Premium material</li>
            <li>• Handmade upholstery</li>
            <li>• Quality timeless classic</li>
          </ul>

          <p className="pl-[100px] pt-[10px]">Dimensions</p>

          <div className="flex pt-[10px] pl-[100px] gap-10">
            <div>
              <p>Heght</p>
              <p>110cm</p>
            </div>
            <div>
              <p>Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p>Depth</p>
              <p>50cm</p>
            </div>
          </div>

          <div className="pl-[100px] pt-[20px] flex">
            <h1 className="text-2xl">
              Amount:  
              <button 
                onClick={() => setCount((prev) => Math.max(prev - 1, 0))} 
                className="pl-[10px] pr-[10px]"
              >
                -
              </button> 
              {count}  
              <button 
                onClick={() => setCount((prev) => prev + 1)} 
                className="pl-[10px]"
              >
                +
              </button>
            </h1>
            <button className="w-[130px] h-[50px] bg-[#2A254B] text-white rounded-2xl ml-[250px] hover:text-[#2A254B] hover:bg-white hover:border-2 hover:transition-all transition-all">
              Add to cart
            </button>
          </div>

          <div className="pt-[250px] ml-[-700px]">
            <Card />        
            <Card1 />
            <Card2 />  
          </div>
        </div>
      </div>
    </>
  );
};

const Cardd = () => (
  <CounterProvider>
    <Content />
  </CounterProvider>
);

export default Cardd;