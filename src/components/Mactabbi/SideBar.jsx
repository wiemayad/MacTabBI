import React from 'react'
import logo from '../../img/mactabbi/logorouge.jpg'
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div class="min-h-screen flex flex-row bg-rouge">
                <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div class="flex items-center justify-center h-20 shadow-md">
                        <div class="logo flex items-center justify-between">
                            <img src={logo} alt="logo" class="w-10 h-10 object-cover rounded-full" />
                            <Link to="/" class="toggleColor text-rouge no-underline hover:no-underline font-bold text-xl lg:text-4xl">
                                MacTabBI
                            </Link>
                        </div>
                    </div>

                    <ul class="flex flex-col py-4">
                        <li>
                            <Link to="/home_mac" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:bx-flashing"><i class="bx bx-home"></i></span>
                                <span class="text-sm font-medium">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:text-rouge"><i class="bx bx-user"></i></span>
                                <span class="text-sm font-medium">Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:text-rouge"><i class="bx bx-bell"></i></span>
                                <span class="text-sm font-medium">Notifications</span>
                                <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black"><i class="bx bx-chat"></i></span>
                                <span class="text-sm font-medium">Chats</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:text-rouge"><i class="bx bx-cog"></i></span>
                                <span class="text-sm font-medium">Setings</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:text-rouge"><i class="bx bx-group"></i></span>
                                <span class="text-sm font-medium">Network settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-rouge">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-black hover:text-rouge"><i class="bx bx-log-out"></i></span>
                                <span class="text-sm font-medium">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default SideBar