import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from "../../../components/Spinner"
import { Link } from 'react-router-dom';

import { BiUserCircle, BiShow } from 'react-icons/bi';
import { MdOutlineAddBox } from 'react-icons/md';

import CountriesCard from '../../../components/Mactabbi/country/CountriesCard';
import CountriesTable from '../../../components/Mactabbi/country/CountriesTable';
import CountryCreateModal from '../../../components/Mactabbi/country/CountryCreateModal';
import SideBar from '../../../components/Mactabbi/SideBar';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/countries')
      .then((response) => {
        setCountries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-row bg-rouge'>
      <SideBar />

      <div className='p-4 flex w-full flex-col gap-1'>
        <div className=' flex w-full flex-col gap-1'>
          <div className='flex w-full h-[4rem]  justify-between items-center'>
            <h1 className='text-3xl my-8 text-white justify-center ml-10'>Country's list</h1>
            <div className='border-2 bg-white border-black rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
              <Link className="flex items-center" to='/countries/create'>
                <MdOutlineAddBox className='text-black text-4xl' />
                Add a new country
              </Link>
              {/*<BiShow
                className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                onClick={() => setShowModal(true)}
           />*/}

            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : showType === 'table' ? (
            <CountriesTable countries={countries} />
          ) : (
            <CountriesCard countries={countries} />
          )
          }
          {showModal && (
            <CountryCreateModal onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
