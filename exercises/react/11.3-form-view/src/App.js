import './App.css';
import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName || '',
      lastName: props.lastName || '',
      age: props.age || '',
      freeText: props.freeText || '',
    }
  }

  inputChange = (event) => {
    const obj={};
    obj[event.target.id]= event.target.value;
    this.setState(obj);
  }

  render() {

    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' value={this.state.firstName} onChange={this.inputChange} />
          </div>
          <div>
            <label htmlFor="firstName">Last Name:</label>
            <input type="text" id='lastName' value={this.state.lastName} onChange={this.inputChange} />
          </div>
          <div>
            <label htmlFor="firstName">Age:</label>
            <select name="age" id="age" onChange={this.inputChange}>
              {
                [...Array(120).keys()].map((age) => {
                  return <option key={age} value={age}>{age}</option>
                })
              }
            </select>
          </div>
          <div>
            <label htmlFor="freeText">Free Text:</label>
            <textarea id='freeText' value={this.state.freeText} onChange={this.inputChange} />
          </div>
          <div>
            <button onClick={(e) => this.props.onSubmit(e,this.state)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

class FormReview extends React.Component{

  render(){
    return (
      <div className="">
        <p>First Name: {this.props.firstName}</p>
        <p>Last Name: {this.props.lastName}</p>
        <p>Age: {this.props.age}</p>
        <p>Free Text: {this.props.freeText}</p>
        <button onClick={this.props.goBack}>Back</button>
        <button onClick={this.props.onSubmit}>Send Servey</button>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state={currentDisplayMode:'form',data:{}};
  }

  reviewForm = (event,child) => {
    event.preventDefault();
    this.setState({currentDisplayMode:'formReview'});
    this.setState({data:child});
  }

  
  submitForm = (event) => {
    // event.preventDefault();
    this.setState({currentDisplayMode:'form'});
    this.setState({data:{}});
  }

  goBack = (event) =>{
    this.setState({currentDisplayMode:'form'});
  }

  

  render(){
    console.log(this.state);
    let content;
    if(this.state.currentDisplayMode === 'form')
      content = <Form  onSubmit={this.reviewForm.bind(this)} {...this.state.data}/>;
    else content = <FormReview {...this.state.data} onSubmit={this.submitForm.bind(this)} goBack={this.goBack.bind(this)}/>;
    
    return(
      <div className="">
        {content}
      </div>
    )
  }

}

export default App;
