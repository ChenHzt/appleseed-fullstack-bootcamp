import logo from './logo.svg';
import './App.css';
import React from 'react';

class Button extends React.Component{
  render(){
    const isImportant = this.props.isImportant;
    const style = {};
    let btnText = '';
    if (isImportant === 'true') {
      btnText = `Important`;
      style['fontWeight'] = 'bold';
    }
    else btnText = 'not Important';
    style['margin'] = '10px';
    return (
      <button style={style}>{btnText}</button>
    );
  }
}

function App() {
  return (
    <div>
    <Button isImportant='true' />
    <Button isImportant='false' />
  </div>
  );
}

export default App;
