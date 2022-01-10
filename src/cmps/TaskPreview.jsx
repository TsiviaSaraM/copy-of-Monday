import React, { useState } from 'react'
import { useRef } from 'react'
import { FormEditStatus } from './forms/FormEditStatus'
import { FormEditDate } from './forms/FormEditDate'
import { Draggable } from 'react-beautiful-dnd'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { FaRegUserCircle } from "react-icons/fa";
import { UserList } from './forms/UserList';
import Avatar from "./../assets/img/avatar1.png"
import BlankAvatar from "./../assets/img/avatar2.svg"


export const TaskPreview = ({ task, id, onEditTask, onRemoveTask, index, groupId, hoverColor }) => {


    const [statusFormOpen, setStatusFormOpen] = useState(false)
    const [userListOpen, setUserListOpen] = useState(false)
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
    useOnClickOutside(ref, () => setUserListOpen(false));


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

    const toggleUserListOpen = (event) => {
        if (!userListOpen) {
            const { pageX, pageY } = event
            setStyles({ ...styles, left: pageX, top: pageY })
        }
        setUserListOpen(!userListOpen)
    }

    const selectStatus = (newStatus) => {
        task.status = newStatus
        console.log('task status', task.status);
        setStatusFormOpen(false)
        onEditTask(task)
    }

    const addMember = (user) => {
        console.log('task', task);
        task.members.push(user)
        task.person = user
        onEditTask(task)
        toggleUserListOpen()
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

                    >
                        <div className="margin-left" style={{ backgroundColor: hoverColor }}></div>
                        <div className="task-detail title-edit-msg"
                            onMouseEnter={() => setRowHover(true)}
                            onMouseLeave={() => setRowHover(false)}
                        >
                            {task.title}
                            {rowHover && <span className="edit" onClick={editTask}>Edit</span>}
                        </div>
                        <div className="task-detail person" onClick={toggleUserListOpen}>
                            <img className="img-avatar" src={task.person._id ? Avatar : BlankAvatar} alt="" />
                            <span>{task.person.fullname || 'unasigned'}</span>


                        </div>
                        <div className={"task-detail status " + task.status} onClick={togglestatusFormOpen}>
                            {task.status}
                        </div>
                        <div className="task-detail date" onClick={toggleDateFormOpen}>
                            due: {task.dueDate}
                        </div>
                        {/* <div className="task-detail" onClick={editTask}>edit task</div> */}
                        <div className="task-detail delete" onClick={() => onRemoveTask(task.id)} >
                            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Delete" className="icon_component icon_component--no-focus-style"><path d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>
                        {dateFormOpen && <div ref={ref}><FormEditDate styles={styles} oldDate={task.dueDate} editDate={editDate}></FormEditDate></div>}
                        {statusFormOpen && <div ref={ref} ><FormEditStatus togglestatusFormOpen={togglestatusFormOpen} styles={styles} selectStatus={selectStatus} className={task.id}></FormEditStatus></div>}
                        {userListOpen && <div ref={ref}><UserList toggleUserListOpen={toggleUserListOpen} addMember={addMember} styles={styles} /></div>}
                        <div className="margin-right"></div>
                    </div>
                    // </tr>
                )}
            </Draggable>

        </>
    )
}
