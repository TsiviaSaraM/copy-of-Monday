import React, {useState} from 'react'
import {FormEditStatus} from './forms/FormEditStatus'

export function TaskPreview({task, id, onEditTask, onRemoveTask}) {

    const [statusForm, setStatusForm] = useState(false)

    const editTask = () => {
        task.title = prompt("new title")
        onEditTask(task)
    }

    const toggleStatusForm = () => {

    }
    const selectStatus = (newStatus) => {
        task.status = newStatus
        console.log('task status',task.status);

        // onEditTask(task)
    }


    return (
        <tr className="task-preview">
            <td>{task.title}</td>
            <td>MEMBERS</td>
            <td className={"status " + task.status} onClick={() => setStatusForm(!statusForm)}>
                {task.status} 
                {statusForm && <FormEditStatus selectStatus={selectStatus} className={task.id}></FormEditStatus>}
            </td>
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