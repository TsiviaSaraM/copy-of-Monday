import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { BoardAside } from '../cmps/BoardAside.jsx'
import {TaskBoard} from '../cmps/TaskBoard.jsx'
import { userService } from '../services/userService'
import { removeBoard, loadBoards, getBoardById, saveBoard } from '../store/actions/boardActions.js'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export const TaskApp = () => {

    
        const dispatch = useDispatch()
        const {boards, currBoard, filterBy} = useSelector(state => state.boardModule)

        // const {currBoard} = useSelector(state => state.currBoard)

        useEffect(() => {
            dispatch(loadBoards())
            // if (!currBoard) dispa
            // return () => {
            // }
        }, [filterBy])
        
        const setBoardFilter = (boardFilter) => {
            dispatch(loadBoards(boardFilter))
        }

        const onAddBoard = async (board) => {
  
            await dispatch(saveBoard(board))
            dispatch(loadBoards())
        }

        const onSelectBoard = async (board) => {
            await dispatch(getBoardById(board._id)) //sets the currBoard
        }

        const onRemoveBoard = async (board) => {
            await dispatch(removeBoard(board._id))
        }

        const onEditBoard = async (updatedboard) => {
            await dispatch(saveBoard(updatedboard))
            dispatch(loadBoards()) //TODO may not need this
        }

        if (!boards) return (<p>loading</p>)

        return (
            <div className="task-app">
                <BoardAside setBoardFilter={setBoardFilter} boards={boards} onAddBoard={onAddBoard} onSelectBoard={onSelectBoard} onRemoveBoard={onRemoveBoard} onEditBoard={onEditBoard} />
                {boards.forEach(board => {
                    <p>{board._id}</p>  
                })}
                <TaskBoard board={currBoard} onEditBoard={onEditBoard} ></TaskBoard>
            </div>
        )
}

