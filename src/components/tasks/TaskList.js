import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskCompleted from './TaskCompleted';
import TaskManager from '../../modules/TaskManager';

class TaskList extends Component {
    state = {
        tasks: [],
        isHidden: true,
    }

    activeUserId = sessionStorage.getItem("activeUser")

    componentDidMount() {
        TaskManager.getAllTasks(this.activeUserId)
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }

    deleteTask = id => {
        TaskManager.deleteTaskFromDatabase(id)
            .then(() => {
                this.componentDidMount()
            })
    }

    updateTask = taskObj => {
        TaskManager.saveEditedTaskToDatabase(taskObj)
            .then(() => {
                this.componentDidMount()
            })
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <>
            <button className="btn btn-primary" onClick={this.toggleHidden.bind(this)}>Show/Hide Completed Tasks</button>
                <div className="task__list">
                    {this.state.tasks.filter(task => task.isCompleted === false)
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
                    {this.state.tasks.filter(task => task.isCompleted === true && !this.state.isHidden)
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

export default TaskList;