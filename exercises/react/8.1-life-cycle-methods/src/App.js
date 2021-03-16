import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {favoriteColor:'blue'};
  }

  componentDidMount = () =>{
    setTimeout(() => this.setState({favoriteColor:'red'}),1000);
  }

  componentDidUpdate = () =>{
    document.querySelector('#myBox').innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render(){
    return (
      <div className="App">
        <h1>{`my favorite color is ${this.state.favoriteColor}`}</h1>
        <div id='myBox'></div>
      </div>
    );
  }
}

export default App;
