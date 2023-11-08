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
        window.location.reload(false);
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='relative h-fill bg-white border-2 rounded-lg'>
      <div>
        <div className='p-2'>
          <img className='h-[10rem] w-full' src={flag} />
        </div>

        {loading ? <Spinner /> : ''}
        <div className='flex flex-col p-4 mx-auto'>
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

            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCountry}>
              Save
            </button>
        </div>

      </div>
    </div>
  );
};

export default CountryModal;
