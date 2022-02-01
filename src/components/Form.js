import React from "react";

const Form = ( { userInput, setUserInput, toDos, setToDos, setToDoStatus }) => {

    const userInputHandler = (e) => {
        setUserInput(e.target.value);
    };

    const submitToDo = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos,
            { text: userInput, completed: false, id: Math.random() * 1000 }
        ]);
        setUserInput("");
    }

    const statusHandler = (e) => {
        setToDoStatus(e.target.value);
    }

    return(
        <div>
            <form className="todo-form">
                <input 
                    value={userInput} 
                    onChange={userInputHandler} 
                    type="text"/>
                <button onClick={submitToDo} type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} className="select-options">
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="undone">Undone</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;