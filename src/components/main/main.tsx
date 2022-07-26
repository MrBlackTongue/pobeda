import React from "react";
import { Routes, Route } from 'react-router-dom';
import NewAd from '../newAd/newAd'
import Ads from "../ads/ads";
import Home from "../home/home";

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ads' element={<Ads/>}/>
      <Route path='/newAd' element={<NewAd/>}/>
    </Routes>
  );
}
export default Main;