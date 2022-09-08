import React from 'react';
import Img1 from './image/ppic.jpg' 
import Header from './components /common/header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <img src={Img1} alt="" />
    </div>
    
  );
}

export default App;
