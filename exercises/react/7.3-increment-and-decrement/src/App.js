import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, color: 'black' };
  }
  changeLabelColor(value) {
    console.log(value);
    if (value < 0)
      this.setState({ color: 'red' });
    else if (value > 0)
      this.setState({ color: 'green' });
    else this.setState({ color: 'black' });
  }

  increment = () => {
    if (this.state.counter < 10) {
      this.changeLabelColor(this.state.counter + 1);
      this.setState({ counter: this.state.counter + 1 });
    }
  }
  decrement = () => {
    if (this.state.counter > -10) {
      this.changeLabelColor(this.state.counter - 1);
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <p className={this.state.color}>{this.state.counter}</p>
      </div>
    )
  }
}


export default App;
