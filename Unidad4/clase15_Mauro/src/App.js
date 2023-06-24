import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioLogin from "./componentes/FormularioLoggin";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FormularioLogin />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
