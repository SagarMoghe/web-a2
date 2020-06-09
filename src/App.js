import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from "./Components/Carousel/Carousel";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Carousel></Carousel>
        <Footer/>
    </div>
  );
}

export default App;
