import React, { useState, useEffect} from "react";
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {

  //states
  const [userInput, setUserInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const [toDoStatus, setToDoStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

  //everytime  toDos state changes, run this function
  useEffect(() => {
    filterHandler();
  }, [toDos, toDoStatus]);
  

  //functions
  const filterHandler = () => {
    switch(toDoStatus) {
      case 'done':
        setFilterToDos(toDos.filter(toDo => toDo.completed === true))
        break;
      case 'undone':
        setFilterToDos(toDos.filter(toDo => toDo.completed === false))
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
        toDos={toDos}
        setToDos={setToDos} 
        userInput={userInput}
        setUserInput={setUserInput} 
        setToDoStatus={setToDoStatus}
      />
      <ToDoList 
        toDos={toDos} 
        setToDos={setToDos}
        filterToDos={filterToDos}
      />
    </div> 
  );
}

export default App;
