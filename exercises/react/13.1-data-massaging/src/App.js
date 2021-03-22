import './App.css';
import React from 'react';
import {data} from './data.js';

class Name extends React.Component{
  render(){
    console.log(this.props.names);
    return (
      <div className="names">
        {this.props.names.map((name) => {return <p key={name}>{name}</p>})}
      </div>
    )
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:data,
      names:[],
      bornBefore1990:[],
      update:0
    }
  }

  componentDidMount(){
    
    this.getAllNames();
  }
  getAllNames = () => {
    console.log(this);
    let names = this.state.data.map((person) => person.name);
    this.setState({names});
  }

  getAllBornBefore1990 = () =>{
    const bornBefore1990 = this.data.filter((person) => (new Date(person.birthday).getFullYear() < 1990));
    this.setState({bornBefore1990});
    return bornBefore1990;
  }

  render(){
    
    console.log(this.state)
    return(
      <div className="">
        <Name names={this.state.names}/>
      </div>
    )
  }
}


export default App;
