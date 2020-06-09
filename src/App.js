import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Carousel></Carousel>
    </div>
  );
}

export default App;
