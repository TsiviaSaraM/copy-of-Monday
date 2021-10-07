import React from 'react'
import { TaskPreview } from './TaskPreview'


export function TaskGroup({ group, id }) {
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

                            <p className="group-title">Group Title</p>
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
                    <TaskPreview task={task} key={task.id} ></TaskPreview>

                ))}
                </tbody>
            </table>

        </div>
    )
}
