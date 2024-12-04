import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
