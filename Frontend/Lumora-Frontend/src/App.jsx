import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './navbar';
import Home from './Home';
import Dashboard from './Dashbaord';
import { GlobalProvider } from './GlobalContext';

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black" }}>
      <GlobalProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </GlobalProvider>
    </div>
  );
}