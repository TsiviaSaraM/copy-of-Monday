import React, { useState } from 'react'
import { useRef } from 'react'
import { FormEditStatus } from './forms/FormEditStatus'
import { FormEditDate } from './forms/FormEditDate'
import { Draggable } from 'react-beautiful-dnd'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { FaRegUserCircle } from "react-icons/fa";


export const TaskPreview = ({ task, id, onEditTask, onRemoveTask, index, groupId, hoverColor}) => {

    const [statusFormOpen, setStatusFormOpen] = useState(false)
    const [dateFormOpen, setDateFormOpen] = useState(false)
    const [styles, setStyles] = useState({})
    const [rowHover, setRowHover] = useState(false)

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    //   const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setStatusFormOpen(false));
    useOnClickOutside(ref, () => setDateFormOpen(false));

    const editTask = () => {
        task.title = prompt("new title")
        onEditTask(task)
    }

    const togglestatusFormOpen = (event) => {
        const { pageX, pageY } = event
        setStyles({ ...styles, left: pageX, top: pageY })
        setStatusFormOpen(!statusFormOpen)
    }

    const toggleDateFormOpen = (event) => {
        if (!dateFormOpen) {
            const { pageX, pageY } = event
            setStyles({ ...styles, left: pageX, top: pageY })

        }
        setDateFormOpen(!dateFormOpen)
    }

    const selectStatus = (newStatus) => {
        task.status = newStatus
        console.log('task status', task.status);
        setStatusFormOpen(false)
        onEditTask(task)
    }

    const editDate = (newDate) => {
        task.dueDate = newDate
        onEditTask(task)
        setDateFormOpen(false)
    }

    // eslint-disable-next-line
    const handleRowHover = () => {
        setRowHover(true)
    }

    return (
        <>  
            <Draggable draggableId={groupId + '*' + task.id} index={index} key={task.id} type="TASK">
                {provided => (

                    // <tr className="task-preview"
                    // <tr className="task-list-2"
                    <div className="task-list-2"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onMouseEnter={() => setRowHover(true)}
                        onMouseLeave={() => setRowHover(false)}
                    >
                        <div className="margin-left" style={{ backgroundColor: hoverColor }}></div>
                        <div className="task-detail title-edit-msg">{task.title}
                            
                           { rowHover && <span className="edit" onClick={editTask}>Edit</span>}
                        </div>
                        <div className="person">
                            <FaRegUserCircle /> person
                        </div>
                        <div className={"task-detail status " + task.status} onClick={togglestatusFormOpen}>
                            status: {task.status}
                        </div>
                        <div className="task-detail date" onClick={toggleDateFormOpen}>
                            due: {task.dueDate}
                        </div>
                        {/* <div className="task-detail" onClick={editTask}>edit task</div> */}
                        <div className="task-detail" onClick={() => onRemoveTask(task.id)} >remove task</div>
                        {dateFormOpen && <div ref={ref}><FormEditDate styles={styles} oldDate={task.dueDate} editDate={editDate}></FormEditDate></div>}
                        {statusFormOpen && <div ref={ref} ><FormEditStatus togglestatusFormOpen={togglestatusFormOpen} styles={styles} selectStatus={selectStatus} className={task.id}></FormEditStatus></div>}
                        <div className="task-detail" >{task.id}</div>
                        <div className="margin-right"></div>
                        {/* <div className={"status " + task.status} >
                                {statusFormOpen ? (
                                    <div ref={ref}>
                                        {task.status}
                                      
                                    </div>
                                ) : 
                                (
                                    <div ref={ref} onClick={() => setStatusFormOpen(true)}>{task.status}</div>
                                )}
                            
                        </div> */}
                    </div>
                    // </tr>
                )}
            </Draggable>

        </>
    )
}
