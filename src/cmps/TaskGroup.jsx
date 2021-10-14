import React from 'react'
import { TaskPreview } from './TaskPreview'


export function TaskGroup({ group, id, onEditBoard }) {

    const editGroup = () => {
        group.title = prompt('new group title')

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
                    <TaskPreview task={task} key={task.id} ></TaskPreview>

                ))}
                </tbody>
            </table>
            <p onClick={editGroup }>edit group</p>

        </div>
    )
}
