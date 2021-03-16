import logo from './logo.svg';
import './App.css';
import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: props.size, hide:''};

  }

  componentDidMount = () =>{

    setTimeout(()=>{
      console.log('bi!');
      this.setState({hide:'hide'})},4000);
  }

  render() {
    return (
      <div className={`box ${this.state.hide}`} style={{ height: this.state.size, width: this.state.size }}></div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="">
        <Box size='100px' />
        <Box size='120px' />
        <Box size='140px' />
      </div>
    )
  }
}

export default App;
