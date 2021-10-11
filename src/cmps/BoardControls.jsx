import React from 'react'
import { saveBoard } from '../store/actions/boardActions'

export const BoardControls = ({onAddGroup}) => {


    return (
        <div className="board-controls">
            <div onClick={onAddGroup} className="new-group">new group</div>
        </div>
    )
}
