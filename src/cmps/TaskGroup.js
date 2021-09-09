import React from 'react'
import { TaskPreview } from './TaskPreview'

export function TaskGroup({ group, id }) {
    return (
        <div>

            <table>
                <thead>
                    <tr>

                        <th>Title</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Due date</th>
                        <th>priority</th>
                        <th>other</th>
                    </tr>
                </thead>
                <tbody>

                    {group.tasks.map(task => (
                        <TaskPreview task={task} key={task.id} ></TaskPreview>

                    ))}
                </tbody>
            </table>

        </div>
    )
}
