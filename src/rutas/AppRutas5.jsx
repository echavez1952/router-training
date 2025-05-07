import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/LoginP';
import ProtectedRoute from '../components/ProtectedRoute';

export const Rutas = () => {
  
  const [user, setUser] = useState('user');

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route element={<ProtectedRoute canActivate={user} redirectPath='/login' />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

  

