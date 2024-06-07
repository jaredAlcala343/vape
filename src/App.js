// src/App.js
import React from 'react';
import Navbar from './navbar';
import Slider from './slider';
import ProductCatalog from './productcatalog';
import Footer from './footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Slider />
        <ProductCatalog />
        <Footer />
    </div>
);
};

export default App;
