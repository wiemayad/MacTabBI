import React from 'react'
import Button from "../elements/Button";
import Shape1 from "../../img/coworking/coworker.jpeg";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className=" h-[85vh]  mt-[1rem] flex flex-wrap pr-[3rem] pl-[3rem]">

      {/* left */}
      <div className="  flex flex-col relative gap-[2rem] flex-1">
        <div className='flex flex-col gap-[0,25]'>
          <div className="font-bold text-red-700 text-[5rem]">
            Enjoy
          </div>
          <div className="text-[1.9rem] font-bold text-black">
            your work anywhere
          </div>

          <div className="font-semibold text-[1.6rem] text-black py-4">
            <strong className='text-rouge'>Speed </strong>access to workspaces, offices & meeting rooms.
          
            Wherever you are, whenever you want.
          </div>
        </div>
        <div className="flex flex-col relative ">
          <div>
            <div className="font-bold text-[1rem] text-rouge">
              Select a location
            </div>
            <select className='w-full h-10'>
              <option>Inspire coworking</option>
            </select>
          </div>

          <div className='mt-[1rem] items-center'>
            <Link to="/passes" className="text-xl hover:underline">
              <button>Find spaces</button>
            </Link>
          </div>

        </div>
      </div>

      {/* Right */}
      <div className=" flex relative items-center">
        <img src={Shape1} alt="banner" className="h-[70vh] w-[110vh] border-collapse" />
      </div>
    </div>
  )
}

export default Introduction