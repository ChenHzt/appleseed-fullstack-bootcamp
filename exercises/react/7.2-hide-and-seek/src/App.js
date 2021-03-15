import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {show:true};
  }

  hideOrShow = (event) => {
    this.setState({show:!this.state.show});
    console.log(this.state.show);
  }

  render(){
    return (
      <div class='App'>
        <button onClick={this.hideOrShow}>show/hide</button>
        <div className={`square ${this.state.show ? '':'hide'}`}></div>
      </div>
    )
  }
}

export default App;
