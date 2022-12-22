import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import Footer from './components/Footer';
import News from './components/News';

function App() {


  return (
    <>
      <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/news' element={<News />} />
        </Routes>

      <Footer />

    </>
  )
}

export default App
