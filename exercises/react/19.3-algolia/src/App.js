import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  // const [query,setQuery] = useState('hooks');
  const [term, setTerm] = useState('hooks');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [movieDirector,setMovieDirector] = useState('');

  const search = async () => {
    try{
      setIsLoading(true);
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
      setData(response.data.hits);
      setIsLoading(false);

    }
    catch(e){
      console.log(e);
    }
    
  }

  useEffect(() => search(),[]);

  return (
    <div className="App">
      <input type="text" value={term} onChange={(event)=> setTerm(event.target.value)}/>
      <button onClick={search}>Search</button>
      {isLoading ? <p>Loading...</p> :null}
      <ul>
        {
          data.map(hit => <li key={hit.objectID}><a href={hit.url}>{hit.title}</a></li>)
        }
      </ul>
    </div>
  );
}

export default App;
