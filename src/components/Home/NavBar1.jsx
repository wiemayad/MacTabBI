import React from 'react'
import { Link } from "react-router-dom";

const NavBar1 = () => {
  return (
    <nav id="header" className="text-rouge  h-15">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-end mt-0 py-2">
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/register" className="text-xl hover:underline"><button>Register as host</button></Link>
          <Link to="/contact" className="text-xl hover:underline"><button>Contact us</button></Link>
        </div>

      </div>
    </nav>
  )
}
export default NavBar1