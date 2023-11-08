import { BrowserRouter, Route, Routes } from "react-router-dom";

import Conference from "../pages/Conference";
import Congrats from "../pages/Congrats";

import Home from "../pages/Home/Home";
import About from '../pages/Home/About';
import Passes from '../pages/Home/M_passes';
import Contact from "../pages/Home/Contact";
import Register from "../pages/Home/Register";
import Offices from "../pages/Home/Offices";
import Meeting from "../pages/Home/MeetingRooms";
import Studio from "../pages/Home/Studio";

import Home_Mac from "../pages/Mactabbi/Home"

import Footer from "../components/Home/Footer";
import NavBar1 from "../components/Home/NavBar1";
import NavBar2 from "../components/Home/NavBar2";

import Home_Country from "../pages/Mactabbi/Country/Countries"
import Create_Country from "../pages/Mactabbi/Country/CreateCountries"
import Delete_Country from "../pages/Mactabbi/Country/DeleteCountry"
import Edit_Country from "../pages/Mactabbi/Country/EditCountry"
import Show_Country from "../pages/Mactabbi/Country/ShowCountry"

import Home_Cities from "../pages/Mactabbi/City/Cities"
import Create_Cities from "../pages/Mactabbi/City/CreateCities"
import Delete_Cities from "../pages/Mactabbi/City/DeleteCities"
import Edit_Cities from "../pages/Mactabbi/City/EditCities"
import Show_Cities from "../pages/Mactabbi/City/ShowCities"

const Navigation = () => {
    return (
        <BrowserRouter>
            {/*<NavBar1 />*/}

            <Routes>
                <Route path="/" element={<Conference />} />
                <Route path="/congrats" element={<Congrats />} />

                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/passes" element={<Passes />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/meeting" element={<Meeting />} />
                <Route path="/about" element={<About />} />
                <Route path="/studio" element={<Studio />} />

                <Route path="/home_mac" element={<Home_Mac />} />

                <Route path='/countries' element={<Home_Country />} />
                <Route path='/countries/create' element={<Create_Country />} />
                <Route path='/countries/details/:id' element={<Show_Country />} />
                <Route path='/countries/edit/:id' element={<Edit_Country />} />
                <Route path='/countries/delete/:id' element={<Delete_Country />} />

                <Route path='/cities/cities_by_countries/:id' element={<Home_Cities />} />
                <Route path='/cities/create' element={<Create_Cities />} />
                <Route path='/cities/details/:id' element={<Show_Cities />} />
                <Route path='/cities/edit/:id' element={<Edit_Cities />} />
                <Route path='/cities/delete/:id' element={<Delete_Cities />} />
            </Routes>

        </BrowserRouter>


    )
}
export default Navigation;