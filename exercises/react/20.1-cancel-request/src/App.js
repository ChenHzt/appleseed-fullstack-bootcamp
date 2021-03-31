import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getData = async () => {
      try {
        const response  = await axios.get('https://restcountries.eu/rest/v2/all',{
          cancelToken: source.token
        });
        setData(response.data);
      } catch (e) {
          console.log(e.message);
      }
    };

    getData();

    return () => {
      source.cancel("request is cancelled");
    };
  }, []);

  return <div>{data ? JSON.stringify(data) : ''}</div>;
}

function App() {
  const [toggleStatus,setToggleStatus] = useState(false);

  const btnClicked = () => {
    setToggleStatus(!toggleStatus);
  }
  return (
    <div className="App">
      <button onClick={btnClicked}>{toggleStatus?'Hide Data' : 'Show Data'}</button>
      {toggleStatus? <MyComponent/> : null}
    </div>
  );
}

export default App;
