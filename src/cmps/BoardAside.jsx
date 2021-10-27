import React from 'react'
import { BoardFilter } from './BoardFilter'
import { FormAddBoard } from './forms/FormAddBoard'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DragAndDropList } from './DragAndDropList';

//board CRUD is here
export function BoardAside({ boards, onAddBoard, onRemoveBoard, onEditBoard, onSelectBoard }) {

    const showForm = (formClass) => {

    }

    const onEditBoardName = (board) => {
        const newName = prompt('new name')
        onEditBoard({ ...board, title: newName })
    }

    return (
        <div className="board-aside">
            <h1>Boards</h1>
            <li onClick={showForm('form-add-board')}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" className="icon_component icon_component--no-focus-style"><path d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                Add</li>
            <li>
                <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" className="icon_component icon_component--no-focus-style"><path d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                Filter
            </li>
            <li>
                <svg viewBox="0 0 20 20" fill="currentColor" width="26" height="26" role="button" tabIndex="0" aria-hidden="false" className="icon_component search-icon icon_component--clickable"><path d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                Search
            </li>
            <hr></hr>


            {boards.map(board => <li key={board._id} >

                <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" aria-label="Public board" className="icon_component"><path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <p onClick={() => onSelectBoard(board)} >{board.title} </p>
                <svg onClick={() => onEditBoardName(board)} viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="img" aria-hidden="true" aria-label="Rename Board" className="edit-board icon_component icon_component--no-focus-style"><path d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <p onClick={() => onRemoveBoard(board)}>x</p>
            </li>)}
            <FormAddBoard onAddBoard={onAddBoard} />

                <DragAndDropList></DragAndDropList>

            {/* <div className="practise-drag-drop">
                <DragDropContext onDragEnd={() => { }}>
                    <Droppable droppableId="characters">
                        {provided => {
                            <div
                            innerRef={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.droppableProps}
                            >
                                <Draggable draggableId='1' index={1} >
                                    {provided => {
                                        <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        innerRef={provided.innerRef}
                                        >hello</div>
                                    }}
                            
                            

                                </Draggable>
                                <Draggable draggableId='2' index={2}>
                                    <p>hello</p>

                                </Draggable>
                                {provided.placeholder}
                            </div>


                        }}

                    </Droppable>
                </DragDropContext>
            </div> */}

        </div>
    )
}