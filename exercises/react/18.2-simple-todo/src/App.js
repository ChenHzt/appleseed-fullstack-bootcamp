import logo from './logo.svg';
import './App.css';
import React from 'react';
const useState = React.useState;


function ToDoRow(props){
  return (
    <div>
      <span style={props.todo.completed?{textDecoration: 'line-through'}:{}}>{props.todo.name}</span>
      <span  onClick={() => props.onClick(props.todo.id)}>{props.todo.completed? '✓':'✗'}</span>
    </div>
  )
}

function App() {
  const [todos, setToDos] = useState([
    { id: 1, name: "CSS", completed: true },
    { id: 2, name: "JavaScript", completed: true },
    { id: 3, name: "Learn React", completed: false },
    { id: 4, name: "Learn mongoDB", completed: false },
    { id: 5, name: "Learn Node JS", completed: false },
  ]);

  const changeTodoStatus = (todoId) => {
    const todosCopy = [...todos];
    const temp = todosCopy.find(todo => todo.id === todoId);
    temp.completed = !temp.completed;
    setToDos(todosCopy);
    
  }
  return (
    <div className="App">
      {todos.map(todo => <ToDoRow todo={todo} onClick={changeTodoStatus}/>)}
    </div>
  );
}

export default App;
