import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function ListItem(props) {
  
  const [checked, setChecked] = React.useState(props.item.isChecked);

  const checkItem = () => {
    setChecked(!checked);
    props.onCheckboxChange(props.item.id);
  } 

  return (
    <li>
      <input type="checkbox" checked={props.item.isChecked} onChange={() => checkItem()}/>
      <label>{props.item.name}</label>
    </li>
  )
}

function App() {
  const items=["one", "two", "three", "four", "five"];
  const _listItems = items.map((item,index) => {return {id:index,name:item,isChecked:false}});
  const [listItems,setListItems] = useState(_listItems);

  const checkboxChange = (itemID) =>{
    const itemsCopy = [...listItems];
    const temp = itemsCopy.find(item => item.id === itemID);
    temp.isChecked = !temp.isChecked;
    setListItems(itemsCopy);
  }

  const remove = () =>{
    const itemsLeft = listItems.filter(item => !item.isChecked);
    setListItems(itemsLeft);
  }

  const reset = () => {
    const temp = listItems.map(item => {return{...item,isChecked:false}});
    setListItems(temp);
  }

  return (
    <div className="App">
      <button onClick={remove}>Remove</button>
      <button onClick={reset}>Reset</button>

      <ul>
        {listItems.map(item => <ListItem key={item.id} item={item} onCheckboxChange={checkboxChange}/>)}

      </ul>
    </div>
  );
}

export default App;
