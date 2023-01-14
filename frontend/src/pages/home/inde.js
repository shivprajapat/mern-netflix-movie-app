import React from 'react'
import Featured from '../../components/featured';
import List from '../../components/list';
import Navbar from '../../components/Navbar';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home