import React, { useEffect, useState } from 'react';
import axios from 'axios';

import pays from '../../img/icons/dashbord/pays.png'
import { FaMapMarkedAlt, FaUser } from "react-icons/fa"
import { MdHomeWork, MdTableBar, MdWorkspacePremium, MdFoodBank, MdStar, MdStarRate, MdDataExploration, MdSettingsApplications } from "react-icons/md"
import { ImPriceTag } from "react-icons/im"

import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='flex w-full flex-col gap-1'>
      <div className='text-white font-bold text-[2rem] justify-center text-center items-center mt-2'>
        Welcome to MacTabBI
      </div>

      <div className='flex-col gap-2'>
        <div className='text-white font-bold text-[1rem] justify-start mt-[2rem] ml-[2rem] underline'>
          Like Stories
        </div>

        <div class=" grid grid-cols-2 gap-4 py-2 px-12 md:grid-cols-3">
          <Link to="/countries">
            <div class=" bg-slate-100 p-2 flex flex-col rounded-lg border-solid border-1 border-black">
              <div class="text-2 font-medium text-rouge">Happy hour</div>
              <div class="text-2 font-medium text-black">Inspire education</div>
              <div class="text-2 font-medium text-black">Today, 15:00PM - 17:00</div>
            </div>
          </Link>

          <Link to="/countries">
            <div class=" bg-slate-100 p-2 flex flex-col rounded-lg border-solid border-1 border-black">
              <div class="text-2 font-medium text-rouge">Happy hour</div>
              <div class="text-2 font-medium text-black">Inspire education</div>
              <div class="text-2 font-medium text-black">Today, 15:00PM - 17:00</div>
            </div>
          </Link>

          <Link to="/countries">
            <div class=" bg-slate-100 p-2 flex flex-col rounded-lg border-solid border-1 border-black">
              <div class="text-2 font-medium text-rouge">Happy hour</div>
              <div class="text-2 font-medium text-black">Inspire education</div>
              <div class="text-2 font-medium text-black">Today, 15:00PM - 17:00</div>
            </div>
          </Link>
        </div>
      </div>

      <div class=" grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">

      <Link to="/countries">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <FaMapMarkedAlt size={40} />
            <div class="text-xl font-medium text-black">Locations</div>
          </div>
        </Link>

        <Link to="/users">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <FaUser size={40} />
            <div class="text-xl font-medium text-black">Users</div>
          </div>
        </Link>

        <Link to="/hosts">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdHomeWork size={40} />
            <div class="text-xl font-medium text-black">Hosts</div>
          </div>
        </Link>

        <Link to="/services">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdWorkspacePremium size={40} />
            <div class="text-xl font-medium text-black">Services</div>
          </div>
        </Link>

        <Link to="/prices">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <ImPriceTag size={40} />
            <div class="text-xl font-medium text-black">Prices</div>
          </div>
        </Link>

        <Link to="/food">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdFoodBank size={40} />
            <div class="text-xl font-medium text-black">F&B</div>
          </div>
        </Link>

        <Link to="/benifits">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdStarRate size={40} />
            <div class="text-xl font-medium text-black">Benifits</div>
          </div>
        </Link>

        <Link to="/analyse">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdDataExploration size={40} />
            <div class="text-xl font-medium text-black">Analyse</div>
          </div>
        </Link>

        <Link to="/settings">
          <div class=" bg-white gap-6 p-4 flex flex-row items-center  rounded-lg border-solid border-2 border-black shadow-lg hover:shadow-white">
            <MdSettingsApplications size={40} />
            <div class="text-xl font-medium text-black">Settings</div>
          </div>
        </Link>


      </div>


    </div>

  );
};

export default Home;
