import React from 'react'
import Featured from '../../components/featured';
import Navbar from '../../components/Navbar';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Featured/>
    </div>
  )
}

export default Home