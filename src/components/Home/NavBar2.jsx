import React from 'react'
import logo from '../../img/mactabbi/logorouge.jpg'
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <nav id="header" className=" text-rouge p-4">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo pl-4 flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-10 h-10 object-cover rounded-full" />
          </div>
          <Link to="/home" className="toggleColor text-rouge no-underline hover:no-underline font-bold text-xl lg:text-4xl">
            MacTabBI
          </Link>
        </div>

        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/passes" className="text-xl hover:underline items-center">
            <div className='flex items-center justify-between'>
              <img src={logo} alt="logo" className="w-6 h-6 object-cover rounded-full" />
              Passes
            </div>

          </Link>
          <Link to="/offices" className="text-xl hover:underline">Offices</Link>
          <Link to="/meeting" className="text-xl hover:underline">Meeting Rooms</Link>
          <Link to="/studio" className="text-xl hover:underline">Studios</Link>
        </div>

        <div className='flex items-center justify-between space-x-2'>
          <Link to="/register" className="text-xl hover:underline"><button>Register as host</button></Link>
          <Link to="/contact" className="text-xl hover:underline"><button>Contact us</button></Link>
        </div>

      </div>
    </nav>



  )
}

export default NavBar2

/*
<div className='flex justify-between items-center h-15 w-full max-w-[1240px] px-4 text-white bg-rouge'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt='logo/img' className='w-22 h-9 object-fill' />
        <h1 className='p-4 '> <strong>M</strong>actabbi</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'><strong>M-</strong>passes </li>
        <li className='p-4'>Offices </li>
        <li className='p-4'>Meeting Rooms </li>
        <li className='p-4'>Studios </li>
        <li className='p-4'>About </li>
      </ul>
    </div>
    */