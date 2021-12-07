import React from 'react'
import { TaskList } from './TaskList.jsx';
import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';
import { AddTask } from './AddTask.jsx';
import { FaRegUserCircle } from "react-icons/fa";

export const TaskGroup = ({ group, index, onDeleteGroup, onEditBoard, onEditGroup, addTask, editGroup }) => {
    const [hoverAddRow, sethoverAddRow] = useState(false)
    const [showAddBtn, setshowAddBtn] = useState(false)
    return (

        <div className="task-group">

            <Draggable draggableId={group.id} index={index} type="GROUP">
                {provided => (
                    <div className="draggable-group"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}


                    >

                        <div className="task-group-header flex">
                            {/* <div className="title">Group title</div> */}
                            <div className="flex title">
                                {/* <div className="expand">
                                            </div>
                                            <div className="collapse">
                                                <div className="down">v</div>
                                                <div className="up"></div>
                                            </div> */}
                                <p className="group-title">{group.title || 'Group title'}</p>
                            </div>
                            <div className="task-group-header-wrapper flex">
                                <div className="person">Person</div>
                                <div className="status">Status</div>
                                <div className="date">date</div>
                            </div>
                        </div>

                        <div className="tbl-task-group">
                        {/* was table */}    
                                        
                            {/* <thead>
                                <tr>
                                    <th>
                                        <div className="flex">
                                            <div className="expand">
                                            </div>
                                            <div className="collapse">
                                                <div className="down">v</div>
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
                            </thead> */}

                            <TaskList group={group} key={group.id} onDeleteGroup={onDeleteGroup}
                                onEditBoard={onEditBoard} onEditGroup={onEditGroup}>
                            </TaskList>

                        {/* was table */}
                        </div> 



                        {group.tasks.map(task =>
                            <div className="task-list-2" key={task.id}>
                                <div className="margin-left" style={{ backgroundColor: group.style.hover }}></div>
                                <div className="title">{task.title}</div>
                                <div className="person">
                                    <FaRegUserCircle /> person
                                </div>
                                <div className="status">status: {task.status}</div>
                                <div className="date">due:{task.dueDate}</div>
                                <div className="temp-edit">edit task</div>

                                <div className="margin-right"></div>

                            </div>

                        )}

                    </div>
                )}
            </Draggable>

            <AddTask group={group} addTask={addTask}></AddTask>
            <p onClick={() => editGroup(group)}>edit group</p>
            <p onClick={() => onDeleteGroup(group.id)}>delete group</p>
        </div>

    )
}
