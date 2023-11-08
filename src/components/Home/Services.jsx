import React from 'react'
import Card from './Card'

import Workspace from "../../img/coworking/coworker.jpeg";
import Meeting from "../../img/coworking/meetingroom.jpg";
import Offices from "../../img/coworking/privateoffice.jpg";
import Studios from "../../img/coworking/eventsroom.jpg";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=' h-[95vh]  mt-[5rem] pr-[3rem] pl-[3rem]'>
      {/* left side */}
      <div className=''>
        <div className='text-[1.8rem] font-bold text-center'>
          Adaptive workspaces for every type of work
        </div>
        <div className='text-[1.8rem] font-bold text-center text-rouge'>
          Individuals and teams
        </div>
      </div>

      <div className='flex flex-wrap gap-[1.8rem] content-center'>
        {/* card1 */}
        <Link to="/passes" className="">
        <Card
            photo={Workspace}
            heading={"Work Spaces"}
            detail="coworking spaces, Business lounges, Hotels..."
          />
        </Link>

        {/* card2 */}
        <Link to="/meeting">
        <Card
            photo={Meeting}
            heading={"Meeting Rooms"}
            detail="Workshops, conferences..."
          />
        </Link>

        {/* card3 */}
        <Link to="/offices">
        <Card
            photo={Offices}
            heading={"Offices"}
            detail="Short Term & Long Term solution."
          />
        </Link>

        {/* card4 */}
        <Link to="/studio">
        <Card
            photo={Studios}
            heading={"Creative Studios"}
            detail="Podcast studios & more."
          />
        </Link>
      </div>
    </div>
  )
}

export default Services