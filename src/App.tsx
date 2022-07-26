import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {Routes, Route} from "react-router-dom";
import NewAd from "./components/newAd/newAd";
import Ads from "./components/ads/ads";

function App() {
  return (
    <Ads/>
    // <Routes>
    //   <Route path='/' element={<Header/>}/>
    // </Routes>
      // <>
      //   <Header/>
      // </>

    // <div className="App">
    //   {/*<components className="App-components">*/}
    //   {/*  <img src={logo} className="App-logo" alt="logo" />*/}
    //   {/*  <p>*/}
    //   {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
    //   {/*  </p>*/}
    //   {/*  <a*/}
    //   {/*    className="App-link"*/}
    //   {/*    href="https://reactjs.org"*/}
    //   {/*    target="_blank"*/}
    //   {/*    rel="noopener noreferrer"*/}
    //   {/*  >*/}
    //   {/*    Learn React*/}
    //   {/*  </a>*/}
    //   {/*</components>*/}
    // </div>
  );
}

export default App;
