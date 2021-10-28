import React from 'react'
import { TaskList } from './TaskList.jsx';
import { Draggable } from 'react-beautiful-dnd'

export const TaskGroup = ({ group, index, onDeleteGroup, onEditBoard, onEditGroup, addTask, editGroup }) => {
    return (

        <div >
            I am a task group

            <Draggable draggableId={group.id} index={index} type="GROUP">
                {provided => (
                    <div className="draggable-group"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th>
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

                            <TaskList group={group} key={group.id} onDeleteGroup={onDeleteGroup}
                                onEditBoard={onEditBoard} onEditGroup={onEditGroup}>
                            </TaskList>
                        </table>
                    </div>
                )}
            </Draggable>
            <p onClick={() => editGroup(group)}>edit group</p>
            <p onClick={() => onDeleteGroup(group.id)}>delete group</p>
            <p onClick={() => addTask(group)}>add Task</p>
            {group.id}
        </div>

    )
}
