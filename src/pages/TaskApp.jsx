import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { BoardAside } from '../cmps/BoardAside.jsx'
import TaskBoard from '../cmps/TaskBoard.jsx'
import { boardService } from '../services/boardService'
import { userService } from '../services/userService'
import { removeBoard, loadBoards, getBoardById, saveBoard } from '../store/actions/boardActions.js'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export const TaskApp = () => {

    
        const dispatch = useDispatch()
        const {boards, currBoard} = useSelector(state => state.boardModule)

        // const {currBoard} = useSelector(state => state.currBoard)

        useEffect(() => {
            dispatch(loadBoards())
            // return () => {
                
            // }
        }, [])
        
        const onAddBoard = (board) => {
            console.log('adding board');
            dispatch(saveBoard(board))
        }

        const onSelectBoard = (board) => {
            dispatch(getBoardById(board._id)) //sets the currBoard
            console.log('currBoard', currBoard);
        }

        const onRemoveBoard = async (board) => {
            await dispatch(removeBoard(board._id))
        }

        const onEditBoard = (updatedBoard) => {

        }
 
        if (!boards) return (<p>loading</p>)

        return (
            <div className="task-app">
                <BoardAside boards={boards} onAddBoard={onAddBoard} onSelectBoard={onSelectBoard} onRemoveBoard={onRemoveBoard} onEditBoard={onEditBoard} />
                {boards.forEach(board => {
                    <p>{board._id}</p>  
                })}
                <TaskBoard board={boards[1]} ></TaskBoard>
            </div>
        )
}

