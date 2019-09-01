import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';

class TaskList extends Component {
    state = {
        tasks: [],
    }

    activeUserId = sessionStorage.getItem("activeUser")

    componentDidMount() {
        //getAll from TaskManager and hang on to that data; put it in state
        // const activeUserId = sessionStorage.getItem("activeUser")
        TaskManager.getAllTasks(this.activeUserId)
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }
    // Wherever the state is that's holding a list of items is where you need to define actions that affect state, which is why deleteTask() is defined here instead of on TaskCard
    deleteTask = id => {
        TaskManager.deleteTaskFromDatabase(id)
            .then(() => {
                // const activeUserId = sessionStorage.getItem("activeUser")
                TaskManager.getAllTasks(this.activeUserId)
                    .then((newTasks) => {
                        this.setState({
                            tasks: newTasks
                        })
                    })
            })
    }

    render() {
        return (
            <>
                <div className="task__list">
                    {this.state.tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task}
                            deleteTask={this.deleteTask}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default TaskList;