import './App.css';
import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 20 };
  }

  componentDidMount = () => {
    const timer = setInterval(() => {
      if(this.state.seconds - 1 >=0)
      this.setState({ seconds: this.state.seconds - 1 });
      else {
        clearInterval(timer);
        document.querySelector('.spinner').style.display = 'none';
      }
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <p>{`${Math.floor(this.state.seconds / 60)}:${this.state.seconds % 60 > 9 ? this.state.seconds % 60 : '0'+this.state.seconds % 60}`}</p>
        <div class="spinner" >
          <div class="dot dot-1"></div>
          <div class="dot dot-2"></div>
          <div class="dot dot-3"></div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Spinner />
    </div>
  );
}

export default App;
