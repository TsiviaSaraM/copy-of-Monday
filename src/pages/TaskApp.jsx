import React from 'react'
import { useDispatch } from 'react-redux'
import { BoardAside } from '../cmps/BoardAside.jsx'
import { TaskBoard } from '../cmps/TaskBoard.jsx'
import { removeBoard, loadBoards, getBoardById, saveBoard, insertBoard, setFilterBy } from '../store/actions/boardActions.js'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


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
        // else {
        //     const boardId = boards[0]._id;
        //     debugger
        //     dispatch(getBoardById(boardId, filterBy))
        // }
        // eslint-disable-next-line
    }, [match.params.id])

    const editBoardFilter = async (boardFilter) => {
        console.log('boardFilter in TaskApp', boardFilter);
        await dispatch(setFilterBy(boardFilter, 'boardFilter'))
        dispatch(loadBoards(boardFilter))
    }

    const onAddBoard = async (board) => {
        await dispatch(saveBoard(board))
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
        console.log('board=', { title: 'New Board' }, 'position=', position);
        await dispatch(insertBoard({ title: 'New Board' }, position))
        dispatch(loadBoards())
    }

    const onEditBoard = async (updatedboard) => {
        await dispatch(saveBoard(updatedboard))
        dispatch(loadBoards()) //TODO may not need this
    }

    if (!boards) return (<p>loading</p>)
    if (!boards.length) return (<p>no boards</p>)
    return (
        <div className="task-app">
            <BoardAside onInsertBoard={onInsertBoard} editBoardFilter={editBoardFilter} boards={boards} onAddBoard={onAddBoard} onSelectBoard={onSelectBoard} onRemoveBoard={onRemoveBoard} onEditBoard={onEditBoard} />
            {boards.forEach(board => {
                <p>{board._id}</p>
            })}
            {match.params.id && <TaskBoard board={{...currBoard}} onEditBoard={onEditBoard} ></TaskBoard>}
            {!match.params.id && <h1>Please select a board to look at</h1> }
            
          
        </div>
    )
}

