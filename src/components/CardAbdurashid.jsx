import React from 'react'
import img from '../assets/2.png'
import img1 from '../assets/3.png'
import img2 from '../assets/4.png'
import img3 from '../assets/5.png'

const Card = () => {
  return (
    <div>
      <h1 className='pb-[20px] text-2xl'>You might also like</h1>
      <div className='flex gap-[80px]'>
        <div>
          <img src={img} alt="" className='rounded-2xl'/>
          <p>The Dandy chair</p>
          <p>£250</p>          
        </div>

        <div>
          <img src={img1} alt="" className='rounded-2xl'/>
          <p>Rustic Vase Set</p>
          <p>£155</p>          
        </div>

        <div>
          <img src={img2} alt="" className='rounded-2xl'/>
          <p>The Silky Vase</p>
          <p>£125</p>          
        </div>

          <div>
          <img src={img3} alt="" className='rounded-2xl'/>
          <p>The Lucy Lamp</p>
          <p>£399</p>          
        </div>
      </div>

      <button className='w-[200px] h-[50px] border-2 rounded-2xl ml-[630px] mt-[50px] hover:bg-black hover:text-white hover:transition-all transition-all'>View collection</button>
    </div>
  )
}

export default Card
