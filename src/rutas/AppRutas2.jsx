import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import SobreNosotros from "../pages/SobreNosotros";
import NoPage from "../pages/NoPage";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} >
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="sobrenos" element={<SobreNosotros />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
