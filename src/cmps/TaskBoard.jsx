import React, { useRef } from 'react'
import { getEmptyGroup } from './../services/boardService';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { BoardControls } from './BoardControls';
// eslint-disable-next-line
import { BoardFilter } from './BoardFilter';
import { useDispatch } from 'react-redux';

import { getEmptyTask } from './../services/boardService'
import { TaskGroup } from './TaskGroup';
import { getBoardById } from '../store/actions/boardActions';
import { AiFillInfoCircle, AiOutlineInfoCircle } from 'react-icons/ai'
import { useState } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { BoardDescription } from './BoardDescription';
import { useSelector } from 'react-redux';

//board is state.currBoard
export const TaskBoard = ({ board, onEditBoard, }) => {

    const dispatch = useDispatch()
    const ref = useRef()
    const [showDescription, setShowDescription] = useState(false)
    const [writeDescription, setWriteDescription] = useState(false)
    const [titleRef, setTitleRef] = useState(null)
    const [boardTitle, setBoardTitle] = useState(board.title) //TODO put the actual title here
    const {loggedInUser} = useSelector(state => state.userModule)
    // useOnClickOutside

    useOnClickOutside(ref, () => {
        console.log('outside click');
        setTitleRef(null)
        board.title = boardTitle
        // debugger
        onEditBoard(board)
        setShowDescription(false)
    })


    const handleFilterChange = async (filterBy) => {
        try {
            dispatch(getBoardById(board._id, filterBy))
        } catch (error) {
            console.log(error);
        }
    }

    const editDescription = (newDescription) => {
        onEditBoard({...board, description: newDescription})
    }

    const addGroup = () => {
        const newGroup = getEmptyGroup()
        board.groups.unshift(newGroup)
        console.log(board.groups);
        onEditBoard(board)
    }

    const onEditGroup = (updatedGroup) => {
        const groupIndex = board.groups.findIndex(group => group.id === updatedGroup.id)
        board.groups.splice(groupIndex, 1, updatedGroup)
        onEditBoard(board)
        // const newBoard = {...board, groups:[...board.groups]}
    }

    const onDeleteGroup = (groupId) => {
        console.log('group do delete', groupId);
        const groupIndex = board.groups.findIndex(group => group.id === groupId)
        board.groups.splice(groupIndex, 1)
        onEditBoard(board)
    }

    const editGroup = (group) => {
        group.title = prompt('new group title')
        onEditGroup(group)

    }

    const onEditBoardTitle = (ev) => {
        if (titleRef !== ref) setTitleRef(ref)
        setBoardTitle(ev.target.innerText)
    }

    const addTask = (group, title) => {
        if (!title) return
        const newTask = getEmptyTask()
        newTask.title = title
        newTask.status = 'new'
        newTask.person = loggedInUser
        newTask.members = []
        group.tasks.push(newTask)
        onEditGroup(group)
    }

    const onDragEnd = (result) => {
        // eslint-disable-next-line
        const { destination, source, draggableId } = result

        //if we are moving a group on a board...
        if (result.type === 'GROUP') {
            const groupToMove = board.groups[source.index]
            board.groups.splice(source.index, 1)
            // if (source.index < destination.index) destination.index--
            board.groups.splice(destination.index, 0, groupToMove)
            onEditBoard(board)
            return
        }

        //if dragged to no place, do nothing
        if (!destination) return

        //if 'moved' to original location, do nothing
        if (destination.droppableId && destination.index === source.index) return
        // if they are in different groups, move the group

        const sourceGroup = board.groups.find(group => group.id === source.droppableId)
        const destinationGroup = board.groups.find(group => group.id === destination.droppableId)
        const taskToMove = sourceGroup.tasks[source.index]
        sourceGroup.tasks.splice(source.index, 1)
        destinationGroup.tasks.splice(destination.index, 0, taskToMove)
        onEditBoard(board)

    }

    if (!board) return (<p>loading...</p>)
    if (!board.groups) return (<p>no groups...</p>)
    return (
        <div className="task-board">

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="board-container">
                    <div className="board-title" >
                        {/* NB Keep this svg here for later functionality */}
                        {/* <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" role="img" aria-hidden="true" aria-label="Shareable board" className="icon_component"><path d="M14.4492 1.96875C13.5303 1.96875 12.6503 2.33703 12.0024 2.99045C11.3549 3.64365 10.9922 4.52822 10.9922 5.44922C10.9922 5.82872 11.0538 6.20203 11.1715 6.55553L7.93392 8.51488C7.91376 8.49348 7.8933 8.47231 7.87255 8.45138C7.22474 7.79796 6.34474 7.42969 5.42578 7.42969C4.50682 7.42969 3.62682 7.79796 2.97901 8.45138C2.33142 9.10459 1.96875 9.98915 1.96875 10.9102C1.96875 11.8312 2.33142 12.7157 2.97901 13.3689C3.62682 14.0223 4.50682 14.3906 5.42578 14.3906C6.34474 14.3906 7.22474 14.0223 7.87255 13.3689C8.02518 13.215 8.16198 13.0482 8.28193 12.8711L11.0384 13.9836C11.0078 14.1699 10.9922 14.3596 10.9922 14.5508C10.9922 15.4718 11.3549 16.3564 12.0024 17.0096C12.6503 17.663 13.5303 18.0312 14.4492 18.0312C15.3682 18.0312 16.2482 17.663 16.896 17.0096C17.5436 16.3564 17.9062 15.4718 17.9062 14.5508C17.9062 13.6298 17.5436 12.7452 16.896 12.092C16.2482 11.4386 15.3682 11.0703 14.4492 11.0703C13.5303 11.0703 12.6503 11.4386 12.0024 12.092C11.8498 12.246 11.713 12.4128 11.5931 12.5899L8.8366 11.4774C8.86718 11.291 8.88281 11.1014 8.88281 10.9102C8.88281 10.5302 8.8211 10.1565 8.70313 9.80267L11.9402 7.84359C11.9607 7.8653 11.9814 7.88677 12.0024 7.90799C12.6503 8.56141 13.5303 8.92969 14.4492 8.92969C15.3682 8.92969 16.2482 8.56141 16.896 7.90799C17.5436 7.25479 17.9062 6.37022 17.9062 5.44922C17.9062 4.52822 17.5436 3.64365 16.896 2.99045C16.2482 2.33703 15.3682 1.96875 14.4492 1.96875ZM7.25663 11.6098C7.33922 11.3885 7.38281 11.1517 7.38281 10.9102C7.38281 10.5769 7.29985 10.2528 7.14598 9.96578C7.12923 9.94394 7.11351 9.92096 7.09893 9.89687C7.08236 9.8695 7.06776 9.8415 7.05507 9.81302C6.98326 9.70381 6.90042 9.60136 6.80733 9.50746C6.43981 9.13676 5.94272 8.92969 5.42578 8.92969C4.90884 8.92969 4.41175 9.13676 4.04423 9.50746C3.67649 9.87839 3.46875 10.3828 3.46875 10.9102C3.46875 11.4375 3.67649 11.9419 4.04423 12.3128C4.41175 12.6836 4.90884 12.8906 5.42578 12.8906C5.94272 12.8906 6.43981 12.6836 6.80733 12.3128C6.98733 12.1313 7.12899 11.9177 7.22673 11.6852C7.2315 11.671 7.23672 11.6568 7.2424 11.6428C7.24691 11.6316 7.25166 11.6206 7.25663 11.6098ZM12.6184 13.8509C12.6234 13.8402 12.6281 13.8293 12.6326 13.8182C12.6382 13.8042 12.6434 13.7901 12.6482 13.776C12.7459 13.5433 12.8876 13.3297 13.0677 13.1481C13.4352 12.7774 13.9323 12.5703 14.4492 12.5703C14.9662 12.5703 15.4632 12.7774 15.8308 13.1481C16.1985 13.519 16.4062 14.0235 16.4062 14.5508C16.4062 15.0781 16.1985 15.5826 15.8308 15.9535C15.4632 16.3242 14.9662 16.5312 14.4492 16.5312C13.9323 16.5312 13.4352 16.3242 13.0677 15.9535C12.6999 15.5826 12.4922 15.0781 12.4922 14.5508C12.4922 14.3091 12.5358 14.0723 12.6184 13.8509ZM12.7736 6.46257C12.7877 6.48583 12.8004 6.50954 12.8116 6.53361C12.8853 6.6476 12.971 6.75437 13.0677 6.85191C13.4352 7.22262 13.9323 7.42969 14.4492 7.42969C14.9662 7.42969 15.4632 7.22262 15.8308 6.85191C16.1985 6.48099 16.4062 5.97655 16.4062 5.44922C16.4062 4.92189 16.1985 4.41745 15.8308 4.04653C15.4632 3.67582 14.9662 3.46875 14.4492 3.46875C13.9323 3.46875 13.4352 3.67582 13.0677 4.04653C12.6999 4.41745 12.4922 4.92189 12.4922 5.44922C12.4922 5.78705 12.5775 6.11549 12.7354 6.40544C12.7489 6.42372 12.7616 6.44277 12.7736 6.46257Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                        <h1 contentEditable="true" onInput={onEditBoardTitle} suppressContentEditableWarning={true} ref={titleRef}>
                            {board.title}
                        </h1>
                        {showDescription && <AiFillInfoCircle className="icon-info" onClick={() => setShowDescription(false)} />}
                        {!showDescription && <AiOutlineInfoCircle className="icon-info" onClick={() => setShowDescription(true)} />}
                    </div>
                    {/* <div className="board-description" contentEditable="true"> */}


                    {   showDescription &&
                        <BoardDescription 
                        writeDescription={writeDescription}
                        showDescription={showDescription}
                        setWriteDescription={setWriteDescription}
                        currDescription={board.description}
                        editDescription={editDescription}
                    />}


                    {/* <div className="board-description" >
                        {showDescription ?
                            <textarea 
                            // onChange={handleDescriptionChange} 
                            ref={ref} className="visible-description" name="description" id="" cols="30" rows="10"></textarea> :
                            <div onClick={() => setShowDescription(true)} className="hidden-description">{board.description || 'add board descripti/on'}</div>

                        }
                    </div> */}

                    <BoardControls handleFilterChange={handleFilterChange} addGroup={addGroup} />
                    <div className="divider"></div>
                    {/* <BoardFilter /> */}
                    {/* may need to put "if (board.groups && board.groups.length )" */}
                    {board.groups.length ?

                        <Droppable droppableId={board._id} type="GROUP">
                            {provided => (
                                <div className="droppable-area"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {board.groups.map((group, index) =>

                                        <div key={group.id}>
                                            <TaskGroup group={group} index={index} key={group.id} onEditBoard={onEditBoard} onEditGroup={onEditGroup}
                                                onDeleteGroup={onDeleteGroup} editGroup={editGroup} addTask={addTask}></TaskGroup>
                                        </div>)}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        : <p>there are no groups</p>}



                </div>
            </DragDropContext>
        </div>
    )
}
