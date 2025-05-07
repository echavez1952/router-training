import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Profile } from '../components/Profile';
import { Login } from '../components/Login';


export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}


