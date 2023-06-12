import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterTasksType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactAPI", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}
    ])

    const addTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        const newTasks = [newTask,...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterTasksType>('all')

    let tasksForTodolist = tasks

    if (filter === 'active') {
        tasksForTodolist = tasks.filter((el) => el.isDone === false)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((el) => el.isDone === true)
    }

    const changeFilter = (value: FilterTasksType) => {
        setFilter(value)
    }

    const removeTask = (id: string) => {
        const filtredTasks = tasks.filter((el) => el.id !== id)
        setTasks(filtredTasks)
    }

    const changeTaskStatus = (id: string, isDone: boolean) => {
    let task = tasks.find(t=>t.id===id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }

    }

    return (
        <div className='App'>
            <Todolist title='List of shops'
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
