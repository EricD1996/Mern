import './App.css';
import React, {useState} from "react";
import Todo from './components/Todo'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([... todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) =>{
    const filteredTodos = todos.filter((todo, i) =>{
      return i !== delIdx;
    })
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) =>{
      if(idx === i){
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
        <div>
          <button>Add</button>
        </div>
      </form>
      {
        todos.map((todo, i) => {
          return (
            <Todo 
              key={i} 
              todo={todo} 
              handleToggleComplete={handleToggleComplete} 
              handleTodoDelete={handleTodoDelete}
              i={i}/>
          );
        })}
    </div>
  );
}

export default App;
