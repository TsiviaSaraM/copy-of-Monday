import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { BoardAside } from '../cmps/BoardAside.jsx'
import { TaskBoard } from '../cmps/TaskBoard.jsx'
import { boardService } from '../services/boardService'
import { userService } from '../services/userService'
import { removeBoard, loadBoards, getBoardById, saveBoard, setCurrBoard } from '../store/actions/boardActions.js'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export const TaskApp = () => {


    const dispatch = useDispatch()
    const { boards, currBoard } = useSelector(state => state.boardModule)

    // const {currBoard} = useSelector(state => state.currBoard)

    useEffect(async () => {
        await dispatch(loadBoards())
        // debugger
        console.log('boards', boards);
        if (boards[0] && !currBoard) dispatch(setCurrBoard(boards[0]._id))
    }, [])

    const onAddBoard = async (board) => {
        await dispatch(saveBoard(board))
        dispatch(loadBoards())
    }

    const onSelectBoard = async (currBoard) => {
        debugger
        dispatch(setCurrBoard(currBoard))
        // await dispatch(getBoardById(board._id)) //sets the currBoard
        alert('new curr board', currBoard._id)
    }

    const onRemoveBoard = async (board) => {
        await dispatch(removeBoard(board._id))
    }

    const onEditBoard = async (updatedboard) => {
        await dispatch(saveBoard(updatedboard))
        dispatch(loadBoards()) //TODO may not need this
    }

    if (!boards || !currBoard) return (<p>loading</p>)

    return (
        <div className="task-app">
            <BoardAside boards={boards} onAddBoard={onAddBoard} onSelectBoard={onSelectBoard} onRemoveBoard={onRemoveBoard} onEditBoard={onEditBoard} />
            {boards.forEach(board => {
                <p>{board._id}</p>
            })}
            <p>curr board: {currBoard._id}</p>
            <TaskBoard board={currBoard }></TaskBoard>
        </div>
    )
}

