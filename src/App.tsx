import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type FilterTasksType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactAPI", isDone: false},
        {id: 5, title: "GraphQL", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterTasksType>('all')

    let tasksForTodolist = tasks

    if (filter === 'active') {
        tasksForTodolist = tasks.filter((el) => el.isDone === false)}

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((el) => el.isDone === true)}

    const changeFilter = (value: FilterTasksType) => {
        setFilter(value)
    }

    const removeTask = (id: number) => {
        const filtredTasks = tasks.filter((el) => el.id !== id)
        setTasks(filtredTasks)
    }

    return (
        <div className='App'>
            <Todolist title='List of shops'
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
