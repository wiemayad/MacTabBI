import { AiOutlineClose } from 'react-icons/ai';

import flag from '../../../img/mactabbi/logorouge.jpg'

import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CountryModal = ({ country, onClose }) => {
  const [name_country, setname_country] = useState('');
  const [num_country, setnum_country] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCountry = () => {
    const data = {
      name_country,
      num_country,
    };
    setLoading(true);
    axios
      .post('http://localhost:4000/countries', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Country Created successfully', { variant: 'success' });
        navigate('/countries');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[800px] max-w-full h-[600px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <div className='mt-8 p-2'>
          <img className='h-[10rem] w-full' src={flag} />
        </div>

        {loading ? <Spinner /> : ''}
        <div className='flex flex-col w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input
              type='text'
              value={name_country}
              onChange={(e) => setname_country(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Numero telephon</label>
            <input
              type='text'
              value={num_country}
              onChange={(e) => setnum_country(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2  w-full '
            />
          </div>

          <Link to="/countries">
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCountry}>
            Save
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
