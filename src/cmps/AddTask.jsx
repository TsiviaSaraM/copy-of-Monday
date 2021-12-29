import React, { useState, useRef }  from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside'

export const AddTask = ({addTask, group}) => {

    const ref = useRef()
    const [hoverAddRow, setHoverAddRow] = useState(false)
    const [showAddBtn, setShowAddBtn] = useState(false)
    const [taskTitle, setTaskTitle] = useState('') //TODO can use LinkedStateMixin instead
    // const [newTaskTitle, setNewTaskTitle] = useState('')
    
    useOnClickOutside(ref, () => setShowAddBtn(false))

    const handleChange = (event) => setTaskTitle(event.target.value)
    const handleAddTask = () => {
        addTask(group, taskTitle)
        setTaskTitle('')
    }
    
    return (
        <div>
            <div className="row-add-task" onMouseEnter={() => setHoverAddRow(true)} onMouseLeave={() => setHoverAddRow(false)}>
                <div style={{ backgroundColor: hoverAddRow ? group.style.hover : group.style.color }} className="margin-left"></div>

                <div ref={ref} className="add-task" onClick={() => setShowAddBtn(true)}>
                    <input onChange={handleChange} className="input-add-task" type="text" placeholder="+ Add" value={taskTitle} />
                    {showAddBtn && <button className="btn-add-task" onMouseUp={() => {setShowAddBtn(false);}} onMouseDown={handleAddTask }>Add</button>}
                </div>

                <div className="margin-right"></div>
            </div>
           
        </div>
    )
}
