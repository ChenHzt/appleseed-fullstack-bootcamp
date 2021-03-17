import logo from './logo.svg';
import './App.css';
import React from 'react';

class MyCheckBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isChecked :props.isChecked,
      text: props.text
    }
  }

  render(){
    return (
      <div className="">
        <input defaultChecked={this.state.isChecked} type="checkbox"/>
        <label > {this.state.text}</label>
      </div>
    )
  }
}

MyCheckBox.defaultProps={
  isChecked:false,
  text:'empty'
}


function App() {
  return (
    <div className="App">
      <MyCheckBox text='hii0' isChecked={true}/>
      <MyCheckBox text='hii1' isChecked={false}/>
      <MyCheckBox />
    </div>
  );
}

export default App;
