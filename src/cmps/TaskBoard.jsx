import React from 'react'
import { BoardControls } from './BoardControls';
import { BoardFilter } from './BoardFilter';
import { TaskGroup } from './TaskGroup'

export default function TaskBoard({ board }) {
    console.log(board);
    return (
        <div>
           
            <div className="board-title">
                <h1  contentEditable="true">
                    {board.title}
                </h1>
            </div>
            <div contentEditable="true">
                {board.description}
            </div>

            <BoardControls />
            <BoardFilter />
            {board.groups.map(group => <TaskGroup group={group} key={group.id} ></TaskGroup>)}
        </div>
    )
}
