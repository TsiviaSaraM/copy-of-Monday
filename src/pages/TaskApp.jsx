import React from 'react'
import { useDispatch } from 'react-redux'
import { BoardAside } from '../cmps/BoardAside.jsx'
import { TaskBoard } from '../cmps/TaskBoard.jsx'
import { removeBoard, loadBoards, getBoardById, saveBoard, insertBoard, setFilterBy } from '../store/actions/boardActions.js'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {FormLogin} from '../cmps/forms/FormLogin'


export const TaskApp = ({ match, history }) => {

    const dispatch = useDispatch()
    const { boards, currBoard, filterBy } = useSelector(state => state.boardModule)
    const { loggedInUser} = useSelector(state => state.userModule)

    // eslint-disable-next-line
    useEffect(async () => {
        await dispatch(loadBoards())
        if (match.params.id) {
            const { id } = match.params
            dispatch(getBoardById(id, filterBy))
        }
        else if (boards.length) {
            dispatch(getBoardById(boards[0]._id, filterBy))
        }
        // else {
        //     const boardId = boards[0]._id;
        //     dispatch(getBoardById(boardId, filterBy))
        // }
        // eslint-disable-next-line
    }, [match.params.id], boards)

    const editBoardFilter = async (boardFilter) => {
        await dispatch(setFilterBy(boardFilter, 'boardFilter'))
        dispatch(loadBoards(boardFilter))
    }

    const onAddBoard = async (board) => {
        const newBoard = await dispatch(saveBoard(board, loggedInUser))
        console.log('newBoard', newBoard);
        loggedInUser.mentions.push(newBoard._id)
        await dispatch()
        dispatch(loadBoards())
    }

    const onSelectBoard = async (board) => {
        history.push(`/boards/${board._id}`)
        // await dispatch(getBoardById(board._id)) //sets the currBoard
    }

    const onRemoveBoard = async (board) => {
        await dispatch(removeBoard(board._id))
    }

    const onInsertBoard = async (position) => {
        await dispatch(insertBoard({ title: 'New Board' }, position))
        dispatch(loadBoards())
    }

    const onEditBoard = async (updatedboard) => {
        await dispatch(saveBoard(updatedboard))
        dispatch(loadBoards()) //TODO may not need this
    }

    
    if (!loggedInUser) return (<FormLogin />)
    if (!boards) return (<p>loading</p>)
    if (!match.params.id && !currBoard && boards.length) dispatch(getBoardById(boards[0]._id, filterBy))
    // if (!boards.length) return (<p>no boards</p>)
    return (
        <div className="task-app">
            <BoardAside onInsertBoard={onInsertBoard} editBoardFilter={editBoardFilter} boards={boards} onAddBoard={onAddBoard} onSelectBoard={onSelectBoard} onRemoveBoard={onRemoveBoard} onEditBoard={onEditBoard} />
            {boards.forEach(board => {
                <p>{board._id}</p>
            })}
            {match.params.id && boards.length && <TaskBoard board={{...currBoard}} onEditBoard={onEditBoard} ></TaskBoard>} 
            {!match.params.id && boards.length && <TaskBoard board={{...boards[0]}} onEditBoard={onEditBoard} ></TaskBoard> }
            {/* {!match.params.id && boards.length && <h1>Please select a board to look at</h1> } */}
            {!match.params.id && !boards.length && <h1>There are no boards to choose from</h1> }
          
        </div>
    )
}

