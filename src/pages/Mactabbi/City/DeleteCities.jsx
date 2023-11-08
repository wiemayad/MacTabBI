import React, { useState } from 'react';
import BackButton from '../../../components/BackButton';
import Spinner from "../../../components/Spinner"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import SideBar from '../../../components/Mactabbi/SideBar';


const DeleteCountry = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCountry = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/countries/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Country Deleted successfully', { variant: 'success' });
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
          <h1 className='text-3xl my-8 text-white  justify-center ml-10'>Delete country</h1>
        </div>
        <div className='p-4'>
          {loading ? <Spinner /> : ''}
          <div className='flex flex-col border-2 bg-white border-black rounded-xl w-[600px] p-4 mx-auto'>
            <h3 className='text-2xl'>Are You Sure You want to delete this Country?</h3>

            <button
              className='p-2  m-8'
              onClick={handleDeleteCountry}
            >
              Yes, Delete it
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DeleteCountry;
