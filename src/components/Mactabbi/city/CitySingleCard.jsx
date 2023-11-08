import { Link } from 'react-router-dom';

import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle, BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs'

import { useState } from 'react';
import CityModal from './CityModal';

import flag from '../../../img/mactabbi/logorouge.jpg'

const CitySingleCard = ({ city }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 bg-white border-black rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      
      <h2 className='font-bold px-4 py-1 bg-red-300 rounded-lg text-center'>
        {city.name_city}
      </h2>
      {/*<h4 className='my-2 text-gray-500'>{city._id}</h4>*/}
      
      <div className='p-2'>
        <img className='h-[10rem] w-full' src={flag}/>
      </div>
      
      <div className='flex justify-start items-center gap-x-2'>
        <BsTelephoneFill className='text-rouge text-2xl' />
        <h2 className='my-1'>{city.num_city}</h2>
      </div>
      
      <div className='flex justify-between items-center gap-x-2 mt-1 p-2'>
      <Link to={`/cities/cities_by_countries/${city._id}`}>
          <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer' />
        </Link>
        {/*<BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />*/}
        <Link to={`/cities/details/${city._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/cities/edit/${city._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/cities/delete/${city._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <CityModal city={city} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CitySingleCard;
