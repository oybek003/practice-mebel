import React from 'react'
import img from '../assets/img.png'
import { Link } from 'react-router-dom'

const Section5Oybek = () => {
  return (
    <div>
      <div className="main flex items-center justify-center mt-[80px]">
        <div className="text w-[720px] h-[603px]">
            <h1 className='text-[#2A254B] text-[24px] p-9'>From a studio in London to a global brand with <br />
over 400 outlets</h1>
            <p className='mb-[180px] p-9'>When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. 
                <br /><br />
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

         <Link
           to="/about"
           className="mt-[35px] mb-[35px] w-[170px] h-[50px] flex justify-center items-center bg-[#F9F9F9] hover:border-2 hover:scale-105 transition"
         >
           Get in touch
         </Link>
        </div>

        <div className="img">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section5Oybek
