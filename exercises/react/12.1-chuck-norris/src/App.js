import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currentCategory:'',
      currentJoke: ''
    }
  }

  getRandomJoke = async () => {
    const category = this.state.currentCategory?`?category=${this.state.currentCategory}`:'';
    const response = await axios.get('https://api.chucknorris.io/jokes/random'+category, {});
    console.log(response);
    this.setState({ currentJoke: response.data.value });
  }  

  getCategories = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories', {});
    console.log(response);
    this.setState({ categories: response.data });
  }

  changeCategory = (event) =>{
    console.log('fref');
    this.setState({currentCategory:event.target.value});
  } 


  componentDidMount = async () => {
    await this.getCategories();
    await this.getRandomJoke();
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <p className='joke'>{this.state.currentJoke}</p>
        <button onClick={this.getRandomJoke}>Get New Joke</button>
        <div className="categoriesContainer">
          <label htmlFor="categories">Choose category:</label>
          <select id='categories' onChange={this.changeCategory} >
            <option value="">All</option>
            {this.state.categories.map((category) => {
              return <option key={category} value={category}>{category}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default App;
