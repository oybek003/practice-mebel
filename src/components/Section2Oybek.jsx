import React from 'react'
import chair from '../assets/chair (2).png'
import vase from '../assets/vase.png'
import vase2 from '../assets/vase 2.png'
import lamp from '../assets/lamp.png'
import { Link } from "react-router-dom";



const Section2Oybek = () => {
  return (
    <div className='mt-[80px]'>
<h1
  className="relative text-[32px] pt-4 pb-4 font-bold inline-block
             after:content-[''] after:absolute after:left-1/2 after:bottom-0
             after:w-0 after:h-[3px] after:bg-black
             after:transition-all after:duration-500 after:-translate-x-1/2
             hover:after:w-full"
>
  New ceramics
</h1>


        <div className="main flex items-center justify-center gap-[20px] mt-[32px] sm:flex-wrap">
            <div className="box">
                <img src={chair} alt="" />
                <h1 className='mt-[24px]'>The Dandy chair</h1>
                <p className='mt-[10px]'>£250</p>
            </div>
            <div className="box">
                <img src={vase} alt="" />
                <h1 className='mt-[24px]'>Rustic Vase Set</h1>
                <p className='mt-[10px]'>£155</p>
            </div>
            <div className="box">
                <img src={vase2} alt="" />
                <h1 className='mt-[24px]'>The Silky Vase</h1>
                <p className='mt-[10px]'>£125</p>
            </div>
            <div className="box">
                <img src={lamp} alt="" />
                <h1 className='mt-[24px]'>The Lucy Lamp</h1>
                <p className='mt-[10px]'>£399</p>
            </div>
        </div>

         <div className="flex items-center justify-center">
  <Link
    to="/collection"
    className="mt-[35px] mb-[35px] w-[170px] h-[50px] flex justify-center items-center bg-[#F9F9F9] hover:border-2 hover:scale-105 transition"
  >
    View collection
  </Link>
</div>
    </div>
  )
}

export default Section2Oybek




