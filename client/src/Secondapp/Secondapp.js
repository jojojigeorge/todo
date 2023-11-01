import './Secondapp.css'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Addtask from '../components/Addtask';
import Todolist from '../components/Todolist';
function Secondapp() {
	const [todolist, setTodolist] = useState([])
	const taskComplete = task => {
		const newList = [...todolist]
		newList.forEach(item => {
			if (item._id === task._id) {
				item.completed = task.completed
			}
		})
		setTodolist(newList)
	}
	// update task after edit task
	const taskEdited = task => {
		const newList = [...todolist]
		newList.forEach(item => {
			if (item._id === task._id) {
				item.task = task.task
			}
		})
		setTodolist(newList)
	}
	const addTask = newTask => {
		setTodolist([...todolist, newTask])
	}
	const removeTask = task => {
		const newList = todolist.filter(item => !(item._id === task._id))
		setTodolist(newList)
	}
	useEffect(() => {
		axios.get('http://localhost:8000/')
			.then(result => {
				setTodolist(result.data)
			})
			.catch(err => console.log(err))
	}, []);
	return (
		<div>
			{/* Todo App Mern */}
			< Addtask addTask={addTask} />
			<Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} taskEdited={taskEdited}/>
		</div>
	)
}

export default Secondapp