import React from 'react'
import { useNavigate } from "react-router-dom";
import chair from '../assets/chair (2).png'
import chair2 from '../assets/Photo.png'
import sofa from '../assets/Large.png'

const Section3Oybek = () => {
  const navigate = useNavigate(); 

  return (
    <div className='mt-[80px] mb-[32px]'>
      <h1
        className="relative text-[32px] pt-4 pb-4 font-bold inline-block
                   after:content-[''] after:absolute after:left-1/2 after:bottom-0
                   after:w-0 after:h-[3px] after:bg-black
                   after:transition-all after:duration-500 after:-translate-x-1/2
                   hover:after:w-full sm:text-center"
      >
        Our popular products
      </h1>  

      <div className="main flex items-center justify-center gap-[20px] mt-[32px]">
        <div className="sofa">
          <img src={sofa} alt="" />
          <h1>The Poplar suede sofa</h1>
          <p>£980</p>
        </div>

        <div className="chairs flex items-center justify-center gap-[20px]">
          <div className="child">
            <img src={chair} alt="" />
            <h1>The Dandy chair</h1>
            <p>£250</p>
          </div>
          <div className="child">
            <img src={chair2} alt="" />
            <h1>The Dandy chair</h1>
            <p>£250</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button 
          onClick={() => navigate("/collection")} 
          className='mt-[35px] mb-[35px] w-[170px] h-[50px] text-center items-center bg-[#F9F9F9] hover:border-2 hover:scale-105'
        >
          View collection
        </button>
      </div>
    </div>
  )
}

export default Section3Oybek
