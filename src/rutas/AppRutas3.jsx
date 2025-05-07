import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio3 from "../pages/Inicio3";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio3 />} >
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
