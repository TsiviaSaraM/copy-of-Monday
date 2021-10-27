import React, { useState } from 'react'
import { FormEditStatus } from './forms/FormEditStatus'
import { FormEditDate } from './forms/FormEditDate'
import { Draggable } from 'react-beautiful-dnd'

export const TaskPreview = ({ task, id, onEditTask, onRemoveTask, index }) => {

    const [statusForm, setStatusForm] = useState(false)
    const [dateForm, setDateForm] = useState(false)
    const [styles, setStyles] = useState({

    })

    const editTask = () => {
        task.title = prompt("new title")
        onEditTask(task)
    }

    const toggleStatusForm = (event) => {
        const { pageX, pageY } = event
        setStyles({ ...styles, left: pageX, top: pageY })
        setStatusForm(!statusForm)
    }

    const toggleDateForm = (event) => {
        if (!dateForm) {
            const { pageX, pageY } = event
            setStyles({ ...styles, left: pageX, top: pageY })

        }
        setDateForm(!dateForm)
    }

    const selectStatus = (newStatus) => {
        task.status = newStatus
        console.log('task status', task.status);

        onEditTask(task)
    }

    const editDate = (newDate) => {
        task.dueDate = newDate
        onEditTask(task)
        setDateForm(false)
    }

    return (
        <>

            <Draggable draggableId={task.id} index={index}>
                {provided => (

                    <tr className="task-preview"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    
                    >
                        <td>{task.title}</td>
                        <td>MEMBERS</td>
                        <td className={"status " + task.status} onClick={toggleStatusForm}>
                            {task.status}
                        </td>
                        <td onClick={toggleDateForm}>
                            {task.dueDate}
                        </td>
                        <td onClick={editTask}>edit task</td>
                        <td onClick={() => onRemoveTask(task.id)} >remove task</td>
                        {dateForm && <td><FormEditDate styles={styles} oldDate={task.dueDate} editDate={editDate}></FormEditDate></td>}
                        {statusForm && <td  ><FormEditStatus styles={styles} selectStatus={selectStatus} className={task.id}></FormEditStatus></td>}
                        <td>{task.id}</td>
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