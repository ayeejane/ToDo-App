import React from "react"; 

const ToDo = ({ text, toDo, toDos, setToDos }) => {

    const deleteToDo = () => {
        //goes through the list and matches the element clicked on
        setToDos(toDos.filter((el) => el.id !== toDo.id));
    };


    const completeToDo= () => {
        setToDos(
            toDos.map(item => {
                if(item.id === toDo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            })
        );
    };

    return(
        <div className="todo">  
            <li className={'todo-item ${toDo.completed ? "completed" : ""}'}>{text}</li>
            <button onClick={completeToDo} className="check-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteToDo} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;