import React from 'react'
import { FaGrinStars } from 'react-icons/fa'
import { FcLike, FcRating } from 'react-icons/fc'
import Card from './Credits'

const HowWorks = () => {
  return (
    <div className=' h-[95vh]  mt-[5rem] flex justify-between pr-[3rem] pl-[3rem]'>
      {/* left side */}
      <div className=''>
        <div className=''>
          <div className='text-[3rem] font-bold'>
            The previlege to work from anywhere, anytime with
          </div>
          <div className='text-[3rem] font-bold ml-[2rem] text-rouge'>
            The MacTabBI Pass
          </div>
          
        </div>

        <div className='flex gap-2 items-center text-[2rem] mt-[2rem]'>
          <FcRating />Work from nearby spaces.
        </div>
        <div className='flex gap-2 items-center text-[2rem]'>
          <FcRating />High speed WiFi.
        </div>
        <div className='flex gap-2 items-center text-[2rem]'>
          <FcRating />Unlimited cofee, tea & water.
        </div>
        <div className='flex gap-2 items-center text-[2rem]'>
          <FcRating />Reserved seating near plugs.
        </div>
        <div className='flex gap-2 items-center text-[2rem]'>
          <FcRating />F&B discounts.
        </div>
        <div className='flex gap-2 items-center text-[2rem]'>
          <FcRating />Exclusive community events
        </div>
      </div>


      {/* right side */}
      <div className='text-center content-center mt-[12rem]'>
        <div className='text-[3rem] font-bold text-center'>
          How it works
        </div>
        <div className='flex flex-row gap-[1rem] content-center'>
          {/* card1 */}
          <Card
            heading={"30 Credits"}
            detail="9500 DA"
          />

          {/* card2 */}
          <Card
            heading={"90 Credits"}
            detail="24000 DA"
          />

          {/* card3 */}
          <Card
            heading={"360 Credits"}
            detail="72000 DA"
          />

        </div>

      </div>
    </div>
  )
}

export default HowWorks
