import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import Spinner from "../../../components/Spinner"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import SideBar from '../../../components/Mactabbi/SideBar';


const CreateCountries = () => {
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
    <div className='flex flex-row bg-rouge'>
      <SideBar />
      <div className='p-4 flex w-full flex-col gap-1'>
        <div className='flex w-full h-[4rem]  justify-center items-center'>
          <h1 className='text-3xl my-8 text-white  justify-center ml-10'>Add new country</h1>
        </div>
        <div className='p-4'>
          {loading ? <Spinner /> : ''}
          <div className='flex flex-col border-2 bg-white border-black rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <label className='text-xl mr-4 black'>Name</label>
              <input
                type='text'
                value={name_country}
                onChange={(e) => setname_country(e.target.value)}
                className='border-2 border-black px-4 py-2 w-full'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 black'>Number phone</label>
              <input
                type='text'
                value={num_country}
                onChange={(e) => setnum_country(e.target.value)}
                className='border-2 border-black px-4 py-2  w-full '
              />
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCountry}>
              Save
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default CreateCountries