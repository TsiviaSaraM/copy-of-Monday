import React from 'react'
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai"

export const FormAddBoard = ({ onAddBoard, styles, setAddBoardFormOpen }) => {
    const [newBoard, setNewBoard] = useState(null)
    const closeForm = () => {
        console.log('closing the form');
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        console.log('handling change', field, value);
        setNewBoard({ ...newBoard, [field]: value })
        console.log('newBoard', newBoard);
    }

    const addBoard = () => {
        if (!newBoard.title) {
            alert('please give your board a title')
            return
        }
        onAddBoard(newBoard)
        setAddBoardFormOpen(false);
    }

    return (
        <div className="form-add-board">
            <button className="x" onClick={() => setAddBoardFormOpen(false)}><AiOutlineClose></AiOutlineClose></button>
            <form action="" >
                {/* <p className="x" onClick={()=>setAddBoardFormOpen(false)}>X</p> */}

                <div className="form-body flex-col">
                    <h1 className="form-title">Create board</h1>

                    <div className="board-name flex-col">
                        <label htmlFor="board_name">Board name</label>
                        <input className="input-txt" type="text" id="board_name" placeholder="New Board" name="title" onChange={handleChange} />

                    </div>

                    <div className="privacy">
                        <div className="label-privacy" >privacy</div> {/* TODO fix the css here  */}
                        <div className="radio flex" onChange={handleChange} >
                            <div className="main">
                                <label>
                                    <input type="radio" id="main" name="privacy" value="main" />
                                    Main
                                </label>
                                {/* <label htmlFor="main">main</label> */}

                            </div>
                            <div className="private">
                                <label>

                                    <input type="radio" id="private" name="privacy" value="private" />
                                    Private
                                </label>
                                {/* <label htmlFor="main">private</label> */}

                            </div>
                            <div className="shareable">
                                <label >
                                    <input type="radio" id="shareable" name="privacy" value="shareable" />
                                    shareable
                                </label>
                                <label htmlFor=""></label>
                                {/* <label htmlFor="main">shareable</label> */}

                            </div>
                        </div>
                    </div>

                </div>
                <div className="form-btns flex">
                    <button onClick={closeForm} className="btn-cancel">Cancel</button>
                    <button onClick={addBoard} className="btn-submit">Create Board</button>

                </div>



            </form>
        </div>
    )
}
