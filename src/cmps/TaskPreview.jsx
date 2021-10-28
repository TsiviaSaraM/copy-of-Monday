import React, { useState } from 'react'
import { useRef } from 'react'
import { FormEditStatus } from './forms/FormEditStatus'
import { FormEditDate } from './forms/FormEditDate'
import { Draggable } from 'react-beautiful-dnd'
import { useOnClickOutside } from '../hooks/useOnClickOutside'


export const TaskPreview = ({ task, id, onEditTask, onRemoveTask, index, groupId }) => {

    const [statusFormOpen, setStatusFormOpen] = useState(false)
    const [dateFormOpen, setDateFormOpen] = useState(false)
    const [styles, setStyles] = useState({})

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

    return (
        <>

            <Draggable draggableId={groupId + '*' + task.id} index={index} key={task.id} type="TASK">
                {provided => (

                    <tr className="task-preview"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}

                    >
                        <td>{task.title}</td>
                        <td>MEMBERS</td>
                        <td className={"status " + task.status} onClick={togglestatusFormOpen}>
                            {task.status}
                        </td>
                        <td onClick={toggleDateFormOpen}>
                            {task.dueDate}
                        </td>
                        <td onClick={editTask}>edit task</td>
                        <td onClick={() => onRemoveTask(task.id)} >remove task</td>
                        {dateFormOpen && <td  ref={ref}><FormEditDate  styles={styles} oldDate={task.dueDate} editDate={editDate}></FormEditDate></td>}
                        {statusFormOpen && <td  ref={ref} ><FormEditStatus togglestatusFormOpen={togglestatusFormOpen} styles={styles} selectStatus={selectStatus} className={task.id}></FormEditStatus></td>}
                        <td>{task.id}</td>
                        {/* <td className={"status " + task.status} >
                                {statusFormOpen ? (
                                    <div ref={ref}>
                                        {task.status}
                                      
                                    </div>
                                ) : 
                                (
                                    <div ref={ref} onClick={() => setStatusFormOpen(true)}>{task.status}</div>
                                )}
                            
                        </td> */}
                    </tr>
                )}
            </Draggable>

        </>
    )
}

{/* <th>Title</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Due date</th>
                        <th>priority</th>
                        <th>other</th> */}