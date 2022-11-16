
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacto from '../Pages/Contacto';
import Home from '../Pages/Home';
import Nikkoapps from '../Pages/Nikkoapps';
import Productos from '../Pages/Productos';
import Profitplus from '../Pages/Profitplus';
import Servicios from '../Pages/Servicios';

const Router = () => (
 
    <BrowserRouter>
      <Routes>   
          <Route index element={<Home/>} />
          <Route path='/servicios/' element={<Servicios/>}/>
          <Route path='/productos/' element={<Productos/>}/>
          <Route path='/profitplus/' element={<Profitplus/>}/>
          <Route path='/nikkoapps/' element={<Nikkoapps/>}/>
          <Route path='/contacto/' element={<Contacto/>}/>

      </Routes>
  </BrowserRouter>
 
 );

 export default Router;