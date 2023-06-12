import React, {ChangeEvent, useState} from "react";
import {FilterTasksType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterTasksType) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: FilterTasksType
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const taskList =
        props.tasks.length === 0 ? <span>TasksList is empty</span> :
            <>
                {props.tasks.map((el) => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(el.id, newIsDoneValue)
                    }
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                            <span className={el.isDone ? "task-isDone" : "task"}>{el.title}</span>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                        </li>
                    )
                })}
            </>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={(e) => {
                           setTitle(e.currentTarget.value)
                       }}
                       onKeyDown={(e) => {
                           if (e.key === 'Enter') {
                               addTaskHandler()
                           }
                       }}
                />
                <button onClick={addTaskHandler}>+</button>
            </div>
            <div>
                {taskList}
            </div>
            <div>
                <button
                    className={props.filter === "all" ? "btn-filter-active" : ""}
                    onClick={() => {
                        props.changeFilter('all')
                    }}>All
                </button>
                <button className={props.filter === "active" ? "btn-filter-active" : ""}
                        onClick={() => {
                            props.changeFilter('active')
                        }}>Active
                </button>
                <button
                    className={props.filter === "completed" ? "btn-filter-active" : ""}
                    onClick={() => {
                        props.changeFilter('completed')
                    }}>Completed
                </button>
            </div>
        </div>
    )
}