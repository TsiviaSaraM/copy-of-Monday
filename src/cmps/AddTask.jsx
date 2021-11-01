import React from 'react'
import { useState } from 'react'

export const AddTask = ({addTask, group}) => {

    const [hoverAddRow, setHoverAddRow] = useState(false)
    const [showAddBtn, setShowAddBtn] = useState(false)
    const [taskTitle, setTaskTitle] = useState('') //TODO can use LinkedStateMixin instead

    const handleChange = (event) => setTaskTitle(event.target.value)

    return (
        <div>
            <div className="row-add-task" onMouseEnter={() => setHoverAddRow(true)} onMouseLeave={() => setHoverAddRow(false)}>
                <div style={{ backgroundColor: hoverAddRow ? group.style.hover : group.style.color }} className="margin-left"></div>

                <div className="add-task" onClick={() => setShowAddBtn(true)}>
                    <input onChange={handleChange} className="input-add-task" type="text" placeholder="+Add" />
                    {showAddBtn && <button className="btn-add-group" onMouseUp={() => setShowAddBtn(false)} onMouseDown={() => addTask(group, taskTitle)}>Add</button>}
                </div>

                <div className="margin-right"></div>
            </div>
           
        </div>
    )
}
