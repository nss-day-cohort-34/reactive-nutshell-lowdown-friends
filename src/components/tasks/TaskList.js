// AUTHOR: Sarah Fleming
// Purpose of the module is to display a user's list of tasks

import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskCompleted from './TaskCompleted';
import TaskManager from '../../modules/TaskManager';

export default class TaskList extends Component {

    activeUserId = sessionStorage.getItem("activeUser")

    getAllTasksAndSetState() {
        TaskManager.getAllTasks(this.activeUserId)
            .then((tasks) => {
                this.props.stateHandler('tasks', tasks)
            })
    }

    componentDidMount() {
        TaskManager.getAllTasks(this.activeUserId)
            .then((tasks) => {
                this.props.stateHandler('tasks', tasks)
            })
    }

    deleteTask = id => {
        TaskManager.deleteTaskFromDatabase(id)
            .then(() => {
                this.getAllTasksAndSetState()
            })
    }

    updateTask = taskObj => {
        TaskManager.saveEditedTaskToDatabase(taskObj)
            .then(() => {
                this.getAllTasksAndSetState()
            })
    }

    render() {
        return (
            <>
                <div className="task__list">
                    {this.props.state.tasks.filter(task => task.isCompleted === false)
                        .map(task =>
                            <TaskCard
                                key={task.id}
                                task={task}
                                deleteTask={this.deleteTask}
                                updateTask={this.updateTask}
                                {...this.props}
                            />
                        )}
                </div>
                <div className="task__completed">
                    {this.props.state.tasks.filter(task => task.isCompleted === true && !this.props.state.isHidden)
                        .map(task =>
                            <TaskCompleted
                                key={task.id}
                                task={task}
                                deleteTask={this.deleteTask}
                                updateTask={this.updateTask}
                                {...this.props}
                            />
                        )}
                </div>
            </>
        )
    }
}