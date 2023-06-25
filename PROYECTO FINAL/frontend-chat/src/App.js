import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaDeLogin from './Componentes/PaginaDeLogin';
import PaginaDeRegistro from './Componentes/PaginaDeRegistro';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<PaginaDeLogin/>} />
          <Route path='registro' element={<PaginaDeRegistro/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
