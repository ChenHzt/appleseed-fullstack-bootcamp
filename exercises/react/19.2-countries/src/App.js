import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [countries,setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState('');
  // const [movieDirector,setMovieDirector] = useState('');

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      console.log(response);
      setCountries(response.data);

    }
    getData();
    
  },[]);

  return (
    <div className="App">
      <input type="text" value={countrySearch} onChange={(event)=> setCountrySearch(event.target.value)}/>
      <ul>
        {countries
        .filter(country => country.name.toLowerCase().startsWith(countrySearch.toLowerCase()))
        .map(country => <li key={country.name}>{country.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
