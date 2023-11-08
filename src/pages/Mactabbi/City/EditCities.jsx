import React, { useState, useEffect } from 'react';
import BackButton from '../../../components/BackButton';
import Spinner from "../../../components/Spinner"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import SideBar from '../../../components/Mactabbi/SideBar';


const EditCountry = () => {
  const [name_country, setname_country] = useState('');
  const [num_country, setnum_country] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/countries/${id}`)
      .then((response) => {
        setnum_country(response.data.num_country);
        setname_country(response.data.name_country)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditCountry = () => {
    const data = {
      name_country,
      num_country,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4000/countries/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Country Edited successfully', { variant: 'success' });
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
            <h1 className='text-3xl my-8 text-white  justify-center ml-10'>Edit country</h1>
          </div>
          <div className='p-4'>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 bg-white border-black rounded-xl w-[600px] p-4 mx-auto'>
              <div className='my-4'>
                <label className='text-xl mr-4 text-black'>Name</label>
                <input
                  type='text'
                  value={name_country}
                  onChange={(e) => setname_country(e.target.value)}
                  className='border-2 border-black px-4 py-2 w-full'
                />
              </div>
              <div className='my-4'>
                <label className='text-xl mr-4 text-black'>Numero telephon</label>
                <input
                  type='text'
                  value={num_country}
                  onChange={(e) => setnum_country(e.target.value)}
                  className='border-2 border-black px-4 py-2  w-full '
                />
              </div>

              <button className='p-2  m-8' onClick={handleEditCountry}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditCountry