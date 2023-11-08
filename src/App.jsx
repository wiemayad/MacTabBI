import React from 'react'
import {Route, Routes} from 'react-router-dom'

import index from './navigation/index'
import Home from './pages/Home/Home'
import NavBar1 from './components/Home/NavBar1'

import Navigation from './navigation/index'

const App = () => {
  return (
        <Navigation/>
  )
}
export default App