import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={counter:0};
  }

  buttonClicked = () =>{
    this.setState({counter:this.state.counter+1});
  }

  render(){
    return (
      <div class='App'>
        <button onClick={this.buttonClicked}>increment</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}


export default App;
