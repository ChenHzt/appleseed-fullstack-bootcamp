import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [hours,setHours] = useState(0);
  
  const changeSeconds = (event) =>{
    setSeconds(event.target.value);
    setMinutes(event.target.value/60);
    setHours(event.target.value/3600);
  }
  const changeMinutes = (event) =>{
    setSeconds(event.target.value*60);
    setMinutes(event.target.value);
    setHours(event.target.value/60);
  }
  const changeHours = (event) =>{
    setSeconds(event.target.value*3600);
    setMinutes(event.target.value*60);
    setHours(event.target.value);
  }
  
  return (
    <div className="App">
      <div className="">
        <label htmlFor="seconds">Seconds</label>
        <input value={seconds} onChange={changeSeconds} id='seconds' type="number"/>
      </div>
      <div className="">
        <label htmlFor="minutes">Minutes</label>
        <input value={minutes} onChange={changeMinutes} id='minutes' type="number"/>
      </div>
      <div className="">
        <label htmlFor="hours">Hours</label>
        <input value={hours} onChange={changeHours} id='hours' type="number"/>
      </div>
    </div>
  );
}

export default App;
