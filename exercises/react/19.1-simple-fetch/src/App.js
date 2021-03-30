import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [movieTitle,setMovieTitle] = useState('');
  const [movieDirector,setMovieDirector] = useState('');

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://swapi.dev/api/films/1/');
      console.log(response);
      setMovieTitle(response.data.title);
      setMovieDirector(response.data.director);
    }
    getData();
    
  },[]);

  return (
    <div className="App">
      <p>{movieTitle}</p>
      <p>{movieDirector}</p>
    </div>
  );
}

export default App;
