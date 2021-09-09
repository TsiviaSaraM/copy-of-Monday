import React from 'react'

export function TaskPreview({task, id}) {
    return (
        <tr className="task-preview">
            <td>{task.title}</td>
            <td>MEMBERS</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td></td>
            <td></td>
        
        </tr>
    )
}

{/* <th>Title</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Due date</th>
                        <th>priority</th>
                        <th>other</th> */}