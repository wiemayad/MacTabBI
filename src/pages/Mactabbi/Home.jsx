import React, { useEffect, useState } from 'react';
import axios from 'axios';

import pays from '../../img/icons/dashbord/pays.png'
import SideBar from '../../components/Mactabbi/SideBar';
import Home_MAC from '../../components/Mactabbi/Home';

const Home = () => {

  return (
    <div className='flex gap-2 bg-rouge'>
      <SideBar/>
      <Home_MAC/>
    </div>
  );
};

export default Home;
