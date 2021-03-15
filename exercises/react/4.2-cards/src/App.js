import logo from './logo.svg';
import './App.css';
import React from 'react';

class Card extends React.Component {
  render(){
    return (
      <div className='card'>
        <img className='card__image' src={this.props.imageSrc} alt='description here'/>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <div className='card__buttons'>
            <a href='#'>SHARE</a>
            <a href='#'>EXPLORE</a>
          </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Card title="title 1" description='I am card number 1' imageSrc='https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg'/>
        <Card title="title 2" description='I am card number 2' imageSrc='https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/86/71/867186_v2.jpeg'/>
        <Card title="title 3" description='I am card number 3' imageSrc='https://www.lametayel-thailand.com/wp-content/uploads/2018/08/11-aerial-view.jpg'/>
      </div>
    );
  }
}

export default App;
