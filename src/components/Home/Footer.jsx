import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoGmail, BiSolidMap } from 'react-icons/bi'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="">
      <div class="bg-rouge grid grid-cols-2 gap-8 py-2 px-6 md:grid-cols-5">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase">Explore</h2>
          <ul class=" text-white">
            <li class="mb-4">
              <Link to="/passes" className=" hover:underline">M-Passes</Link>
            </li>
            <li class="mb-4">
              <Link to="/offices" className="hover:underline">Offices</Link>
            </li>
            <li class="mb-4">
              <Link to="/meeting" className="hover:underline">Meeting rooms</Link>
            </li>
            <li class="mb-4">
              <Link to="/studio" className="hover:underline">Studios</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
          <ul class="text-white">
            <li class="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase">About</h2>
          <ul class="text-white">
            <li class="mb-4">
              <Link to="/" className="hover:underline">About us</Link>
            </li>
            <li class="mb-4">
              <Link to="/" className="hover:underline">Team</Link>
            </li>
            <li class="mb-4">
              <Link to="/" className="hover:underline">How it works</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase"></h2>
          <ul class="text-white">
            <li class="mb-4">
              <div class="text-[1rem] gap-2 text-gray-300 sm:text-center flex"> <BiLogoGmail /> n.merzoug@mactabbi.com
              </div>
            </li>
            <li class="mb-4">
              <div class="text-[1rem] gap-2 text-gray-300 sm:text-center flex"><BsFillTelephoneFill /> +213 560 05 29 66
              </div>
            </li>
            <li class="mb-4">
              <div class="text-[1rem] gap-2 text-gray-300 sm:text-center flex"><BiSolidMap /> Saint Cloud, 129 Boulevard Ben Boulaid - Annaba -Algeria
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase"></h2>
          <ul class="text-white">
            <li class="mb-4">
              <a href="https://www.facebook.com/1st.coworkingspace.in.annaba/" className="hover:underline"><BsFacebook size={30} /></a>
            </li>
            <li class="mb-4">
              <a href="https://www.instagram.com/mactabbi/" className="hover:underline"><BsInstagram size={30} /></a>
            </li>
            <li class="mb-4">
              <a href="https://www.linkedin.com/company/mactabbi" className="hover:underline"><BsLinkedin size={30} /></a>
            </li>
          </ul>
        </div>

      </div>

      <div className=" bg-rouge h-[3rem] pl-[5rem] flex gap-4">
        <div class="text-sm text-gray-300 sm:text-center ">© 2023 MacTabBI. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer