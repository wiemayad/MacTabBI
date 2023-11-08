import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';


import flag from '../../../img/mactabbi/logorouge.jpg'
import { BsTelephone } from 'react-icons/bs';

const CountryModal = ({ country, onClose }) => {
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
        <img className='h-[10rem] w-full' src={flag}/>
      </div>
        <h2 className='w-full text-center px-4 py-1 bg-red-300 rounded-lg'>
          {country.name_country}
        </h2>
        <p className='mt-4'>Number of cities in MacTabBI : 4</p>
        <p className='my-2'>Number of workspaces in MacTaBI : 10</p>
        
      </div>
    </div>
  );
};

export default CountryModal;
