import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import Spinner from "../../../components/Spinner"
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import SideBar from '../../../components/Mactabbi/SideBar';


const CreateCities = () => {
  const [name_city, setname_city] = useState('');
  const [num_city, setnum_city] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCity = () => {
    
    const data = {
      name_city,
      num_city,
    };
    setLoading(true);
    axios
      .post(`http://localhost:4000/cities/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('city Created successfully', { variant: 'success' });
        navigate('/cities');
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
          <h1 className='text-3xl my-8 text-white  justify-center ml-10'>Add new city</h1>
        </div>
        <div className='p-4'>
          {loading ? <Spinner /> : ''}
          <div className='flex flex-col border-2 bg-white border-black rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <label className='text-xl mr-4 black'>Name</label>
              <input
                type='text'
                value={name_city}
                onChange={(e) => setname_city(e.target.value)}
                className='border-2 border-black px-4 py-2 w-full'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 black'>Number phone</label>
              <input
                type='text'
                value={num_city}
                onChange={(e) => setnum_city(e.target.value)}
                className='border-2 border-black px-4 py-2  w-full '
              />
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCity}>
              Save
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default CreateCities