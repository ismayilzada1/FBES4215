import React, {Component} from "react";
import './task-list-item.css';

class TaskListItem extends Component{
    render(){
        const { text, isComplete } = this.props;
        const itemStyle = {
            textDecoration: isComplete ? 'line-through' : 'none'
        }
        return (<span className="todo-list-item">
            <span
                className='todo-list-item-text'
                style={itemStyle}
            >
                {text}
            </span>
        </span>
        )
        
    }
}


const TaskListItemFunc = ({text, isComplete})=>{
    const itemStyle = {
        textDecoration: isComplete ? 'line-through' : 'none'
    }
    return (<span className="todo-list-item">
        <span
            className='todo-list-item-text'
            style={itemStyle}
        >
            {text}
        </span>
    </span>
    )
}

export default TaskListItem