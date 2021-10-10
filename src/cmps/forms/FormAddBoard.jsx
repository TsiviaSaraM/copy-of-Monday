import React from 'react'
import { useState } from 'react';

export function FormAddBoard({onAddBoard}) {

    const [newBoard, setNewBoard] = useState(null)

    const closeForm = () => {
        console.log('closing the form');
    }

    const handleChange = ({target}) => {
        console.log('handling change');
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        setNewBoard( {...newBoard, [field]: value}  )
        console.log('newBoard', newBoard);
    }

    return (
        <div className="form-add-board">
            <form action="">
                <p className="x" onClick={closeForm}>x</p>
                <h1>Create board</h1>

                <label htmlFor="board_name">Board name</label>
                <input type="text" id="board_name" placeholder="new board" name="privacy" onChange={handleChange}/>

                <p>Privacy</p>
                <input type="radio" id="main" name="privacy"  onChange={handleChange}/>
                <label htmlFor="main">main</label>
                <input type="radio" id="private" name="privacy"  onSelect={handleChange}/>
                <label htmlFor="main">private</label>
                <input type="radio" id="shareable" name="privacy"  onSelect={handleChange}/>
                <label htmlFor="main">shareable</label>

                <button onClick={closeForm} className="btn-cancel">Cancel</button>
                <button onClick={onAddBoard} className="btn-create-board">Create Board</button>

                NE

            </form>
        </div>
    )
}
