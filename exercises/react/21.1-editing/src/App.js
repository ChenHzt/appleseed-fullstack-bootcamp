import logo from './logo.svg';
import './App.css';
import React,{useState,useRef,useEffect} from 'react';

function App() {
  const [isEdit,setIsEdit] = useState(false);
  const [text,settext] = useState('');
  const [inputValue,setInputValue] = useState(text);

  const ref = useRef(null);

  useEffect(() => {
    if (isEdit) {
      ref.current.focus();
    }
  }, [isEdit]);

  const renderViewMode = () => {

    const func = () => {
      setIsEdit(true);
      // console.log(ref.current)
      // ref.current && ref.current.focus();
    }
    return (
      <>
        <p>{text}</p>
        <button onClick={func}>Edit</button>
      </>
    )
  }

  const renderEditMode = () => {
    const func = () => {
      setIsEdit(false);
      settext(inputValue);
    }
    return (
      <>
        <input ref={ref} value={inputValue} onChange={(event) => setInputValue(event.target.value) } type="text" />
        <button onClick={func}>Save</button>
      </>
    )
  }

  return (
    <div className="App">
      {isEdit? renderEditMode() : renderViewMode()}
    </div>
  );
}

export default App;
