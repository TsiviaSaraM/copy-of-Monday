import React from 'react'
import { TaskList } from './TaskList.jsx';
import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';
import { AddTask } from './AddTask.jsx';

export const TaskGroup = ({ group, index, onDeleteGroup, onEditBoard, onEditGroup, addTask, editGroup }) => {
    // eslint-disable-next-line
    const [hoverAddRow, sethoverAddRow] = useState(false)
    // eslint-disable-next-line
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



                        {/* {group.tasks.map(task =>
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

                        )} */}

                    </div>
                )}
            </Draggable>

            <AddTask group={group} addTask={addTask}></AddTask>
            <div className="temp-controls flex">
                <p onClick={() => editGroup(group)}>edit group</p> 
                <p onClick={() => onDeleteGroup(group.id)}>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Delete" className="icon_component icon_component--no-focus-style"><path d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </p>
            </div>
        </div>

    )
}
