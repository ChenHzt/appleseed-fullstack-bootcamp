import logo from './logo.svg';
import './App.css';
// import colored from './image/colored.png'
// import bw from './image/b&w.png'
import React,{useState,useRef,useEffect} from 'react';

function App() {
  const imageRef = useRef(null);

  return (
    <div className="App">
      <img src="./image/colored" alt="colored"/>
    </div>
  );
}

export default App;
