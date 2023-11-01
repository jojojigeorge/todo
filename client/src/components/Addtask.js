import './Addtask.css'
import React, { useState } from 'react'
import axios from 'axios'



function Addtask(props) {
    const [task, Settask] = useState('')
    // const captureTask = (event) => {
    //     Settask(event.target.value);
    // };
    const submitTask  = (event) => {
        event.preventDefault();
        if (task.trim() ==='') {
            return
        } else {
            axios.post('http://localhost:8000/', {task: task, completed: false})
            .then(res => {
                props.addTask(res.data)
                Settask('')
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className="todo_container">
            <div className="input-section">
                <h1>Todo App</h1>
                <form onSubmit={submitTask} >
                    <input type="text" onChange={e => Settask(e.target.value)} value={task} placeholder="Enter task.." />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Addtask