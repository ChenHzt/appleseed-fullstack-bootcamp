import logo from './logo.svg';
import './App.css';
import React,{useState,useRef,useEffect} from 'react';

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  }

  const pauseVideo = () => {
    videoRef.current.pause();
  }

  return (
    <div className="App">
      <video ref={videoRef} src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"></video>
      <button onClick={playVideo}>PLAY</button>
      <button onClick={pauseVideo}>PAUSE</button>
    </div>
  );
}

export default App;
