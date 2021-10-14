import React from 'react'
import { TaskPreview } from './TaskPreview'


export const TaskGroup = ({ group, onEditGroup, onDeleteGroup }) => {

    const editGroup = () => {
        group.title = prompt('new group title')
        onEditGroup(group)

    }

    const addTask = () => {
        const newTask = {
            "title": prompt('new task title'),
            "status": ""
        }
        group.tasks.push(newTask)
        onEditGroup(group)
    }

    const onEditTask = (updatedTask) => {
        console.log('updated task', updatedTask);
        const taskIndex = group.tasks.findIndex(task => task.id === updatedTask.id)
        group.tasks.splice(taskIndex, 1, updatedTask)
        onEditGroup(group)
    }

    const onRemoveTask = (taskId) => {
        const taskIndex = group.tasks.findIndex(task => task.id === taskId)
        group.tasks.splice(taskIndex, 1)
        onEditGroup(group)
    }

    return (
        <div className="task-group">

            <table>
                <thead>
                <tr>

                    <th >
                        <div className="flex">
                            <div className="expand">
                            </div>
                            <div className="collapse">
                                <div className="down"></div>
                                <div className="up"></div>
                            </div>

                            <p className="group-title">{group.title}</p>
                        </div>
                        
                    </th>
                    <th>Members</th>
                    <th>Status</th>
                    <th>Due date</th>
                    <th>priority</th>
                    <th>other</th>
                </tr>
                </thead>
                <tbody>


                {group.tasks.map(task => (
                    <TaskPreview task={task} key={task.id} onEditTask={onEditTask} onRemoveTask={onRemoveTask}></TaskPreview>
                ))}
                </tbody>
            </table>
            <p onClick={editGroup }>edit group</p>
            <p onClick={() => onDeleteGroup(group.id)} >delete group</p>
            <p onClick={addTask} >add Task</p>

        </div>
    )
}
