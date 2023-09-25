import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchInput from '../search-input';
import TaskList from '../task-list';
import './app.css';
import StatusFilter from '../status-filter';
import ItemAdd from '../item-add';

class App extends Component {
    state = {
        tasks: [
            { id: 1, text: 'Buy bread', isActive: true },
            { id: 2, text: 'Buy notebook', isActive: false },
            { id: 3, text: 'Send homework nakonec to', isActive: true },
            { id: 4, text: 'Do homework', isActive: false },
        ],
        searchText: '',
        activeFilter: 'All', // Add a state for the active filter
    };

    maxId = 1000;

    addItem = (text) => {
        const newItem = {
            id: this.maxId++,
            text: text,
            isActive: true,
        };
        this.setState(({ tasks }) => {
            const newTasks = [...tasks, newItem];
            return {
                tasks: newTasks,
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({ tasks }) => {
            const index = tasks.findIndex((e) => e.id === id);
            const newList = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
            return {
                tasks: newList,
            };
        });
    };

    onSearchChange = (searchText) => {
        this.setState({ searchText });
    };

    // ...

    search(tasks, searchText) {
        if (searchText.length === 0) {
            return tasks.filter((task) => {
                if (this.state.activeFilter === 'All') {
                    return true;
                } else if (this.state.activeFilter === 'Active') {
                    return task.isActive;
                } else if (this.state.activeFilter === 'Done') {
                    return !task.isActive;
                }
            });
        } else {
            return tasks.filter(
                (task) =>
                    task.text.toLowerCase().includes(searchText.toLowerCase()) &&
                    (this.state.activeFilter === 'All' ||
                        (this.state.activeFilter === 'Active' && task.isActive) ||
                        (this.state.activeFilter === 'Done' && !task.isActive))
            );
        }
    }

// ...


    // Function to handle filter button click
    handleFilterClick = (filter) => {
        this.setState({ activeFilter: filter });
    };

    render() {
        const { tasks, searchText, activeFilter } = this.state;
        const filteredTasks = this.search(tasks, searchText);

        return (
            <>
                <div className="app-todo">
                    <AppHeader />

                    <div className="top-panel d-flex">
                        <SearchInput
                            placeText={'Search'}
                            onSearchChange={this.onSearchChange}
                        />
                        <StatusFilter
                            text="All"
                            active={activeFilter === 'All'}
                            onClick={() => this.handleFilterClick('All')}
                        />
                        <StatusFilter
                            text="Active"
                            active={activeFilter === 'Active'}
                            onClick={() => this.handleFilterClick('Active')}
                        />
                        <StatusFilter
                            text="Done"
                            active={activeFilter === 'Done'}
                            onClick={() => this.handleFilterClick('Done')}
                        />
                    </div>

                    <TaskList tasks={filteredTasks} onDeleted={this.deleteItem} />
                    <ItemAdd onAdded={this.addItem} />
                </div>
            </>
        );
    }
}

export default App;
