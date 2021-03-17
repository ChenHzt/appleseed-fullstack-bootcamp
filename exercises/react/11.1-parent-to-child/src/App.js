import logo from './logo.svg';
import './App.css';
import React from 'react';

class CustomButton extends React.Component{
  constructor(props){
    super(props);
    this.state= {color:props.color, onClick:props.onClick}
  }

  render(){
    return (
      <button style={{backgroundColor:this.state.color}} onClick={this.state.onClick}>{this.state.color}</button>
    )
  }
}

class ParentComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      colors:['red','blue','green','yellow'],
      currentColor:''
    }
  }

  handleClick = (event) =>{
    this.setState({currentColor:event.target.innerHTML});
  }

  render(){
    return (
      <div className="">
      {
        this.state.colors.map((color) =>{
          return <CustomButton key={color} color={color} onClick={this.handleClick}/>
        })
      }
      <p>The selected color is: {this.state.currentColor}</p>
    </div>
    )
  }


}


function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
