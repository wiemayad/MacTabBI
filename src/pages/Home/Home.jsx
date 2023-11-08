import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar1 from '../../components/Home/NavBar1'
import NavBar2 from '../../components/Home/NavBar2'
import Introduction from '../../components/Home/Introduction'
import Services from '../../components/Home/Services'
import HowWorks from '../../components/Home/HowWorks'
import Footer from '../../components/Home/Footer'
import Team from '../../components/Home/Team';

const Home = () => {

  return (
    <>
      <NavBar2/>
      <Introduction />
      <Services />
      <HowWorks />
      <Team/>
      <Footer />
    </>
  );
};

export default Home;
