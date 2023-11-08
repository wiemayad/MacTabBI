import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from "../../components/Home/Footer";
import NavBar1 from "../../components/Home/NavBar1";
import NavBar2 from "../../components/Home/NavBar2";

import Shape3 from "../../img/coworking/coworker.jpeg";
import Shape2 from "../../img/coworking/login.png";
import Shape1 from "../../img/coworking/backshape7.jpg";

import { BiLogoGmail, BiSolidMap } from 'react-icons/bi'
import { RiLockPasswordFill } from "react-icons/ri"

const Contact = () => {

  return (
    <>
      <NavBar2 />


      <div className='p-8'>
        <div className=" h-[70vh] flex flex-wrap rounded-lg border-solid border-2 border-rouge">
          {/* left */}
          
          <div className="  flex flex-col relative gap-[2rem] flex-1 items-center justify-center">
            <div className='flex flex-col gap-[1rem]'>
            <label className='uppercase font-serif font-bold text-[3rem] text-rouge'><i>HELLO FRIEND !</i></label>
          <label className='font-serif  text-[1rem]'>
            Enter your details and join the <strong>MacTabBI</strong> community now !</label>
              <form className='flex flex-col gap-4 w-full justify-center'>
                <div className='flex gap-2 items-center justify-center'>
                  
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <BiLogoGmail />
                    </div>
                    <input
                      type="text"
                      name="user_email"
                      class=
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email" />
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center'>
                  
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <RiLockPasswordFill />
                    </div>
                    <input
                      type="text"
                      name="user_pwr"
                      class=
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password" />
                  </div>

                </div>

                <Link to="/home_mac"> <button className='w-full'> Log in</button> </Link>
              </form>
              <div className='flex mt-10 items-center w-full gap-3 justify-center'>
                <h1>Or </h1>
              <Link to="/register"> <button className='w-full'> Sign up</button> </Link>
              </div>
              
            </div>
          </div>

          {/* Right */}
          <div className=" flex flex-col relative flex-1 w-full items-center justify-center">
          
            <img className="h-[25rem]" src={Shape2}/>
          </div>
        </div>
      </div>





    </>
  );
};

export default Contact;
