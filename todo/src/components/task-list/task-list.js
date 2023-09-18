import React, {Component} from "react";
import TaskListItem from "../task-list-item";
import './task-list.css'


class TaskList extends Component{
    render(){
        const { tasks} = this.props;
        const elements = tasks.map((item)=>{
            const {id, ...itemProps} = item
            return <li key={id} className="list-group-item">
                <TaskListItem {...itemProps}
                />
            </li>
        })
        return(
            <ul className="list-group list-todo">
                {elements}
            </ul>
        )
    }
}


const TaskListFunc = ({tasks})=>{
    const elements = tasks.map((item)=>{
        const {id, ...itemProps} = item
        return <li key={id} className="list-group-item">
            <TaskListItem {...itemProps}
            />
        </li>
    })
    return(
        <ul className="list-group list-todo">
            {elements}
        </ul>
    )
}
export default TaskList