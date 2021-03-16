import logo from './logo.svg';
import './App.css';
import React from 'react';

class Box extends React.Component{
  constructor(props){
    super(props)
    this.state={currentColor:0};
  }

  componentDidMount(){
    const box = document.querySelector('.box');
    setInterval(() => {
      box.classList.toggle('color-1');
      box.classList.toggle('color-2');
    }, 500);
    setTimeout(() => {
      box.classList.add('round');
    }, 2500);
  }

  render(){
    return(
      <div className={`box color-1`}></div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Box/>
    </div>
  );
}

export default App;
