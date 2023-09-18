// Хороший компонент - независимый компонент

import React,{Component} from "react";
import AppHeader from "../app-header";
import SearchInput from "../search-input";
import TaskList from "../task-list";

import './app.css'
import StatusFilter from "../status-filter";


class App extends Component{
    render(){
        const tasks = [
            {id :1, text:'Buy bread', isComplete:true},
            {id :2, text:'Buy notebook', isComplete:false},
            {id :3, text:'Send homework nakonec to', isComplete:true},
            {id :4, text:'Do homework', isComplete:false}
    
        ]
        return(
            <>
                <div className='app-todo'>
                    <AppHeader/>
    
                    <div className='top-panel d-flex'>
                        <SearchInput placeText={"Search"}/>
                        <StatusFilter text="All" active={true}/>
                        <StatusFilter text="Active"/>
                        <StatusFilter text="Done"/>
                    </div>
    
                    <TaskList tasks={tasks}/>
                </div>
    
            </>
        )
    }
}



const AppFunc = ()=>{
    const tasks = [
        {id :1, text:'Buy bread', isComplete:true},
        {id :2, text:'Buy notebook', isComplete:false},
        {id :3, text:'Send homework nakonec to', isComplete:true},
        {id :4, text:'Do homework', isComplete:false}

    ]
    return(
        <>
            <div className='app-todo'>
                <AppHeader/>

                <div className='top-panel d-flex'>
                    <SearchInput placeText={"Search"}/>
                    <StatusFilter text="All" active={true}/>
                    <StatusFilter text="Active"/>
                    <StatusFilter text="Done"/>
                </div>

                <TaskList tasks={tasks}/>
            </div>

        </>
    )
}

export  default App