import React from "react";
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos, filterToDos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterToDos.map((toDo) => (
                    <ToDo 
                        setToDos={setToDos}
                        toDos={toDos}
                        key={toDo.id} 
                        toDo={toDo}
                        text={toDo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;