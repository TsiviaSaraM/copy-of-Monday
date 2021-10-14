import React from 'react'

export function TaskPreview({task, id, onEditTask, onRemoveTask}) {

    const editTask = () => {
        task.title = prompt("new title")
        onEditTask(task)
    }


    return (
        <tr className="task-preview">
            <td>{task.title}</td>
            <td>MEMBERS</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td onClick={editTask}>edit task</td>
            <td onClick={() => onRemoveTask(task.id)} >remove task</td>
        
        </tr>
    )
}

{/* <th>Title</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Due date</th>
                        <th>priority</th>
                        <th>other</th> */}