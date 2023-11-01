import React from 'react'
import axios from "axios";


function Todolist(props) {
    const editTask = (id) => {
        let updatedtsk = prompt("Enter the task", "")
        if (updatedtsk.trim() ==='') {
            return
        } else {
            axios.put('http://localhost:8000/',{task:updatedtsk, id:id})
        .then(result=>{
            props.taskEdited(result.data)
        })
        .catch(err=>console.log(err))
        }
    
    }
    const deleteTask = (id) => {
        axios.delete('http://localhost:8000/' + id)
            .then(result => {
                props.removeTask(result.data)
            })
            .catch(err => console.log(err))
    }
    const checkBoxHandle = (id) => {
        axios.put('http://localhost:8000/' + id)
            .then(result => {
                props.taskComplete(result.data)
            })
            .catch(err => console.log(err))
    };
    return (
        <div className="todo_container">
            <ul>
                {props.todolist.map((itm, k) => (
                    <li key={k}>
                        <div className={itm.completed ? "tasksList" : null}>
                            {/* <div className="tasksList" style={itm.completed ? { textDecoration: "line-through" } : {}}> */}
                            <input
                                className="checkbox"
                                type="checkbox"
                                defaultChecked={itm.completed}
                                name="completed"
                                value={itm.id}
                                onClick={() => checkBoxHandle(itm._id)}
                            />
                            {itm.task}
                        </div>
                        <div className="divclass">
                            <i onClick={() => editTask(itm._id)} className="fa-regular fa-pen-to-square"></i>
                            <i onClick={() => deleteTask(itm._id)} className="fa-solid fa-circle-xmark "></i>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist