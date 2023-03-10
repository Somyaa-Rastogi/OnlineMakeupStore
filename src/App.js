import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Product from './pages/Product';

export default function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
              <Route path="/product/:id" element={<Product />} />
              <Route path="/search" element={<Search />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}