import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";


const Card1 = () => {
  return (
    <div>
      <h1 className='pt-[50px] text-center text-2xl'>What makes our brand diffrent</h1>
      <div className='flex gap-25 pl-[30px] pt-[50px]'>

        <div className='w-[270px] pl-[5px] pr-[5px] pt-[5px] pb-[5px] hover:shadow-2xl hover:shadow-black hover:transition-all transition-all hover:rounded-2xl hover:border-2'>
          <TbTruckDelivery className='w-[30px] h-[30px]'/>
          <h3 className='pb-[5px] pt-[10px]'>Next day as standard</h3>
          <p>Order before 3pm and get your order <br /> the next day as standard</p>
        </div>

        <div className='w-[270px] pl-[5px] pr-[5px] pt-[5px] pb-[5px] hover:shadow-2xl hover:shadow-black hover:transition-all transition-all hover:rounded-2xl hover:border-2'>
          <IoIosCheckmarkCircleOutline className='w-[30px] h-[30px]'/>
          <h3 className='pb-[5px] pt-[10px]'>Made by true artisans</h3>
          <p>Handmade crafted goods made with <br /> real passion and craftmanship</p>
        </div>

        <div className='w-[270px] pl-[5px] pr-[5px] pt-[5px] pb-[5px] hover:shadow-2xl hover:shadow-black hover:transition-all transition-all hover:rounded-2xl hover:border-2'>
          <CiCreditCard1 className='w-[30px] h-[30px]'/>
          <h3 className='pb-[5px] pt-[10px]'>Unbeatable prices</h3>
          <p>For our materials and quality you <br /> won’t find better prices anywhere</p>
        </div>

        <div className='w-[270px] pl-[5px] pr-[5px] pt-[5px] pb-[5px] hover:shadow-2xl hover:shadow-black hover:transition-all transition-all hover:rounded-2xl hover:border-2'>
          <LuSprout className='w-[30px] h-[30px]'/>
          <h3 className='pb-[5px] pt-[10px]'>Recycled packaging</h3>
          <p>We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
        </div>

      </div>
    </div>
  )
}

export default Card1
