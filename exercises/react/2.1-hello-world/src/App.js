import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"];
  return (
    <div className="App">
      <h1>{data.join(' ')}</h1>
    </div>
  );
}

export default App;
