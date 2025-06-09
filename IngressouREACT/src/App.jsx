import React, { useState, useEffect } from 'react';
import Login from './routes/Login.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
