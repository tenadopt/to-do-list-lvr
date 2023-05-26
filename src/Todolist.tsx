import React from "react";

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export function Todolist(props: PropsType) {



    return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <div>
            <div><input type="checkbox"/><span>{props.tasks[0].title}</span></div>
            <div><input type="checkbox"/><span>{props.tasks[1].title}</span></div>
            <div><input type="checkbox"/><span>{props.tasks[2].title}</span></div>
        </div>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>)
}