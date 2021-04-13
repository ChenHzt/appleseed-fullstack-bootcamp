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
      <video ref={videoRef} autoPlay muted src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></video>
      <button onClick={playVideo}>PLAY</button>
      <button onClick={pauseVideo}>PAUSE</button>
    </div>
  );
}

export default App;
