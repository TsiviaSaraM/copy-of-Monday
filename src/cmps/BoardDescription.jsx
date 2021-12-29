import React, { useRef, useState, useEffect } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const BoardDescription = ({ writeDescription, setWriteDescription, showDescription, currDescription, editDescription }) => {

    const ref = useRef()
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(currDescription)
        return () => {}
    }, [currDescription])
    
    useOnClickOutside(ref, () => {
        if (writeDescription && showDescription ) {
            editDescription(description)
        }
        setWriteDescription(false)
    })

    const handleDescriptionChange = (ev) => {
        setDescription(ev.target.value)
    }


    if (writeDescription && showDescription) return (
        <div className="board-description" >

            <textarea ref={ref} style={{width:"100%"}} value={description} placeholder="hi there" onChange={handleDescriptionChange} className="visible-description" name="description" id="" cols="30" rows="10" ></textarea>
        </div>
    )
    if (showDescription) return (
        <div className="board-description">
            <div onClick={() => setWriteDescription(true)} className="hidden-description">{currDescription || 'add board description'}</div>

        </div>


    )

    return (
        <div className="board-description">

            {/* board description */}
        </div>
    )
}

