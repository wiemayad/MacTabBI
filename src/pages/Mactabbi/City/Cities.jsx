import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from "../../../components/Spinner"
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import CitiesCard from '../../../components/Mactabbi/city/CitiesCard';
import CitiesTable from '../../../components/Mactabbi/city/CitiesTable';
import SideBar from '../../../components/Mactabbi/SideBar';

import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/cities/cities_by_countries/${id}`)
      .then((response) => {
        setCities(response.data.data);
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
        {/*}
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      */}
        <div className=' flex w-full flex-col gap-1'>
          <div className='flex w-full h-[4rem]  justify-between items-center'>
            <h1 className='text-3xl my-8 text-white justify-center ml-10'>City's List</h1>
            <Link to='/cities/create/:id'>
              <MdOutlineAddBox className='text-white text-4xl mr-10' />
            </Link>
          </div>
          {loading ? (
            <Spinner />
          ) : showType === 'table' ? (
            <CitiesTable cities={cities} />
          ) : (
            <Link to><CitiesCard cities={cities} /></Link>
          )}
        </div>
      </div>
    </div>


  );
};

export default Home;
