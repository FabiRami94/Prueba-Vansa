
import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import Video from './views/Video/Video';
import Servicios from './views/Servicios/Servicios';
import Redes from './views/Redes/Redes';
import Cierre from './views/Cierre/Cierre';
import LandingPage from './views/LandingPage/LandingPage';

function App() {

  return (
    <body>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/' element={<LandingPage></LandingPage>}></Route> */}
        <Route path='/info' element={<Info></Info>}></Route>
        <Route path='/video' element={<Video></Video>}></Route>
        <Route path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route path='/redes' element={<Redes></Redes>}></Route>
        <Route path='/cierre' element={<Cierre></Cierre>}></Route>
      </Routes>  
    </body>
  )
}

export default App
