import logo from './logo.svg';
import './App.css';
import React from 'react';
const useState = React.useState;

function Text (props) {
  const [text,setText] = useState(props.text);
  const [maxLength,setMaxLength] = useState(props.maxLength);
  const [isFull,setIsFull] = useState(false);
  
  const clicked = (event) =>{
    setIsFull(!isFull);
  }

  return (
    <>
      <p>{isFull? text : text.slice(0,maxLength) }</p>
      <span onClick={clicked}>{isFull? 'Show Less' : 'Read More'}</span>
    </>
  )

} 

function App() {
  return (
    <div className="App">
      <Text maxLength={30} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
    </div>
  );
}

export default App;
